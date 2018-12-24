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
// 首页信息舞台
var GameHome = (function (_super) {
    __extends(GameHome, _super);
    function GameHome() {
        var _this = _super.call(this) || this;
        _this.carI = 0; //第几量车
        // 用户名---------------------
        _this.myName = new MyButton('用户名', 200, 80);
        _this.myName.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.nameClick, _this);
        _this.addChild(_this.myName);
        // 排行榜---------------------
        _this.leaderboard = new MyButton('排行榜', 200, 80);
        _this.leaderboard.y = 80;
        _this.leaderboard.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.leaderboardClick, _this);
        _this.addChild(_this.leaderboard);
        // 金币---------------------
        _this.gold = new MyButton('金币', 200, 50);
        _this.gold.x = 200 + 30;
        _this.gold.y = 15;
        _this.gold.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.goldClick, _this);
        _this.addChild(_this.gold);
        // 体力值---------------------
        _this.stamina = new MyButton('体力值', 200, 50);
        _this.stamina.x = 400 + 60;
        _this.stamina.y = 15;
        _this.stamina.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.staminaClick, _this);
        _this.addChild(_this.stamina);
        // 签到---------------------
        _this.sign = new MyButton('签到', 150, 80);
        _this.sign.x = 600 + 90;
        _this.sign.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.signClick, _this);
        _this.addChild(_this.sign);
        // 成就---------------------
        _this.achievement = new MyButton('成就', 150, 80);
        _this.achievement.x = 750 + 90;
        _this.achievement.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.achievementClick, _this);
        _this.addChild(_this.achievement);
        // 成就---------------------
        _this.fraction = new MyButton('改装分数', 300, 200);
        _this.fraction.y = GameConst.StageH - 200;
        _this.addChild(_this.fraction);
        // 出赛---------------------
        _this.goGame = new MyButton('出赛', 200, 80);
        _this.goGame.y = GameConst.StageH - 160;
        _this.goGame.x = GameConst.StageW - 200;
        _this.goGame.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.goGameClick, _this);
        _this.addChild(_this.goGame);
        // 改装---------------------
        _this.refit = new MyButton('改装', 200, 80);
        _this.refit.y = GameConst.StageH - 80;
        _this.refit.x = GameConst.StageW - 200;
        _this.refit.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.refitClick, _this);
        _this.addChild(_this.refit);
        // 车型图---------------------
        var x = [1, 2, 3];
        var imgBox = new egret.Sprite();
        imgBox.height = GameConst.StageH;
        imgBox.width = GameConst.StageW * 3;
        x.forEach(function (element, i) {
            var myImg = GameConst.CreateBitmapByName('car_png');
            myImg.y = (GameConst.StageH / 2) - 150;
            myImg.x = ((GameConst.StageW / 2) - 250) + (GameConst.StageW * i);
            myImg.height = 300;
            myImg.width = 500;
            // this.addChild(this.myImg)
            imgBox.addChild(myImg);
        });
        // var group = new eui.Group();
        // var img = new eui.Image("car_png");
        // group.addChild(img);
        // //创建一个Scroller
        // var myScroller = new eui.Scroller();
        // //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        // myScroller.width = GameConst.StageW;
        // myScroller.height = 200;
        // //设置viewport
        // myScroller.viewport = group;
        // this.addChild(myScroller);
        _this.addChild(imgBox);
        // 左箭头---------------------
        _this.left = new MyButton('<', 80, 100);
        _this.left.y = (GameConst.StageH / 2) - 40;
        _this.left.x = 50;
        _this.left.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return _this.arrowClick(imgBox, false); }, _this);
        _this.addChild(_this.left);
        // 右箭头---------------------
        _this.right = new MyButton('>', 80, 100);
        _this.right.y = (GameConst.StageH / 2) - 40;
        _this.right.x = GameConst.StageW - 130;
        _this.right.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return _this.arrowClick(imgBox, true); }, _this);
        _this.addChild(_this.right);
        // 抽奖---------------------
        _this.lottery = new MyButton('改装', 200, 80);
        _this.lottery.y = 80;
        _this.lottery.x = GameConst.StageW - 200;
        _this.lottery.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.lotteryClick, _this);
        _this.addChild(_this.lottery);
        return _this;
        // this.addChild(new eui.Button)
        // this.MyPanel = new MyPanel('吃撒打火机看', GameConst.StageW * 0.7, GameConst.StageH * 0.7)
        // this.addChild(this.MyPanel)
    }
    GameHome.prototype.xx = function () {
        this.removeChild(this.MyPanel);
    };
    // 用户名点击事件
    GameHome.prototype.nameClick = function () {
    };
    // 排行榜点击事件
    GameHome.prototype.leaderboardClick = function () {
    };
    // 金币点击事件
    GameHome.prototype.goldClick = function () {
    };
    // 体力值点击事件
    GameHome.prototype.staminaClick = function () {
    };
    // 签到点击事件
    GameHome.prototype.signClick = function () {
    };
    // 出赛点击事件
    GameHome.prototype.goGameClick = function () {
        // this.removeChild(new GameHome())
        this.addChild(new GamePlay());
    };
    // 成就点击事件
    GameHome.prototype.achievementClick = function () {
    };
    // 改装点击事件
    GameHome.prototype.refitClick = function () {
    };
    //箭头
    GameHome.prototype.arrowClick = function (i, b) {
        var tw = egret.Tween.get(i);
        if (b) {
            tw.to({ x: (++this.carI * -GameConst.StageW) }, 200);
        }
        else {
            if (this.carI <= 0)
                return;
            tw.to({ x: (--this.carI * -GameConst.StageW) }, 200);
        }
    };
    //抽奖
    GameHome.prototype.lotteryClick = function () {
    };
    return GameHome;
}(egret.Sprite));
__reflect(GameHome.prototype, "GameHome");
