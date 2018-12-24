/**自定义按钮类 */
class MyButton extends egret.Sprite {
    private onClick:Function;
	public constructor(bgName:string,width:number,height:number) {
		super();
		let btn = new egret.TextField();
        btn.textColor = 0xffffff;
        btn.width = width ;
        btn.height = height;
        btn.textAlign = "center";
        btn.text = bgName;
        btn.border = true;
        btn.size = 24;
        btn.verticalAlign= egret.VerticalAlign.MIDDLE;;
        btn.borderColor =  0xffffff;
		btn.touchEnabled = true;        
        this.addChild(btn);
        
	}

}