var Action=function(obj){
    this.element = null;
    this.content=null;
    this.MOVESTAUS=true;
    this.imgObject=null;
    this.imgSrc=null;
    this.sePoint=null;
    this.randomString=function(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
            for (i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
        return pwd;
    };
};
var Hero = function(obj) {
    Action.call(this);
    this.x=obj.mPoint.x||0;
    this.y=obj.mPoint.y||0;
    this.w=10;
    this.h=10;
    this.speed=0.1;
    this.id = obj.id;
    this.position = obj.mPoint;
    this.imgSrc=obj.imgSrc;
    var startPoint={x:0,y:0};
    var endPoint={x:10,y:10};
    var sePoint={startPoint:startPoint,endPoint:endPoint};
    var speed=this.speed;
    this.playEr = '<canvas class="playCanvas" id="' + this.id + '"></canvas>';
    this.ac=new gameAc.forwardObject(obj.mPoint,sePoint, speed);
    this.ac.sePoint=this.sePoint;
    this.drawBeauty=function(){
        var mycv = this.element;
        var myctx = mycv.getContext("2d");
        var imgObj = this.imgObject;
        var x=this.x,y=this.y,w=this.w,h=this.h;
        myctx.drawImage(imgObj, x, y,w,h);
    };
    this.action = function(current) {
        if(current=='other'){
            this.DIRECTION=RIGHT;
        }else{
            this.DIRECTION=current;
        }
    };
    this.move=function(){
        ctx.fillStyle="#ffffff";
        ctx.fillRect(0,0,1000,1000);
    };
    this.addPlayer = function() {
        var para = this.playEr;
        $("body").append(para);
        this.element = $("#" + this.id)[0];
        this.content=this.element.getContext('2d');
    };
    this.init=function(){
        this.addPlayer();
        this.imgObject = new Image();
        this.imgObject.src =this.imgSrc;
        var temp=this;
        acArray.push(temp);
    };
    this.draw = function() {
      this.content.clearRect(0,0,1000,1000);
      var sePoint=this.sePoint;
      var acP=this.ac.draw(sePoint);
      this.x=acP.x;
      this.y=acP.y;
      this.drawBeauty();
    }
};