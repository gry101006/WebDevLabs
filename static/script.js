x=5
y=7
z=x+y
console.log(z)
A='Hello '
B='world!'
C=A+B
console.log(C)

function SumNPrint(x1, x2){
    x3 = x1 + x2
    console.log(x3)
    return x3
}

SumNPrint(x, y)
SumNPrint(A, B)

if (C.length >= z){
    console.log("good job!")
} else {
    console.log(z)
}

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
L2 = ["Apple", "Banana", "Kiwi", "Orange"]

/* function findTheBanana(L){
    for(i = 0; i < L.length; i++){
        if (L[i] == "Banana"){
            window.alert(`found the Banana in ${i}`);
            return i
        }
    }
}

findTheBanana(L1)
findTheBanana(L2) */

/* function findTheBanana(item, index, arr){
    if (item == "Banana"){
            window.alert(`found the Banana in ` + index);
        }
}


L1.forEach(findTheBanana)
L2.forEach(findTheBanana) */

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
console.log(window.location.pathname)
if (window.location.pathname.includes("index.html") || window.location.pathname == "/"){
    greetingFunc()   
}

function addYear(){
    d = new Date();
    y = d.getFullYear();
    document.getElementById("copyYear").innerText = `Copyright ${y}, Gryphon Chong`
}

function showList(){
    document.getElementById('funList').style.display = "block" 
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
    $('#hamburgerMenu').click(function(){
        $("a.menu").toggle();
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

function highlightActive(){
    var nav = document.querySelectorAll("a.menu")
    for (let i = 0; i < nav.length; i++) {
        var currentElem = nav[i]

        if (String(window.location).includes(currentElem.getAttribute("href")) ){
            currentElem.style.color = "white";
            currentElem.style.animation = "colorShifting 1s linear infinite alternate";
        } else if (String(window.location.pathname) == "/WebDevLabs/" && currentElem.getAttribute("href").includes("index.html")) {
            currentElem.style.color = "white";
            currentElem.style.animation = "colorShifting 1s linear infinite alternate";
        }
    }
}

