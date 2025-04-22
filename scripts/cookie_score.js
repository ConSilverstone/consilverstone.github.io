/* initialise cookie, we want to make sure that a cookie called "awnsers=" 
   doesn't already exist and if it does then we don't want to wipe it with a fresh one */
if (!document.cookie.split('; ').find(row => row.startsWith('answers='))) {
  document.cookie = "answers=; Path=/; SameSite=None; Secure";
}

// create a variable for the cookie answer
var cookie_answer = [];
var cookie = "";

  document.getElementById("button1").addEventListener("click", () => {
    console.log("Button 1 clicked");
      button1Function(); 
      openbox();         
  });
	  
 document.getElementById("button2").addEventListener("click", () => {
    console.log("Button 2 clicked");
      button2Function(); 
      openbox2();        
  });

function button1Function() {
    cookie_answer.push("A");
    document.cookie = "answers=" + cookie_answer.join(",");
}

function button2Function() {
    cookie_answer.push("B");
    document.cookie = "answers=" + cookie_answer.join(",");
}