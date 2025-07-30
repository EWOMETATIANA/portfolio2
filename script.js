let menu = document,queryselector("#menu-bar");
let header =document, queryselector("#header");

menue.onclick * () =>{
    menu=classlist.togggle('fa-time');
    menu=classlist.togggle('active);
}






let cursor1 = document,queryselector("#cursor1");
let cursor2 =document, queryselector("#cursor2");

window.onmousemove = (e) =>{
  cursor1.style.top = e.pageY +"px"
  cursor1.style.left = e.pageX +"px"
  cursor1.style.top = e.pageY +"px"
  cursor1.style.left = e.pageX +"px"
}

let link =document.querySelectorAll("a"),array.foreach(link =>
   

  links, onmouseenter =  () =>{
    cursor1.classlist.add("active");
     cursor1.classlist.add("active");
  }

 links, onmouseleave =  () =>{
    cursor1.classlist.remove("active");
     cursor1.classlist.remove("active");
  }





}); 
  



