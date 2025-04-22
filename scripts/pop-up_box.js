function openbox() {
  const closePopup = document.getElementById('closePopup');
  const box = document.getElementById('box');

   box.style.display = 'flex';

  closePopup.addEventListener('click', () => {
      box.style.display = 'none';
window.location.href = "email-2.html"
  });

}
function openbox2()	{	
const closePopup2 = document.getElementById('closePopup2')
  const box2 = document.getElementById('box2');

box2.style.display = 'flex';

  closePopup2.addEventListener('click', () => {
      box2.style.display = 'none';
   window.location.href = "email-2.html"
  });
}

//Hover function to show a different link	  
function hover_function() {
  var box = document.getElementById("myPopup");
  box.classList.toggle("show");
}