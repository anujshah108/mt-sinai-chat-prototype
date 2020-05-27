package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/websocket"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var db *gorm.DB
var err error

type Message struct {
	gorm.Model
	From      string `json:"from"`
	To        string `json:"to"`
	Text      string `json:"text"`
	Timestamp int64  `json:"time"`
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func reader(conn *websocket.Conn) {
	for {

		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		var newMessage Message
		json.Unmarshal([]byte(p), &newMessage)

		dbMessage := Message{From: newMessage.From, To: newMessage.To, Text: newMessage.Text, Timestamp: time.Now().Unix()}
		db.NewRecord(dbMessage)
		db.Create(&dbMessage)

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}

	}
}

// WebSocket endpoint
func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}
	reader(ws)
}

func main() {

	//database instantiation
	db, err = gorm.Open("sqlite3", "./gorm.db")
	defer db.Close()
	db.AutoMigrate(&Message{})

	//server innstantiation
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/", func(c *gin.Context) {
		fmt.Fprintf(c.Writer, "Starting server")
	})
	r.GET("/ws", func(c *gin.Context) {
		serveWs(c.Writer, c.Request)
	})

	r.GET("/messages/:email", GetMessages)
	r.Run("localhost:8080")
}

func GetMessages(c *gin.Context) {
	email := c.Params.ByName("email")
	var allUserMessages []Message
	if err := db.Where(Message{From: email}).Or(Message{To: email}).Find(&allUserMessages).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, allUserMessages)
	}

}
