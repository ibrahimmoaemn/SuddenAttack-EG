// var myName = prompt("How Old Are You");
// if(myName > 18 )
// {
//     alert("You Are Welcome")
// }
// else
// {
//     alert("You Are Young You Cant Enter Here ")
// }

var download = document.getElementsByClassName("download-h1");
var size = document.getElementById("size");




function sum() {
    size.style.top = "190%";
    size.style.transition = "0.5s";

};

function sub() {
    size.style.top = "130%";
    size.style.transition = "0.5s";
};

var closs = document.getElementById("close");
var manue = document.getElementById("manue");
var header = document.getElementById("header");
var ul = document.getElementById("ul");

function bln() {
    header.style.height = "300px";
    header.style.transition = "1s";
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.justifyContent = "center";
    ul.style.width = "60%";
    manue.style.display = "none";
    closs.style.display = "block ";
};

function bts() {
    header.style.height = "70px";
    header.style.transition = "1s";
    manue.style.transform = "rotate(180deg)"
    // ul.style.display = "none";
    // ul.style.flexDirection = "column";
    // ul.style.justifyContent = "center";
    // ul.style.width = "60%";
    manue.style.display = "none";
    closs.style.display = "block ";



}

var soon = document.getElementById("soon");

function soos() {
    soon.style.display = "none";
}










$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".scroll").show();
        } else {
            $(".scroll").hide();
        }
    });

    $(".scroll").click(function () {
        $("body, html").animate({
                scrollTop: 0
            },
            700
        );
    });

})