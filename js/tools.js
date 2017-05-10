
// function drawImg(imgObject, canvasDom, x, y, w, h) {

//     if (imgObject.complete) {
//         drawBeauty(imgObject, canvasDom, x, y, w, h);
//     } else {
//         beauty.onload = function() {
//             drawBeauty(beauty, canvasDom, x, y, w, h);
//         };
//         beauty.onerror = function() {
//             // window.alert('加载失败，请重试');
//         };
//     }
//     ;
// }
//if (document.all) {
//      window.attachEvent('onload', load);
//  } else {
//    window.addEventListener('load', load, false);
//}



// var acArray = [];
// function acing() {
//     for (var i in acArray) {
//         if (acArray[i].MOVESTAUS) {
//             acArray[i].draw();
//         }
//     }
//     requestAnimationFrame(acing);
// };
function elmentPosition(el) {
    e_x = el.offsetLeft;
    e_y = el.offsetTop;
    return (e_x + "----" + e_y);
}
function handAc(x, y) {
    playerAction();
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