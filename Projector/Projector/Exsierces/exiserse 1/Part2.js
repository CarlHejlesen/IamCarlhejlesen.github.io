
var msgBoard={

    Messages:[],
    putMessage: function (string) {
      this.Messages.push(string);
    },
    printMessages: function () {
for(let i=0;i<this.Messages.length;i++){
    console.log(this.Messages[i]);
}
    }
}




msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages();
