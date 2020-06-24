

var band_mates = ["brandon.jpg", "don.jpg", "doug.jpg", "thia.jpg", "ray.jpg", "jake.jpg", "steve.jpg"];
var wineries_images = ["Thanksgiving and Northfolk 2018 037.jpg", "Thanksgiving and Northfolk 2018 041.jpg", "Thanksgiving and Northfolk 2018 046.jpg", "Thanksgiving and Northfolk 2018 048.jpg", "Thanksgiving and Northfolk 2018 050.jpg", "Thanksgiving and Northfolk 2018 051.jpg", "Thanksgiving and Northfolk 2018 052.jpg"];
var corporate_images = ["IMG_1919.jpg", "IMG_1921.jpg", "IMG_1924.jpg", "IMG_1928.jpg", "IMG_1929.jpg", "IMG_1932.jpg", "IMG_1934.jpg"];


const bandMates = "./images/band_mates/";
const wineries = "./images/wineries/";
const corporate = "./images/corporate/";


bandMatesLoad();
wineriesLoad();
corporateLoad();
//addImageMain();
var imageNumber = 0;
var imageModal = 0;


function bandMatesLoad() {
    for (i = 0; i < band_mates.length; i++) {
        $(".insertImagesHere").append(`<div id = "${bandMates[i]}" class="d-flex justify-content-center"><div class="imageContainer6"><figure class="imageContainerIndex"><img class="imageStyle"src= "${bandMates}${band_mates[i]}" alt="${band_mates[i]}"></figure></div>`);
        var imageNumber = i;

    }

}

function wineriesLoad() {
    for (i = 0; i < wineries_images.length; i++) {
        $(".insertWineryImagesHere").append(`<div id = "${wineries[i]}" class="d-flex justify-content-center"><div class="imageContainer6"><figure class="imageContainerIndex"><img class="imageStyle"src= "${wineries}${wineries_images[i]}" alt="${wineries_images[i]}"></figure></div>`);
        var imageNumber = i;

    }

}

function corporateLoad() {
    for (i = 0; i < corporate_images.length; i++) {
        $(".insertCorporateImagesHere").append(`<div id = "${corporate[i]}" class="d-flex justify-content-center"><div class="imageContainer6"><figure class="imageContainerIndex"><img class="imageStyle"src= "${corporate}${corporate_images[i]}" alt="${corporate_images[i]}"></figure></div>`);
        var imageNumber = i;

    }

}

const newLocal = ".imageStyle";

//Fair and Festival modal ---------------------------------------------------------------------------

$(newLocal).on("click", function () {
    $(".insertImagesModalBandMate").empty();
    $("#myModalLabel").empty();

    var imageModal = $(this).attr('src');
    var imageModalName = imageModal.substr(45).slice(0, -4);
    $(".insertImagesModalBandMate").append(`<div class="carousel-item active link" data-interval="10000"><img src= "${bandMates}${band_mates[0]}" class="d-block w-100" alt="${band_mates[0]}"></div>`);
    //console.log("test" + imageModal);
    for (i = 1; i < band_mates.length; i++) {
        $(".insertImagesBandMate").append(`<div id = "${band_mates[i]}" class="carousel-item" data-interval="2000"><img class="d-block w-100" src= "${bandMates}${band_mates[i]}" alt="${band_mates[i]}"></div>`);
        var imageNumber = i;

    }

    $("#myModalLabel").append(`<h4 id="5" class="modal-title" >${imageModalName}</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`);
    console.log(imageModalName);
   //var slideToFF = parseInt(imageModalName);
    //$('.carousel').carousel(slideToFF - 1);
});
//End Fair and Festival Modal ---------------------------------------------------------------------


$(".cellOne").on("click", function () {
    window.open("specialEvents.html");


});

$(".cellTwo").on("click", function () {
    window.open("fairsAndFestivals.html");


});

$(".cellThree").on("click", function () {
    window.open("fairsAndFestivals.html");


});


//add this form modal
//<a href="#" class="" data-toggle="modal" data-target="#largeModal">


$(".covid").on("click", function () {
    window.location = "covid.html";
    });