import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
//  document.querySelector("h1").addEventListener("click",function(e){
//  alert("Bana tıkladın!")
//  });


// Kodlar buraya gelecek!


//header h1 kısmına color özelliği eklendi.
document.querySelector("header .container  .logo-heading").addEventListener("mouseover",(e)=>{
    document.querySelector("header .container  .logo-heading").style.color="red";
})

document.querySelector("header .container  .logo-heading").addEventListener("mouseout",(e)=>{
    document.querySelector("header .container  .logo-heading").style.color="black";
})
//header nav kısmına scale özelliği eklendi
const headerNav=document.querySelectorAll("header .container .nav a");

for(let i=0;i<headerNav.length;i++){
    headerNav[i].addEventListener("mousemove",(e)=>{
     headerNav[i].style.scale=1.2
})
}
for(let i=0;i<headerNav.length;i++){
    headerNav[i].addEventListener("mouseout",(e)=>{
     headerNav[i].style.scale=1
})
}
//bus img'ine border özelliği eklendi.
document.querySelector(".home header img ").addEventListener("mousedown",(e)=>{
       return document.querySelector(".home header img ").style.border="4px solid blue";
})
document.querySelector(".home header img ").addEventListener("mouseup",(e)=>{
    return document.querySelector(".home header img ").style.border="none";
})


window.addEventListener("scroll",(e)=>{
  document.querySelector(".nav-container").style.display="none"
  document.querySelector(".main-navigation").style.backgroundColor ="red";

   
})
window.addEventListener("scrollend",(e)=>{
    document.querySelector(".nav-container").style.display="flex";
   document.querySelector(".main-navigation").style.backgroundColor ="white";
})
const allImg=document.querySelectorAll("html img");
window.addEventListener("keydown",(e)=>{
    if(e.isComposing || e.keyCode === 65){
        for(let i=0;i<allImg.length;i++){
             allImg[i].style.scale=1.2;
        }
    
    }
})
window.addEventListener("keyup",(e)=>{
    if(e.isComposing || e.keyCode === 65){
        for(let i=0;i<allImg.length;i++){
            allImg[i].style.scale=1;
       }
    }
})
const allParag=document.querySelectorAll("html p")
window.addEventListener("wheel",(e)=>{
   for(let element of allParag){
    element.style.fontSize ="2rem"
   }
  
})
const allH2=document.querySelectorAll("html h2");
    window.addEventListener("dblclick",(e)=>{
    for(let element of allParag){
        element.style.color="red"
    }
    for(let element of allH2){
        element.style.color="blue"
    }
})

window.addEventListener("load",(e)=>{
    alert("Sayfa yüklendi!!!!!")
})

window.addEventListener("copy",(e)=>{
    e.preventDefault();
    console.error("kopyalama yapılamaz!!!!!!!");
    alert("kopyalama yapılamaz!!!!");
})

const headerImg=document.querySelector(".home .intro img" )
headerImg.addEventListener("drag",(e)=>{
    console.log("drag çalıştı!!");
});

headerImg.addEventListener("drag",(e)=>{
    console.log("drop çalıştı!!");
});

const allA=document.querySelectorAll(".nav-container .logo-heading .nav a");
for(let element of allA){
    element.addEventListener("click",(e)=>{
        e.stopPropagation();
        e.preventDefault();
    })
}






