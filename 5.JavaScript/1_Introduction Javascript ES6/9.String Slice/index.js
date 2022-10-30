var messeage = prompt("Type your tweet: ");

alert("you have written " + messeage.length + " characters. And you have "+ (140-(messeage.length)) + " characters left");

var tweet = messeage.slice(0, 140);

alert("your Tweet: " + tweet);

//For Verification
alert(tweet.length)