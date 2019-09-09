import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import * as io from "socket.io-client";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { AccomplishmentPage } from "./acomplishment.page";
import { EmotionsPage } from "./emotions.page";
import { LogPage } from "./log.page";
interface Message {
  id: string;
  text: string;
  type: string;
}
@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.page.html",
  styleUrls: ["./chatbot.page.scss"]
})
export class ChatbotPage implements OnInit {
  public myUserId: string;
  socket: any;
  chat_input: any;
  answers: any;
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
      text: "Hello. How are you doing today?",
      type: "incoming"
    };

    this.messages.push(item);

    item = {
      styleClass: "chat-message right",
      text: "How may I help you?",
      type: "incoming"
    };

    this.messages.push(item);

    item = {
      styleClass: "chat-message left",
      text: "I avoided caffeine",
      type: "outgoing"
    };
    this.messages.push(item);

    item = {
      styleClass: "chat-message right",
      text: "Woohoo!",
      type: "incoming"
    };

    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "Way to go choosing to skip the caffeinated options.",
      type: "incoming"
    };
    this.messages.push(item);

    item = {
      styleClass: "chat-message right",
      text: "Thanks!",
      type: "outgoing"
    };

    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "That'll prep your body for a restful night's sleep tonight. ",
      type: "incoming"
    };
    this.messages.push(item);

    item = {
      styleClass: "chat-message left",
      text: "(Achievement avoided caffeine)",
      type: "incoming"
    };
    this.messages.push(item);
    item = {
      styleClass: "chat-message left",
      text: "Cool. ",
      type: "outgoing"
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

  async openAccomplishment() {
    const modal = await this.modalController.create({
      component: AccomplishmentPage,
      componentProps: {}
    });
    return await modal.present();
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
  async openActionSheet() {
    let actionSheet = await this.actionCtrl.create({
      buttons: [
        {
          text: "Log Activity, Food and Sleep ...",
          handler: () => {
            this.openLog();
          }
        },
        {
          text: "Log Emotions...",
          handler: () => {
            this.openEmotions();
          }
        },
        {
          text: "Log accomplishment...",
          handler: () => {
            this.openAccomplishment();
          }
        }
      ]
    });
    await actionSheet.present();
  }

  tellMe() {}

  async openEmotions() {
    const modal = await this.modalController.create({
      component: EmotionsPage,
      componentProps: {}
    });
    return await modal.present();
  }
  async openLog() {
    const modal = await this.modalController.create({
      component: LogPage,
      componentProps: {}
    });
    return await modal.present();
  }
}
