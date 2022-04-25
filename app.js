/*  document.querySelector(".heading").style.transform="rotate((20)deg)";
 document.querySelector(".heading").style.tranform="scale(1.8)";
 console.log(element); */



 const  container=document.getElementsByTagName(".container");
 var user=document.querySelector('.threeD');
 var box=document.querySelector('.user');
 var tab=document.querySelector('.tabl');


  
 user.addEventListener("mousemove",click);
 
 function click(e){
     let xAxis=(window.innerWidth/2-e.pageX)/12;
     let yAxis=(window.innerHeight/2-e.pageY)/12;
    
     user.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

console.log(xAxis)
     

 }; 

 user.addEventListener("mouseleave",(e)=>{
  
   
    user.style.transform=`rotateY(0deg) rotateX(0deg)`;
    tab.style.transform="translateZ(0px)";

console.log(xAxis)
    

}); 

user.addEventListener("mouseenter",(e)=>{
  
   
    user.style.transition="none";

    tab.style.transform="translateZ(100px)";

}); 