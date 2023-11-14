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



