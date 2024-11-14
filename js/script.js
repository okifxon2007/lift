let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let lift = document.querySelector(".lift")
let eshik = document.querySelector(".eshik")
let sound = new Audio('sound/elvator.mp3');
let qavatname = document.querySelector(".qavatnomi")
btn1.addEventListener('click', function() {
    qavatname.innerHTML = '1Qavat'
    lift.style.marginTop = '600px'
    lift.style.transition = '1s all ease'
    eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
});
btn2.addEventListener('click', function() {
    qavatname.innerHTML = '2Qavat'
    lift.style.marginTop = '445px'
    lift.style.transition = '1s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
});
btn3.addEventListener('click', function() {
    qavatname.innerHTML = '3Qavat'
    lift.style.marginTop = '295px'
    lift.style.transition = '1s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
});
btn4.addEventListener('click', function() {
    qavatname.innerHTML = '4Qavat'
    lift.style.marginTop = '170px'
    lift.style.transition = '1s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
});
btn5.addEventListener('click', function() {
    qavatname.innerHTML = '5Qavat'
    lift.style.marginTop = '-0px'
    lift.style.transition = '1s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
});