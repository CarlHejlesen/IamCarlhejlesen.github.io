
let msgBoard={ // obejct declaration starts, called MsgBoard
    handlers: [],// Wil handle our functions
    messages: [],//Here will our messeges be stored
    boardName: "IWP Chat", //Declaring a string will be name of board
    register: function(f){//Here we make a function that can store a function in the array(handlers)
        this.handlers.push(f);
    },
    printMessages: function(){//This function purpourse is to print all the logged mMssages
        console.log("Messages History in board "+ this.boardName+":line 10");
        for(let m of this.messages)//Will be used to print all strings in the messages array. Takes first let m= message[0]
            console.log(m+" line 12"); //Here we print the messeges
    },
    putMessage: function (m){//This stores the messages in an array. called messages
        this.messages.push(m);
    },
    sendAndNotifyMessage: function(message){// this function saves our message and
        this.messages.push(message); //better: this.putMessage(message);  this puts the string in the messages array
        for(let f of this.handlers) // Will let f= handlers[0]
            f(this.boardName,message); // this runs the function in fuction handler, and gives it the parameter input boardname and message
    }
};



msgBoard.putMessage("Hej, dette er en test Line 26");
msgBoard.putMessage("Hej IWP line 27");
msgBoard.printMessages();//Runs printMessages function

//register eventHandlers (call-back functions)
function briansHandler(boardName,message){//function declaration takes in boardName"IWP Chat" and a message
    console.log(`Brian! A message from ${boardName}: ${message}`);
}
msgBoard.register(briansHandler);
msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu!")

/* EXERCISE, brug gerne et constructor funktion til at oprette msgBoards */

function MessageBoard(boardname){
    this.handlers= [];
    this.messages= [];
    this.boardName=boardname;
    this.register= function(f){
        this.handlers.push(f);
    };
    this.printMessages =function(){
        console.log("Messages History in board "+ this.boardName+":");
        for(let m of this.messages)
            console.log(m);
    };
    this.putMessage= function (m){
        this.messages.push(m);
    };
    this.sendAndNotifyMessage= function(message){
        this.messages.push(message); //better: this.putMessage(message);
        for(let f of this.handlers)
            f(this.boardName,message);
    }
}
let board2= new MessageBoard("Opgave Regning");

board2.putMessage("Hej, dette er en test");
board2.printMessages();

//register eventHandler, get message, call all back

board2.register(briansHandler);
board2.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
board2.sendAndNotifyMessage("URGENT: Opgaveregning nu!: line 70")
