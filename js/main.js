var acArray = [], sePoint={};
function acing() {
    for (var i in acArray) {
        if (acArray[i].MOVESTAUS) {
            acArray[i].draw();
        }
    }
    requestAnimationFrame(acing);
}
function elmentPosition(el){
    e_x = el.offsetLeft+50;
    e_y = el.offsetTop+50;
    return {x:e_x,y:e_y};
}
function handleTouchEvent(event) {
    //只跟踪一次触摸
    if (event.touches.length == 1) {
        var output = document.getElementById("output");
        switch (event.type) {
        case "touchstart":
            // handAc(event.touches[0].clientX,event.touches[0].clientY);
            // output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
            break;
        case "touchend":
            // handAc(event.touches[0].clientX,event.touches[0].clientY);
            // output.innerHTML += "Touch ended (" + event.changedTouches[0].clientX + "," + event.changeTouches[0].clientY + ")";
            break;
        case "touchmove":
            event.preventDefault(); //阻止滚动
            handAc(event.touches[0].clientX, event.touches[0].clientY);
            // console.log("elmentPosition("+document.getElementById("left-controll")+"Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")");
            // output.innerHTML += "Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
            break;
        }
    }
}
document.getElementById("left-controll").addEventListener("touchstart", handleTouchEvent, false);
document.getElementById("left-controll").addEventListener("touchend", handleTouchEvent, false);
document.getElementById("left-controll").addEventListener("touchmove", handleTouchEvent, false);
function handAc(x, y) {
	var p1=elmentPosition(document.getElementById("left-controll"));
	var p2={x:x,y:y}
	for (var i in acArray) {
        if (acArray[i].MOVESTAUS) {
            acArray[i].sePoint={p1,p2};
        }
    }
}
var a = new Hero({
        id: 'treg',
        imgSrc:'../img/soldiers.png',
        mPoint:{x:0,y:0}
    });
    a.init();
    acing();
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();