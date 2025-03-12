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

function findTheBanana(item, index, arr){
    if (item == "Banana"){
            window.alert(`found the Banana in ` + index);
        }
}


L1.forEach(findTheBanana)
L2.forEach(findTheBanana)

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


