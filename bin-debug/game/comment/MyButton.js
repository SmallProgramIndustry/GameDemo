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
/**自定义按钮类 */
var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton(bgName, width, height) {
        var _this = _super.call(this) || this;
        var btn = new egret.TextField();
        btn.textColor = 0xffffff;
        btn.width = width;
        btn.height = height;
        btn.textAlign = "center";
        btn.text = bgName;
        btn.border = true;
        btn.size = 24;
        btn.verticalAlign = egret.VerticalAlign.MIDDLE;
        ;
        btn.borderColor = 0xffffff;
        btn.touchEnabled = true;
        _this.addChild(btn);
        return _this;
    }
    return MyButton;
}(egret.Sprite));
__reflect(MyButton.prototype, "MyButton");
