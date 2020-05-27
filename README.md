# Anuj Shah Mt.Sinai Chat Prototype

Chat Prototype for Anuj Shah 5/27/20

## Description

The application is full stack React and Golang chat prototype:

The system keeps track of number of messages and a database/persistence layer has been added using: http://gorm.io/ as well as https://github.com/gin-gonic/gin

The system uses web sockets for chat messages using: https://github.com/gorilla/websocket

For UI side the typescript version of create-react-app was used: https://create-react-app.dev/docs/adding-typescript/

### Prerequisites

Please follow below to get environment set up to run app

```
Please have npm installed on your machine.
Please have npx installed on your machine. This can be installed by typing npm install -g npx.
Please have Go version 1.11+ installed on your machine.
```

### Installing and running

Please follow along to get server and then app running to start playinng with app:

1. Please first cd into the server folder from the root directory of the app to run the server

```
cd server
go run main.go
```

The server will then run at localhost:8080

2. The from the root directory of the app and in a different terminal please cd into the app folder and run the start command:

```
cd app
npm run start
```

### To go through app:

Page 1:
Step 1 - Welcomes user and collects one input field, email. Offers “join chat” button.

Page 2:

Step 1 - User transitioned to a chat window which shows a message with their email that they joined the chat.

![alt text](./images/signin)

Step 2 - System automatically emits a welcome message introducing our Mount Sinai helper bot.

NOTE: If user has previously logged in before it will just re-render all their previous messages

Step 3 - User can type any number of other messages that append to the window chat room and a message counter at top increments up as each message is added live.

NOTE: The message counter counts the number of messages the user themselves have typed not total. This was done intentionally by adding a filter to the count.

![alt text](./images/chat)
