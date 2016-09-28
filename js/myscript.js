/**
 * Created by kellyxcarmichael on 6/8/16.
 */

//making global variables.
var fizzylist = "";

var numList = "";

var userInput = "";

var i = "";

//removing all list items for new user input.
var cleanUpList = function () {
        fizzylist = document.getElementById("fizzBuzzList");
        while (fizzylist.hasChildNodes()) {   
            fizzylist.removeChild(fizzylist.firstChild);
        }

    };

//this function will validate user input.
var validNum = function (number) {
    if (isNaN(userInput)) {
        alert("enter an actual number!")
    }
    else if (userInput > 100) {
        alert("enter a number between 1 and 100!");
    }
    else if (userInput < 0) {
        alert("enter a positive number!")
    }
    else {
        //sending validated user number to fizz buzz function for fizzying!
        fizzBuzz(number);
    }

};

//fizz buzz computing function
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

};

//this function processes user input when the user clicks "click here".
$('.playFB').on('click', function() {
        //sending user input to validation function called validNum.
        userInput = parseInt(document.getElementById("fizzbuzzinput").value.replace(/\s/g,''));
        console.log(userInput);
    validNum(userInput);

});

//this function processes user input when the enter key is pressed.
$(document).on('keypress', function(e) {

        if (e.which === 13) {
            //sending user input to validation function called validNum.
            userInput = parseInt(document.getElementById("fizzbuzzinput").value.replace(/\s/g,''));
            validNum(userInput);

        }

});




