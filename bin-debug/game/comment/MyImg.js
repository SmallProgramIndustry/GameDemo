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
/**根据网络图片创建位图 */
var MyImg = (function (_super) {
    __extends(MyImg, _super);
    function MyImg(imgUrl, height, width) {
        var _this = _super.call(this) || this;
        var imgLoader = new egret.ImageLoader();
        imgLoader.crossOrigin = "anonymous"; // 跨域请求
        imgLoader.load(imgUrl); // 去除链接中的转义字符‘\’        
        imgLoader.once(egret.Event.COMPLETE, function (evt) {
            if (evt.currentTarget.data) {
                egret.log("加载头像成功: " + evt.currentTarget.data);
                var texture = new egret.Texture();
                texture.bitmapData = evt.currentTarget.data;
                var bitmap = new egret.Bitmap(texture);
                bitmap.width = width;
                bitmap.height = height;
                _this.addChild(bitmap);
            }
        }, _this);
        return _this;
    }
    return MyImg;
}(egret.Sprite));
__reflect(MyImg.prototype, "MyImg");
