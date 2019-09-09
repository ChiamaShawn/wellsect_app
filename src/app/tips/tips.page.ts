import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from "@ionic/angular";

interface Message {
  id: string;
  text: string;
  type: string;
}
@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {
  public myUserId: string;
  socket: any;
  chat_input: any;
  answers: any;
  chat_form: string;
  constructor(
    private actionCtrl: ActionSheetController,
    private modalController: ModalController
  ) {}

  messages: Array<Message> = [];
  message: string = "";
  lastMessageId;
  ngOnInit() {
    var item;
    item = {
      styleClass: "chat-message right",
      text: "Did you have a good night sleep?",
      type: "incoming"
    };

    this.messages.push(item);

    item = {
      styleClass: "chat-message left",
      text: "I'm feeling way better than I did yesterday",
      type: "outgoing"
    };
    this.messages.push(item);

    item = {
      styleClass: "chat-message right",
      text: "Well, rest if you need to rest.",
      type: "incoming"
    };

    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "And eat foods with antioxidants to help you fight off what ails you...",
      type: "incoming"
    };
    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "Think whole grains, fruits and veggies",
      type: "incoming"
    };
    this.messages.push(item);

    item = {
      styleClass: "chat-message right",
      text: "Got it",
      type: "outgoing"
    };

    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "Take care of yourself today. Hope you make a quick recovery.",
      type: "incoming"
    };
    this.messages.push(item);

    
    item = {
      styleClass: "chat-message left",
      text: "Thank you. I'm ready to go.",
      type: "outgoing"
    };
    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "I'll be here for coaching and advice any time.",
      type: "incoming"
    };
    this.messages.push(item);

    // item = {
    //   styleClass: "chat-message left",
    //   text: "OKAY",
    //   type: "outgoing"
    // };
    // this.messages.push(item);
    // item = {
    //   styleClass: "chat-message right",
    //   text: "You're rocking it",
    //   type: "incoming"
    // };

    // this.messages.push(item);
    // // item = {
    // //   styleClass: "chat-message right",
    // //   text: "It's a part of the ups and downs that all humans go through.",
    // //   type: "incoming"
    // // };

    // // this.messages.push(item);
    // // item = {
    // //   styleClass: "chat-message left",
    // //   text: "I rock",
    // //   type: "outgoing"
    // // };
    // // this.messages.push(item);
    // // item = {
    // //   styleClass: "chat-message right",
    // //   text: "And like all things",
    // //   type: "incoming"
    // // };

    // // this.messages.push(item);
    // // item = {
    // //   styleClass: "chat-message right",
    // //   text: "It will eventually pass",
    // //   type: "incoming"
    // // };

    // // this.messages.push(item);
    // // item = {
    // //   styleClass: "chat-message left",
    // //   text: "Mhm",
    // //   type: "outgoing"
    // // };
    // // this.messages.push(item);
  }

  
  send() {
    if (this.message != "") {
      // Assign user typed message along with generated user id
      let saltedMsg = localStorage.getItem("member_id") + "#" + this.message;
      var item;
      let data = {
        user_id: localStorage.getItem("member_id"),
        message: this.message
      };
      let new_data = JSON.stringify(data);
      // Push the message through socket
      //  this.socket.emit('message', saltedMsg);
      // this.socket.emit('support_message', saltedMsg);
      console.log("emmited");
      item = {
        styleClass: "chat-message right",
        text: this.message,
        type: "outgoing"
      };
      this.messages.push(item);
    }
    this.message = "";
  }
  Receive() {
    // Socket receiving method
    this.socket.on("message", msg => {
      // separate the salted message with "#" tag
      let saletdMsgArr = msg.split("#");
      var item;
      // check the sender id and change the style class
      if (saletdMsgArr[0] == this.myUserId) {
        item = {
          styleClass: "chat-message right",
          msgStr: saletdMsgArr[1],
          type: "outgoing"
        };
      } else {
        item = {
          styleClass: "chat-message left",
          msgStr: saletdMsgArr[1],
          type: "incoming"
        };
      }
      // push the bind object to array
      // Final chats array will iterate in the view
      this.messages.push(item);
    });
  }
  getClasses(messageType) {
    return {
      incoming: messageType === "incoming",
      outgoing: messageType === "outgoing"
    };
  }

  tellMe() {

  }

 
}