/**根据网络图片创建位图 */
class MyImg extends egret.Sprite {
	public constructor(imgUrl: string, height: number, width: number) {
		super();
		let imgLoader = new egret.ImageLoader();
		imgLoader.crossOrigin = "anonymous";// 跨域请求
		imgLoader.load(imgUrl);// 去除链接中的转义字符‘\’        
		imgLoader.once(egret.Event.COMPLETE, (evt: egret.Event) => {
			if (evt.currentTarget.data) {
				egret.log("加载头像成功: " + evt.currentTarget.data);
				let texture = new egret.Texture();
				texture.bitmapData = evt.currentTarget.data;
				let bitmap = new egret.Bitmap(texture);
				bitmap.width = width;
				bitmap.height = height;
				this.addChild(bitmap);
			}
		}, this);
	}

}