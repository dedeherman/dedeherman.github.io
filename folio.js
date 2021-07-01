//smoothScroll

var posY = 0;
var jarak = 5;

function smoothScroll(id) {
    var target = document.getElementById(id).offsetTop; // jarak antara atas dan div

    var scrollAnimate = setTimeout(function() {
            smoothScroll(id);
        }, 3) // fungsi, waktu

    posY = posY + jarak;

    //berhenti  pada bag tertentu
    if (posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;
    } else {
        window.scroll(0, posY) //x dan y
    }



    return false;
}

//fungsi untuk validasi formular

function validasi(form) {
    var lolos = true;

    for (i = 0; i < 3; i++) {
        if (form[i].value.trim().length <= 0) {

            // kalau belum ada error        
            if (form[i].nextElementSibling.className != 'error') {
                form[i].style.borderColor = 'red';
                form[i].insertAdjacentHTML('afterend', "<div class='error'> tidak boleh kosong </div>");
            }

            lolos = false;
        } else {
            if (form[i].nextElementSibling.className == 'error') {
                form[i].style.borderColor = '#0074b9';
                form[i].nextElementSibling.remove();
            }
        }
    } // end for
    return lolos;
}
