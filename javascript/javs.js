//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
function videofunction1()
{
    document.getElementById("pic1").style.display="none";
    let video=document.getElementById('vid1');
    vid1.style.display='block';
    let url=video.getAttribute("src");
    url=url+"?autoplay=1&mute=1 ";
    video.setAttribute("src",url);
}
function videofunction2()
{
    document.getElementById("pic2").style.display="none";
    let video=document.getElementById('vid2');
    vid2.style.display='block';
    let url=video.getAttribute("src");
    url=url+"?autoplay=1&mute=1 ";
    video.setAttribute("src",url);
}

function videofunction3()
{
    document.getElementById("pic3").style.display="none";
    let video=document.getElementById('vid3');
    vid3.style.display='block';
    let url=video.getAttribute("src");
    url=url+"?autoplay=1&mute=1 ";
    video.setAttribute("src",url);
}
function videofunction4()
{
    document.getElementById("pic4").style.display="none";
    let video=document.getElementById('vid4');
    vid4.style.display='block';
    let url=video.getAttribute("src");
    url=url+"?autoplay=1&mute=1 ";
    video.setAttribute("src",url);
}
function videofunction5()
{
    document.getElementById("pic5").style.display="none";
    let video=document.getElementById('vid5');
    vid5.style.display='block';
    let url=video.getAttribute("src");
    url=url+"?autoplay=1&mute=1 ";
    video.setAttribute("src",url);
}
