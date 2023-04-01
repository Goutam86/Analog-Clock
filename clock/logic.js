// console.log("hello");

var d = new Date();

// console.log(d);

setInterval(() => {
    // let s = new Time();
    d = new Date();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();

    hrotation = 30 * hour + minute/2;
    mrotation = 6 * minute;
    srotation = 6 * second;
    // hour.style.transform = `rotate(${hrotation}deg)`;
    // hour.style.transform = `rotate(${hrotation}deg)`;
    // minute.style.transform = `rotate(${mrotation}deg)`;
    // second.style.transform = `rotate(${srotation}deg)`;
    document.querySelector(".hour-hand").style.transform = `rotate(${hrotation}deg)`;
document.querySelector(".minute-hand").style.transform = `rotate(${mrotation}deg)`;
document.querySelector(".second-hand").style.transform = `rotate(${srotation}deg)`;
// document.querySelector(".display").innerHTML = s;
}, 1000);


