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
 document.getElementById("score").innerHTML = `Score: ${totalScore}/${correctAnswers.length}`;

 // update email box when clicked
 document.getElementById("email-1").addEventListener("click", function() {
     document.getElementById("email-box").innerHTML =  `
     <div class="email-header">
         <div class="email-header-from">From: <span>ITsupport@macrosift.com</span></div>
         <div class="email-header-to">To: <span>Employee</span></div>
         <div class="email-header-date">Date: <span>Today</span></div>
       </div>
       <div class="email-body">
         <p>Dear User,</p>
         <p>We need to check your password as it may have been in a data breach, please send it to me.</p>
         <p>Please do so urgently.</p>
         <p>IT</p>
       </div>  
       
       `; });

   document.getElementById("email-2").addEventListener("click", function() {
     document.getElementById("email-box").innerHTML =  `
     <div class="email-header">
         <div class="email-header-from">From: <span>ITsupport@macrosift.com</span></div>
         <div class="email-header-to">To: <span>Employee</span></div>
         <div class="email-header-date">Date: <span>Today</span></div>
       </div>
       <div class="email-body">
         <p>Dear User,</p>
         <p>Unfortunately we have had a data breach and believe your account has been affected. </p>
         <p>We reccommend that you should change your passwords if they are the same as this account.</p>
         <p>please check out https://haveibeenpwned.com/</p>
        
         <p>We apologise sincerely .</p>
         <p>Disaster recovery team</p>
       </div>   
       `; });

   document.getElementById("email-3").addEventListener("click", function() {
     document.getElementById("email-box").innerHTML =  `
     <div class="email-box">
       <div class="email-header">
         <div class="email-header-from">From: <span>donotreply@bankofscotland</span></div>
         <div class="email-header-to">To: <span>customer</span></div>
         <div class="email-header-date">Date: <span>Today</span></div>
       </div>
       <div class="email-body">
         <p>Dear customer,</p>
         <p>New information regarding how your account is managed is in your indox.</p>
         <p>To view this infromation head over to the Royal bank of scotland Website or log into your mobile banking app.</p>
         <p>For any queries head to the FAQ section of the website.</p>
        
         <p>Kind Regards</p>
         <p>The Customer Service Team</p>
       </div> 
     </div>  
       `; });

   document.getElementById("email-4").addEventListener("click", function() {
     document.getElementById("email-box").innerHTML =  `
      <div class="email-box">
       <div class="email-header">
         <div class="email-header-from">From: <span>Mum@Gmail.com</span></div>
         <div class="email-header-to">To: <span>You</span></div>
         <div class="email-header-date">Date: <span>Yesterday</span></div>
       </div>
       <div class="email-body">
         <p>Hi son,</p>
         <p>Remember the family trip last year.<br>
         This is a link to a selection of photos from the trip<br>
         <a class="popup" onmouseover="hover_function()" onmouseout="hover_function()" href="">Photos
         <span class="popuptext" id="myPopup">HTTPS://Photos.tinyurl.com</span>
         </a></p>
        
         <p>From</p>
         <p>Mum</p>
       </div> 
     </div>   
       `; });

     
   document.getElementById("email-5").addEventListener("click", function() {
     document.getElementById("email-box").innerHTML =  `
     <div class="email-box">
       <div class="email-header">
         <div class="email-header-from">From: <span>xhprxt@guerrillamail.com</span></div>
         <div class="email-header-to">To: <span>Employee</span></div>
         <div class="email-header-date">Date: <span>Today</span></div>
       </div>
       <div class="email-body">
         <p>Dear sales team,</p>
         <p>We are once again hosting our annual christmas ball at the East Side Club, and we need you help to make it a success!
            Planning is well underway, and we are looking for volunteers to help with the event. In exchange for £30 coupons at
            GAP. If this is something that would interest you download a copy of the signup sheet in this email. <br>
            <br>
            Thanks again,
            HR Team
         </p>
         <!--Create a line break from body to attachments-->
         <hr/>
         <img class="attachments" src="./media/images/document.png" alt="Document">
       </div> 
     </div>
       `; });

         document.getElementById("email-6").addEventListener("click", function() {
     document.getElementById("email-box").innerHTML =  `
      <div class="email-box">
       <div class="email-header">
         <div class="email-header-from">From: <span>AlexJohnson@hotmail.com</span></div>
         <div class="email-header-to">To: <span>Employee</span></div>
         <div class="email-header-date">Date: <span>1 Week Ago</span></div>
       </div>
       <div class="email-body">
         <p>Hey,</p>
         <p>It's Alex. I recently purchased a vehicle from your dealership. 
            Unfortunately, The engine has been making unusual noises, 
            and the check engine light has turned on after only a week of use. <br>
            Can I swing by for your mechanics to check it out? I hope that this isn't going to be a repeat occurence... <br>
            <br>
            Thanks, <br>
            Alex Johnson
         </p>
       </div> 
     </div>
       `; });
