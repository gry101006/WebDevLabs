function greetingFunc(){
    d = new Date();
    h = d.getHours();
    if (h<12){
        greeting = 'Good morning'
    } else if (12<h<18){
        greeting = 'Good afternoon'
    } else if (18<h<20){
        greeting = 'Good evening'
    } else {
        greeting = 'Good night'
    }
    document.getElementById("greeting").innerHTML = greeting + ", I am Gryphon."
}

if (window.location.pathname.includes("index.html") || window.location.pathname == "/WebDevLabs/"){
    greetingFunc()   
}

function addYear(){
    d = new Date();
    y = d.getFullYear();
    document.getElementById("copyYear").innerText = `Copyright ${y}, Gryphon Chong`
}


$(document).ready(function(){
    $('#introReadMore').click(function(){
        $("#longBio").show();
        $("#shortBio").hide();
        $("#introReadLess").show();
        $("#introReadMore").hide();
    });
    $('#introReadLess').click(function(){
        $("#shortBio").show();
        $("#longBio").hide();
        $("#introReadMore").show();
        $("#introReadLess").hide();
    });
});

function checkForm(){
    var username = document.getElementById("name")
    var userEmail = document.getElementById("email")
    var userText = document.getElementById("comment")

    if ((username.validity.valueMissing || userEmail.validity.valueMissing || userText.validity.valueMissing)){
        document.getElementById("alert").innerHTML = "Please fill out all fields."
    }

    
}

function getAdvice(){

    fetch(`https://api.adviceslip.com/advice?nocache=${new Date().getTime()}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
        console.error("Error fetching advice:", error);
        document.getElementById("adviceText").innerText = "Oops! Something went wrong, please try again.";
    });
}