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
// 游戏管理
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    GameApp.prototype.addStage = function () {
        this.startBtn = new MyButton('开始游戏', 150, 50);
        this.startBtn.x = (GameConst.StageW / 2) - 75;
        this.startBtn.y = (GameConst.StageH / 2) - 25;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.addChild(this.startBtn);
        // GameControl.Instance.setStageHandler(this);
        // //游戏开始
        // GameControl.Instance.startGameHandler();
    };
    GameApp.prototype.startGame = function () {
        this.removeChild(this.startBtn);
        this.addChild(new GameHome);
    };
    return GameApp;
}(egret.DisplayObjectContainer));
__reflect(GameApp.prototype, "GameApp");
