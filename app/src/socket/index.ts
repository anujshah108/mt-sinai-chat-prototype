import { Message } from "../components/MessageContainer.tsx/MessageContainer";

// api/index.js
const socket = new WebSocket("ws://localhost:8080/ws");

const connect = (callback: (msg: MessageEvent) => void) => {
  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg: MessageEvent) => {
    callback(msg);
  };

  socket.onclose = (event: CloseEvent) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error: Event) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg: Message) => {
  socket.send(JSON.stringify(msg));
};

export { connect, sendMsg };
