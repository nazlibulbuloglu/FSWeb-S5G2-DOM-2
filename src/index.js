import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
document.addEventListener("keydown", function(event) {
    document.body.style.backgroundColor = "blue";
  });
  
  const myImage = document.querySelector(".img-content");

myImage.addEventListener("wheel", function(event) {
  event.preventDefault();
  const currentWidth = this.clientWidth;
  const currentHeight = this.clientHeight;
  this.style.width = currentWidth + 50 + "px";
  this.style.height = currentHeight + 50 + "px";
});

window.addEventListener("load", function() {
    alert("Sayfa yüklendi!");
  });
  
  const myInput = document.querySelector(".content-section");

myInput.addEventListener("focus", function() {
  this.style.border = "2px solid green";
});

myInput.addEventListener("blur", function() {
  this.style.border = "1px solid black";
});

window.addEventListener("resize", function() {
    alert("Sayfa boyutu değişti!");
  });
    
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.style.backgroundColor = 'pink';
    });
  });

  const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', () => {
  logo.style.fontFamily = 'cursive';
});

const nav = document.querySelector('.nav');

nav.addEventListener('click', () => {
  document.body.style.transition = 'background-color 1s ease-in-out';
  document.body.style.backgroundColor = 'lightblue';
});


