let send = document.querySelector('.knopka');
send.onclick = function validateForm(){

  let n = document.querySelector('.name').value;
  let l = document.querySelector('.lastname').value;
  let e = document.querySelector('.company').value;
  let s = document.querySelector('.subject').value;

  if(n==""){
    alert("Please enter your Name");
    return false;
  }
  if(l==""){
    alert("Please enter your Lastname");
    return false;
  }
  if(e==""){
    alert("Please enter your number");
    return false;
  }
    if(s==""){
    alert("Please enter your address");
      return false;
  }
  alert("All datas are valid!, send it to the server!")
     
             window.location.reload();
             return true;

}
const anchors = document.querySelectorAll('a[href^="#"]')
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

$(function(){
  $('.hambur').click(function(){
    $('ul').toggleClass('mainstream')
  })
});