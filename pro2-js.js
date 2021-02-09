const tool = document.querySelector(".tool");

document.addEventListener("scroll",()=>{
    var scroll_position = window.scrollY;
    if(scroll_position < 250){
      tool.style.display="none";
    }

    else{
      tool.style.display="flex";
    }
})
const hum = document.querySelector(".headsec .proweb .navbar .navger");
const mobmenu = document.querySelector(".headsec .proweb .navbar ul");
const mobitems = document.querySelectorAll(".headsec .proweb .navbar ul li a");
const header = document.querySelector(".abouthead");
const headertwo = document.querySelector(".coninfo .container .abouthead");
hum.addEventListener('click', () => {
  hum.classList.toggle("active");
  mobmenu.classList.toggle("active");
  header.classList.toggle("active");
  headertwo.classList.toggle("active");

});
mobitems.forEach((item) => {
  item.addEventListener('click', () => {
    hum.classList.toggle("active");
    mobmenu.classList.toggle("active");
    header.classList.toggle("active");
    headertwo.classList.toggle("active");
  });
});
