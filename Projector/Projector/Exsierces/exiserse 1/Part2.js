
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
    console.log(`Brian! A message from ${boardName}: ${message} line 32`); //This prints
}
msgBoard.register(briansHandler);//This is a function call, with a function as parameter input. register will save this function in an array
msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message} line 35`)); // this also sends a function
msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu! line 36")// This sends string to function the function.
//The function will save the message in messages array and run the function[0] in handlers with the input parameters board and message.
// There is curently 2 functions in the handlers array, BriansHandler & function 35.

/* EXERCISE, brug gerne et constructor funktion til at oprette msgBoards
Same Exercise just solved in a diffrent way.
 */

function MessageBoard(boardname){//function declaration
    this.handlers= [];//This is how you declare an array that is bound to this indivual function call
    this.messages= [];// Array declaration for list local function call
    this.boardName=boardname;
    this.register= function(f){//Declaring an function local to a function call
        this.handlers.push(f);//Saves parameter in handlers array
    };
    this.printMessages =function(){//Prints all strings in messages array
        console.log("Messages History in board "+ this.boardName+":");
        for(let m of this.messages) // As many elements in this array for loop will run
            console.log(m);
    };
    this.putMessage= function (m){//puts m (string) in messages array
        this.messages.push(m);
    };
    this.sendAndNotifyMessage= function(message){//will save message and run functions saved in handlers, with 2 strings as parameter input
        this.messages.push(message); //better: this.putMessage(message);
        for(let f of this.handlers)// as many elements in handlers array the loop will run
            f(this.boardName,message);//runs saved function with the locas boardname, and the input string/message
    }
}
let board2= new MessageBoard("Opgave Regning");// Here make an reforence board2 = function with this input parameter

board2.putMessage("Hej, dette er en test");// Saves string to locas messages array in board2
board2.printMessages(); // prints all saved strings in local array in function board2

//register eventHandler, get message, call all back

board2.register(briansHandler); //Saves function briansHandler in handlers array that locas for the board2 function
board2.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`)); // Also saves function in local function
board2.sendAndNotifyMessage("URGENT: Opgaveregning nu!: line 70");//This runs all the functions saved in the local array handler with the locas input parameters

