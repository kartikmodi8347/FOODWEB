/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var patan = {lat: 23.8493, lng: 72.1266};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: patan
    });
    var marker = new google.maps.Marker({
      position: patan,
      map: map,
      title: 'Patan, Gujarat'
    });
 }
     console.log("hello")

 



//PATAN,GUJARAT


// var patan = {lat: 23.8493, lng: 72.1266};
// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 12,
//   center: patan
// });
// var marker = new google.maps.Marker({
//   position: patan,
//   map: map,
//   title: 'Patan, Gujarat'
// });

