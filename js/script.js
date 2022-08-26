//

 var img = document.querySelectorAll('img');
 var btn_dir = document.querySelector('.btn_dir');
var btn_esq = document.querySelector('.btn_esq');

btn_dir.addEventListener('click', dir, false)


function dir(){
   img.forEach(i => {
    if(i.style.display =="block"){
      i.style.display = "none"
    }
    
      
    });
}








