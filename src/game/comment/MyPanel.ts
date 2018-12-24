/**面板组件 */
class MyPanel extends egret.Sprite {
	private onClick: Function;
	public constructor(name: string, width: number, height: number, tit?: boolean) {
		super();
		let panel = new egret.Sprite();
		panel.x = (GameConst.StageW / 2) - (width / 2);
		panel.y = (GameConst.StageH / 2) - (height / 2);
		panel.graphics.beginFill(0x666666);
		panel.height = height;
		panel.width = width;
		panel.graphics.drawRect(0, 0, width, height);
		let box = new egret.TextField();
		box.height = height
		box.width = width
		box.border = true;
		box.borderColor = 0xffffff;
	
		panel.addChild(box)

		let title = new MyButton(name, width, 60);
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
		panel.addChildAt( title, 1);
		this.addChild(panel)
		let cancel = new egret.TextField();
		cancel.x = width - 50
		cancel.y = 8;
		cancel.size = 50;
		cancel.height = 50;
		cancel.width = 50;
		cancel.text = '×'
		cancel.scrollV = 2;
		cancel.touchEnabled = true;
		panel.addChildAt( cancel, 2);
		// panel.addChild(cancel)

		cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.xxx(panel), this);
	}
	//设置点击触发事件
	public setClick(func: Function): void {
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEvent, this);
		this.onClick = func;
	}
	private xxx(i) {

		console.log(123)
		this.removeChild(i)

	}
	//点击触发的事件
	private onClickEvent() {
		this.onClick();
	}
}
