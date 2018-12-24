// 游戏管理
class GameApp extends egret.DisplayObjectContainer {
	private startBtn:MyButton;
	public constructor() {
		super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
	}
	private addStage() {
		this.startBtn = new MyButton('开始游戏',150,50)
		this.startBtn.x = (GameConst.StageW  / 2) - 75;
        this.startBtn.y = (GameConst.StageH  / 2) - 25;
        this.startBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.startGame, this );
		this.addChild(this.startBtn)

            
        
		// GameControl.Instance.setStageHandler(this);
        // //游戏开始
        // GameControl.Instance.startGameHandler();
	}
	private startGame(){
		this.removeChild(this.startBtn)
		this.addChild(new GameHome)
	}
}