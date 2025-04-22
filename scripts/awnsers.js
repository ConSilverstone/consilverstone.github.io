    /* A = Phishy, B = A OK! */
    var correctAnswers = ["A","B","B","A","A","B"];
    
    var totalScore = 0
  
    //store cookie in a variable
    var cookie = document.cookie;
  
    //extract the cookie value into a dictionary
    var previousAnswers = cookie.split("=");
  
    //split the cookie value into each answer
    cookie_answer = previousAnswers[1].split(",");
        
  
      // Calculate the total score
      for (var i = 0; i < cookie_answer.length; i++) {
        if (cookie_answer[i] == correctAnswers[i]) {
            totalScore++;
          console.log(cookie_answer[i], correctAnswers[i])
        }
    }
  
      
  
    // Update the header with the total score
    document.getElementById("score").textContent = `You scored ${totalScore}/${correctAnswers.length}`;