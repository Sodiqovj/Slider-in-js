let left = document.querySelector('.left')
let right = document.querySelector('.right')
let img = document.querySelector('.box')
let img2 = document.querySelector('.box2')
let img3 = document.querySelector('.box3')
let turn = 0
let x = 0

left.addEventListener('click', function(){
    if (x>-1) {
        x--;
        turn = parseInt(turn)+500
        img.style.transform = `translateX(${turn}px)`
        img2.style.transform = `translateX(${turn}px)`
        img3.style.transform = `translateX(${turn}px)`
        console.log(turn);
    }
})
right.addEventListener('click', function(){
    if (x<1) {
        x++;
        turn = parseInt(turn)-500
        img.style.transform = `translateX(${turn}px)`
        img2.style.transform = `translateX(${turn}px)`
        img3.style.transform = `translateX(${turn}px)`
        console.log(turn);
    }
})
