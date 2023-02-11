
var msgBoard={//Here we declare an object called MsgBoard
    Messages:[],//Here we say that we want an array in our object
    putMessage: function (string) {//Here we make make an function on our object that takes in af string.
      this.Messages.push(string);// Here we push the string to "this" array in this oject
    },
    printMessages: function () {//Here we declare another function that will be used to print all the messages on the messageboard
        console.log("Messages History in board IWP Chat:");// Hard coded start line
for(let i=0;i<this.Messages.length;i++){// For loop to get string at index number i
    console.log(this.Messages[i]);//Here we print the log
}},
    callbacks:[],//another array where we will store our funtions
    register: function(f){this.callbacks.push(f);}// Here we push function f to the callbacks array.
}





msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages();

msgBoard.register(briansHandler);
msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu!")