//smoothScroll

var posY = 0;
var jarak = 15;

function smoothScroll(id){
  var target = document.getElementById(id).offsetTop; // jarak antara atas dan div

  var scrollAnimate = setTimeout(function(){
    smoothScroll(id);
  }, 5) // fungsi, waktu

  posY = posY + jarak;

  //berhenti  pada bag tertentu
  if(posY >= target){
    clearTimeout(scrollAnimate);
    posY = 0;
  }else{
    window.scroll(0, posY) //x dan y
  }



  return false;
}

//fungsi untuk validasi formular

function validasi(form){
  var lolos = true;

  for(i=0; i<3; i++){
    if(form[i].value.length <= 0){
      form[i].style.borderColor = 'red';
      form[i].insertAdjacentHTML('afterend', "<div class='error'> tidak boleh kosong </div>" );

      return false;
    }
  } // end for
}
