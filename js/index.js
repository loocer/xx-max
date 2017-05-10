// function randomString(len) {
//     len = len || 32;
//     var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
//     var maxPos = $chars.length;
//     var pwd = '';
//     for (i = 0; i < len; i++) {
//         pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
//     }
//     return pwd;
// }
// var RIGHT='right',LEFT='left',UP='up',DOWN='down';
// var MOVESTAUS=true;DIRECTION=RIGHT;
// var Move={
// 	onRight:function(imgObj,ac,x,y){
// 		++x;
//     console.log('x:'+x+"-----"+'y:'+y);
//     drawBeauty(imgObj,ac, x, y,10,10);
// 		//drawImg(src,ac,x,y,10,10);
// 		return {x:x,y:y};
// 	},
// 	onLeft:function(imgObj,ac,x,y){
// 		--x;
//     drawBeauty(imgObj,ac, x, y,10,10);
// 		// drawImg(src,ac,x,y,10,10);
// 		return {x:x,y:y};
// 	},
// 	onUp:function(imgObj,ac,x,y){
// 		y=y-0.5;
//     drawBeauty(imgObj,ac, x, y,10,10);
// 		// drawImg(src,ac,x,y,10,10);
// 		return {x:x,y:y};
// 	},
// 	onDown:function(imgObj,ac,x,y){
// 		y=y+0.5;
//     drawBeauty(imgObj,ac, x, y,10,10);
// 		// drawImg(src,ac,x,y,10,10);
// 		return {x:x,y:y};
// 	}
// };
// var acArray=[];
// function acing(){
// 	for(var i in acArray){
//     if(acArray[i].MOVESTAUS){
//       acArray[i].draw();
//     }
// 	}
// 	requestAnimationFrame(acing);
// };
// var imageObject=[];

// var action = function(obj) {
//     this.$element = null;
//     this.content=null;
//     this.x=obj.position.x||0;
//     this.y=obj.position.y||0;
//     this.MOVESTAUS=true;
//     this.DIRECTION=RIGHT;
//     this.imgObject=null;
//     this.imgSrc=obj.imgSrc;
//     this.position = obj.position;
//     this.id = obj.id || randomString(6);
//     this.playEr = '<canvas class="playCanvas" id="' + this.id + '"></canvas>';
//     this.action = function(current) {
//     	if(current=='other'){
//     		this.DIRECTION=RIGHT;
//     	}else{
//     		this.DIRECTION=current;
//     	}
//     };
//     this.move=function(){
// 		ctx.fillStyle="#ffffff";
// 		ctx.fillRect(0,0,1000,1000);
//     };
//     this.addPlayer = function() {
//         var para = this.playEr;
//         $("body").append(para);
//         this.$element = $("#" + this.id);
//         this.content=this.$element[0].getContext('2d');
//     };
//     this.init=function(){
//     	this.addPlayer();
//       var beauty = new Image();
//       beauty.src =this.imgSrc;
//       this.imgObject=beauty;
//       var temp=this;
//       acArray.push(temp);
//     };
//     this.draw = function() {
//       this.content.clearRect(0,0,1000,1000);
//         switch(this.DIRECTION)
//     		{
//     		case RIGHT:
//     		  var p=Move.onRight(this.imgObject,this.$element[0],this.x,this.y);
//     		  this.x=p.x;
//     		  this.y=p.y;
//     		  console.log("right");
//     		  $("#right-controll").html(1);
//     		  break;
//     		case LEFT:
//     		  var p=Move.onLeft(this.imgObject,this.$element[0],this.x,this.y);
//     		  this.x=p.x;
//     		  this.y=p.y;
//     		  console.log("left");
//     		  $("#right-controll").html(2);
//     		  break;
//     		case UP:
//     		  var p=Move.onUp(this.imgObject,this.$element[0],this.x,this.y);
//     		  this.x=p.x;
//     		  this.y=p.y;
//     		  console.log("up");
//     		  $("#right-controll").html(3);
//     		  break;
//     		case DOWN:
//     		  var p=Move.onDown(this.imgObject,this.$element[0],this.x,this.y);
//     		  this.x=p.x;
//     		  this.y=p.y;
//     		  console.log("down");
//     		  $("#right-controll").html(4);
//     		  break;
//     		default:
//     		  console.log("others");
//     		}
//     }
// };
var  game=function(current){
  for(var i in acArray){
    acArray[i].action(current);
  }
}
$(document).ready(function() {
    var a = new Hero({
        id: 'treg',
        imgSrc:'../img/soldiers.png',
        position: {
            x: 0,
            y: 0
        }
    });
    a.init();
    //acing();
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    // ctx.clearRect(0,0,1000,1000);
    $(document).mousemove(function(e){
      $("#right-controll").html(e.pageX + ", " + e.pageY);
      // $("span").text(e.pageX + ", " + e.pageY);
    });
    // $("#left-controll").swipe( {
    //     swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection)
    //     {
    //       var str = "<h4>Swipe Phase : " + phase + "<br/>";
    //       str += "Current direction: " + currentDirection + "<br/>";
    //       str += "Direction from inital touch: " + direction + "<br/>";
    //       str += "Distance from inital touch: " + distance + "<br/>";
    //       str += "Duration of swipe: " + duration + "<br/>";
    //       str += "Fingers used: " + fingers + "<br/></h4>";
    //       //Here we can check the:
    //       //phase : 'start', 'move', 'end', 'cancel'
    //       //direction : 'left', 'right', 'up', 'down'
    //       //distance : Distance finger is from initial touch point in px
    //       //duration : Length of swipe in MS
    //       //fingerCount : the number of fingers used
    //       if (phase!="cancel" && phase!="end") {
    //         if (duration<5000)
    //           str +="Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>"
    //         else
    //           str +="Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>"
    //         if (distance<200)
    //           str +="Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>"
    //         else
    //           str +="Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>"
    //       }
    //       if (phase=="cancel")
    //         str +="<br/>Handler not triggered. <br/> One or both of the thresholds was not met "
    //       if (phase=="end")
    //         str +="<br/>Handler was triggered."
    //       console.log(str);
    //        $("#right-controll").html(str);
    //       //game(currentDirection);
    //     },
    //     threshold:200,
    //     maxTimeThreshold:5000,
    //     fingers:'all'
    //   });
});

