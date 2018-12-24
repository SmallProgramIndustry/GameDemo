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
/**面板组件 */
var MyPanel = (function (_super) {
    __extends(MyPanel, _super);
    function MyPanel(name, width, height, tit) {
        var _this = _super.call(this) || this;
        var panel = new egret.Sprite();
        panel.x = (GameConst.StageW / 2) - (width / 2);
        panel.y = (GameConst.StageH / 2) - (height / 2);
        panel.graphics.beginFill(0x666666);
        panel.height = height;
        panel.width = width;
        panel.graphics.drawRect(0, 0, width, height);
        var box = new egret.TextField();
        box.height = height;
        box.width = width;
        box.border = true;
        box.borderColor = 0xffffff;
        panel.addChild(box);
        var title = new MyButton(name, width, 60);
        // title.height = 50
        // title.width = width
        // title.textAlign = "center";
        // title.verticalAlign = egret.VerticalAlign.MIDDLE;
        // title.border = true;
        // title.text = name
        // title.size = 50;
        // title.borderColor = 0xffffff;
        // title.textColor = 0xffffff;
        // panel.addChild(title)
        panel.addChildAt(title, 1);
        _this.addChild(panel);
        var cancel = new egret.TextField();
        cancel.x = width - 50;
        cancel.y = 8;
        cancel.size = 50;
        cancel.height = 50;
        cancel.width = 50;
        cancel.text = '×';
        cancel.scrollV = 2;
        cancel.touchEnabled = true;
        panel.addChildAt(cancel, 2);
        // panel.addChild(cancel)
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return _this.xxx(panel); }, _this);
        return _this;
    }
    //设置点击触发事件
    MyPanel.prototype.setClick = function (func) {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEvent, this);
        this.onClick = func;
    };
    MyPanel.prototype.xxx = function (i) {
        console.log(123);
        this.removeChild(i);
    };
    //点击触发的事件
    MyPanel.prototype.onClickEvent = function () {
        this.onClick();
    };
    return MyPanel;
}(egret.Sprite));
__reflect(MyPanel.prototype, "MyPanel");
