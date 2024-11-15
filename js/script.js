let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let btn7 = document.querySelector(".btn7")
let btn8 = document.querySelector(".btn8")
let btn9 = document.querySelector(".btn9")
let btn10 = document.querySelector(".btn10")
let lift = document.querySelector(".lift")
let close = document.querySelector(".close")
let eshik = document.querySelector(".eshik")
let sound = new Audio('sound/elvator.mp3');
let music = new Audio('sound/qongiroq2.mp3');
let qavatname = document.querySelector(".qavatnomi")
btn1.addEventListener('click', function() {
    qavatname.innerHTML = '1Qavat'
    lift.style.marginTop = '600px'
    lift.style.transition = '3s all ease'
    eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
});
btn2.addEventListener('click', function() {
    qavatname.innerHTML = '2Qavat'
    lift.style.marginTop = '505px'
    lift.style.transition = '1s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
    setTimeout(() => {
        eshik.style.backgroundColor = 'white'
    }, 2000);
});
btn3.addEventListener('click', function() {
    qavatname.innerHTML = '3Qavat'
    lift.style.marginTop = '375px'
    lift.style.transition = '2s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
    setTimeout(() => {
        eshik.style.backgroundColor = 'white'
    }, 2000);
});
btn4.addEventListener('click', function() {
    qavatname.innerHTML = '4Qavat'
    lift.style.marginTop = '270px'
    lift.style.transition = '3s all ease'
     eshik.style.backgroundColor = 'rgb(85, 83, 83)'
    sound.play()
    setTimeout(() => {
        eshik.style.backgroundColor = 'white'
    }, 3000);
});
btn5.addEventListener('click', function() {
    qavatname.innerHTML = '5Qavat'
    lift.style.marginTop = '170px'
    lift.style.transition = '3s all ease'
     eshik.style.backgroundColor = '#303030'
    sound.play()
    setTimeout(() => {
        eshik.style.backgroundColor = 'white'
    }, 3000);
});
btn6.addEventListener('click', function() {
    qavatname.innerHTML = 'Lift ochildi'
    lift.style.transition = '2s all ease'
     eshik.style.backgroundColor = '#303030'
     eshik.style.width = '0px'
     
});
btn7.addEventListener('click', function() {
    qavatname.innerHTML = 'Lift yopildi'
    lift.style.transition = '2s all ease'
    eshik.style.backgroundColor = 'white'
    eshik.style.width = '70px'
});


btn8.addEventListener('click', function() {
    qavatname.innerHTML = '5Qavat'
    lift.style.marginTop = '90px'
    lift.style.transition = '3s all ease'
     eshik.style.backgroundColor = '#303030'
    sound.play()
    setTimeout(() => {
        eshik.style.backgroundColor = 'white'
    }, 3000);
});

btn9.addEventListener('click', function() {
    qavatname.innerHTML = '5Qavat'
    lift.style.marginTop = '-0px'
    lift.style.transition = '3s all ease'
     eshik.style.backgroundColor = '#303030'
    sound.play()
    setTimeout(() => {
        eshik.style.backgroundColor = 'white'
    }, 3000);
});
btn10.addEventListener('click', function(){
    music.play()
})