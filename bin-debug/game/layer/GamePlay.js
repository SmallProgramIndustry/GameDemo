var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GamePlay = (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super.call(this) || this;
        _this.ss = 0;
        _this.ww = 0;
        _this.www = 0;
        _this.sss = 4;
        _this.t = 0;
        _this.rotations = 120;
        var box = new egret.Sprite();
        var height = GameConst.StageH;
        var width = GameConst.StageW;
        box.graphics.beginFill(0x666666);
        box.height = height;
        box.width = width;
        box.graphics.drawRect(0, 0, width, height);
        _this.addChild(box);
        // let myImg = GameConst.CreateBitmapByName('car_png')
        // 	myImg.y = (GameConst.StageH / 2) - 150;
        // 	myImg.x = ((GameConst.StageW / 2) - 250) + (GameConst.StageW * i);
        // 	myImg.height = 300;
        // 	myImg.width = 500;
        // 	// this.addChild(this.myImg)
        // 	imgBox.addChild(myImg)
        _this.xx = GameConst.CreateBitmapByName('car_png');
        _this.xx.text = '0';
        _this.xx.textColor = 0xff0000;
        _this.yy = height - 10;
        _this.xx.y = _this.yy;
        _this.w = width / 2;
        _this.xx.x = _this.w;
        _this.xx.height = 50;
        _this.xx.rotation = _this.rotations;
        _this.xx.width = 70;
        _this.addChild(_this.xx);
        _this.ud();
        var l = new MyButton('<', 50, 50);
        l.x = width - 140;
        l.y = height - 70;
        l.touchEnabled = true;
        l.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return _this.direction(false); }, _this);
        var r = new MyButton('>', 50, 50);
        r.x = width - 70;
        r.y = height - 70;
        r.touchEnabled = true;
        r.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return _this.direction(true); }, _this);
        _this.addChild(l);
        _this.addChild(r);
        return _this;
    }
    GamePlay.prototype.ud = function () {
        var _this = this;
        if (GameConst.StageH <= this.ss) {
            return;
        }
        console.log(Math.sin(this.t * 3.14 / 180) * 20 + (GameConst.StageH / 2 - 20));
        console.log(Math.cos(this.t * 3.14 / 180) * 20 + (GameConst.StageH / 2 - 20));
        this.ss = this.ss + this.sss;
        this.ww = this.ww + this.www;
        this.xx.y = (this.yy - this.ss);
        this.xx.x = (this.w + this.ww);
        // let tw = egret.Tween.get(x, { loop:true});
        // tw.to({ x: (++this.ss) }, 200);
        //   egret.Tween.get(this).to({radius:0},2000)
        setTimeout(function () {
            _this.ud();
        }, 200);
    };
    GamePlay.prototype.direction = function (i) {
        i ? this.t = this.t + 1 : this.t = this.t - 1;
        switch (this.t) {
            case 8:
                {
                    this.t = 0;
                    this.sss = 4;
                    this.www = 0;
                }
                ;
                break;
            case 7:
                {
                    this.sss = 3;
                    this.www = -2;
                    this.xx.rotation = this.rotations;
                }
                ;
                break;
            case 6:
                {
                    this.sss = 0;
                    this.www = -4;
                    this.xx.rotation = this.rotations + 180 + 135;
                }
                ;
                break;
            case 5:
                {
                    this.sss = -3;
                    this.www = -2;
                    this.xx.rotation = this.rotations + 180 + 90;
                }
                ;
                break;
            case 4:
                {
                    this.sss = -4;
                    this.www = 0;
                    this.xx.rotation = this.rotations + 180 + 45;
                }
                ;
                break;
            case 3:
                {
                    this.sss = -3;
                    this.www = 2;
                    this.xx.rotation = this.rotations + 90 + 90;
                }
                ;
                break;
            case 2:
                {
                    this.sss = 0;
                    this.www = 4;
                    this.xx.rotation = this.rotations + 90 + 45;
                }
                ;
                break;
            case 1:
                {
                    this.sss = 3;
                    this.www = 2;
                    this.xx.rotation = this.rotations + 90;
                }
                ;
                break;
            case 0:
                {
                    this.sss = 4;
                    this.www = 0;
                    this.xx.rotation = this.rotations + 45;
                }
                ;
                break;
            case -1:
                {
                    this.sss = 3;
                    this.www = -2;
                    this.xx.rotation = this.rotations - 45;
                }
                ;
                break;
            case -2:
                {
                    this.sss = 0;
                    this.www = -4;
                    this.xx.rotation = this.rotations - 90;
                }
                ;
                break;
            case -3:
                {
                    this.sss = -3;
                    this.www = -2;
                    this.xx.rotation = this.rotations - 90 - 45;
                }
                ;
                break;
            case -4:
                {
                    this.sss = -4;
                    this.www = 0;
                    this.xx.rotation = this.rotations - 180;
                }
                ;
                break;
            case -5:
                {
                    this.sss = -3;
                    this.www = 2;
                    this.xx.rotation = this.rotations - 180 - 45;
                }
                ;
                break;
            case -6:
                {
                    this.sss = 0;
                    this.www = 4;
                    this.xx.rotation = this.rotations - 180 - 90;
                }
                ;
                break;
            case -7:
                {
                    this.sss = 3;
                    this.www = 2;
                    this.xx.rotation = this.rotations - 180 - 135;
                }
                ;
                break;
            case -8:
                {
                    this.sss = 4;
                    this.www = 0;
                    this.t = 0;
                    this.xx.rotation = this.rotations;
                }
                ;
                break;
        }
    };
    GamePlay.prototype.r = function () {
        this.t = this.t + 1;
        switch (this.t) {
            case 8:
                {
                    this.t = 0;
                    this.sss = 4;
                    this.www = 0;
                }
                ;
                break;
            case 7:
                {
                    this.sss = 3;
                    this.www = -2;
                }
                ;
                break;
            case 6:
                {
                    this.sss = 0;
                    this.www = -4;
                }
                ;
                break;
            case 5:
                {
                    this.sss = -3;
                    this.www = -2;
                }
                ;
                break;
            case 4:
                {
                    this.sss = -4;
                    this.www = 0;
                }
                ;
                break;
            case 3:
                {
                    this.sss = -3;
                    this.www = 2;
                }
                ;
                break;
            case 2:
                {
                    this.sss = 0;
                    this.www = 4;
                }
                ;
                break;
            case 1:
                {
                    this.sss = 3;
                    this.www = 2;
                }
                ;
                break;
            case 0:
                {
                    this.sss = 4;
                    this.www = 0;
                }
                ;
                break;
            case -1:
                {
                    this.sss = 3;
                    this.www = -2;
                }
                ;
                break;
            case -2:
                {
                    this.sss = 0;
                    this.www = -4;
                }
                ;
                break;
            case -3:
                {
                    this.sss = -3;
                    this.www = -2;
                }
                ;
                break;
            case -4:
                {
                    this.sss = -4;
                    this.www = 0;
                }
                ;
                break;
            case -5:
                {
                    this.sss = -3;
                    this.www = 2;
                }
                ;
                break;
            case -6:
                {
                    this.sss = 0;
                    this.www = 4;
                }
                ;
                break;
            case -7:
                {
                    this.sss = 3;
                    this.www = 2;
                }
                ;
                break;
            case -8:
                {
                    this.sss = 4;
                    this.www = 0;
                    this.t = 0;
                }
                ;
                break;
        }
        // if (this.t <= 0) {
        // 	this.sss = this.sss + 2
        // 	this.www = this.www + 2
        // 	return
        // }
        // this.sss = this.sss - 2
        // this.www = this.www + 2
        // this.t = this.t - 30
        // this.w = this.w + 10
        // this.xx.x = this.w 
    };
    return GamePlay;
}(egret.Sprite));
__reflect(GamePlay.prototype, "GamePlay");
