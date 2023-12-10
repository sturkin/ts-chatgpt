//For autoInjectable
require("../di");
import Chat from "../Chat/Chat";

let chat: Chat = new Chat();
chat.say('A short joke for 10 words');


//For injectable
/*
import container from "../di";
import Chat from "../Chat/Chat";

let chat: Chat = container.resolve(Chat);
chat.say('A short joke for 10 words');
*/