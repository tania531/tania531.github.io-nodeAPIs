var myFirebaseRef = new Firebase("https://torrid-heat-146.firebaseio.com/chat");

myFirebaseRef.authWithOAuthPopup("github", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

$("textarea").on("keyup", function(event){
	if(event.which === 13){

		sendMessage(this.value);
		this.value = "";
	}
});


//store name in local storage with email so not hard coded as samer
var sendMessage = function(textValue){
	myFirebaseRef.push({
		author: " Tania: ",
		message: textValue
	});
};



myFirebaseRef.on("child_added", function(snapshot){
	console.log(snapshot.val());
	 var newMessage = snapshot.val();
	 if(newMessage.author &&  newMessage.message && newMessage.message.trim().length > 0){
	 	var messageDiv = $("<div>")
                 .append($("<span>", { class: 'author', text: newMessage.author  }))
                 .append($("<span>", { text: newMessage.message }))
                 .append($("<span>", { text: moment(newMessage.messageDate).format('lll') }))
	 $("#chat").prepend(messageDiv);
	 $("#chat").prepend(messageDiv);
	 }
	 
	}, function (errorObject) {
	 console.log("The read failed: " + errorObject.code);
});


