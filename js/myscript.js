/**
 * Created by kellyxcarmichael on 6/3/16.
 */

//making global variables.
var fizzylist = "";

var numList = "";

var userInput = "";

var i;

var cleanUpList = function () {
        fizzylist = document.getElementById("fizzBuzzList");
        while (fizzylist.hasChildNodes()) {   
            fizzylist.removeChild(fizzylist.firstChild);
        }

    };


var fizzBuzz = function(numInput) {


    for (i = 1; i <= numInput; ++i) {
       
        numList += "<li>";
        if ((i % 3 === 0) && (i % 5 === 0)) {
            numList += "fizzBuzz";
        }
        else if (i % 3 === 0) {
            numList += "fizz";
        }
        else if (i % 5 === 0) {
            numList += "buzz";
        }
        else {
            numList += i;
        }
        numList += "</li>";
    }
    
    cleanUpList();
    fizzylist.innerHTML += numList;
    numList = "";

}

$('.playFB').on('click', function() {
        userInput = +document.getElementById("fizzbuzzinput").value;
        fizzBuzz(userInput);
    });

$(document).on('keypress', function(e) {

        if (e.which === 13) {
            userInput = parseInt(document.getElementById("fizzbuzzinput").value);
            fizzBuzz(userInput);
        }

    });




