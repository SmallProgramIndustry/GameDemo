// 首页信息舞台
class GameHome extends egret.Sprite {
	private myName: MyButton;// 用户名
	private leaderboard: MyButton;// 排行榜
	private gold: MyButton;//金币
	private stamina: MyButton;//体力值
	private sign: MyButton;//签到
	private achievement: MyButton;//成就
	private fraction: MyButton;//成就
	private goGame: MyButton;//出赛
	private refit: MyButton;//改装
	private right: MyButton;//右箭头
	private left: MyButton;//左箭头
	public carI: number = 0;//第几量车
	private lottery: MyButton;//抽奖
	private MyPanel: MyPanel//面板
	public constructor() {
		super();
		// 用户名---------------------
		this.myName = new MyButton('用户名', 200, 80)
		this.myName.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nameClick, this);
		this.addChild(this.myName)
		// 排行榜---------------------
		this.leaderboard = new MyButton('排行榜', 200, 80)
		this.leaderboard.y = 80;
		this.leaderboard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leaderboardClick, this);
		this.addChild(this.leaderboard)
		// 金币---------------------
		this.gold = new MyButton('金币', 200, 50)
		this.gold.x = 200 + 30;
		this.gold.y = 15;
		this.gold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goldClick, this);
		this.addChild(this.gold)
		// 体力值---------------------
		this.stamina = new MyButton('体力值', 200, 50)
		this.stamina.x = 400 + 60;
		this.stamina.y = 15;
		this.stamina.addEventListener(egret.TouchEvent.TOUCH_TAP, this.staminaClick, this);
		this.addChild(this.stamina)
		// 签到---------------------
		this.sign = new MyButton('签到', 150, 80)
		this.sign.x = 600 + 90;

		this.sign.addEventListener(egret.TouchEvent.TOUCH_TAP, this.signClick, this);
		this.addChild(this.sign)
		// 成就---------------------
		this.achievement = new MyButton('成就', 150, 80)
		this.achievement.x = 750 + 90;
		this.achievement.addEventListener(egret.TouchEvent.TOUCH_TAP, this.achievementClick, this);
		this.addChild(this.achievement)
		// 成就---------------------
		this.fraction = new MyButton('改装分数', 300, 200)
		this.fraction.y = GameConst.StageH - 200;
		this.addChild(this.fraction)
		// 出赛---------------------
		this.goGame = new MyButton('出赛', 200, 80)
		this.goGame.y = GameConst.StageH - 160;
		this.goGame.x = GameConst.StageW - 200;
		this.goGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goGameClick, this);
		this.addChild(this.goGame)
		// 改装---------------------
		this.refit = new MyButton('改装', 200, 80)
		this.refit.y = GameConst.StageH - 80;
		this.refit.x = GameConst.StageW - 200;
		this.refit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.refitClick, this);
		this.addChild(this.refit)
		// 车型图---------------------
		let x = [1, 2, 3]
		let imgBox = new egret.Sprite();
		imgBox.height = GameConst.StageH
		imgBox.width = GameConst.StageW * 3
		x.forEach((element, i) => {
			let myImg = GameConst.CreateBitmapByName('car_png')
			myImg.y = (GameConst.StageH / 2) - 150;
			myImg.x = ((GameConst.StageW / 2) - 250) + (GameConst.StageW * i);
			myImg.height = 300;
			myImg.width = 500;
			// this.addChild(this.myImg)
			imgBox.addChild(myImg)

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
		this.addChild(imgBox)

		// 左箭头---------------------
		this.left = new MyButton('<', 80, 100)
		this.left.y = (GameConst.StageH / 2) - 40;
		this.left.x = 50;
		this.left.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.arrowClick(imgBox, false), this);
		this.addChild(this.left)
		// 右箭头---------------------
		this.right = new MyButton('>', 80, 100)
		this.right.y = (GameConst.StageH / 2) - 40;
		this.right.x = GameConst.StageW - 130;
		this.right.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.arrowClick(imgBox, true), this);
		this.addChild(this.right)
		// 抽奖---------------------
		this.lottery = new MyButton('改装', 200, 80)
		this.lottery.y = 80;
		this.lottery.x = GameConst.StageW - 200;
		this.lottery.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lotteryClick, this);
		this.addChild(this.lottery)

		// this.addChild(new eui.Button)
		// this.MyPanel = new MyPanel('吃撒打火机看', GameConst.StageW * 0.7, GameConst.StageH * 0.7)
		// this.addChild(this.MyPanel)


	}
	private xx() {
		this.removeChild(this.MyPanel)
	
	}
	// 用户名点击事件
	nameClick() {

	}
	// 排行榜点击事件
	leaderboardClick() {

	}
	// 金币点击事件
	goldClick() {

	}
	// 体力值点击事件
	staminaClick() {

	}
	// 签到点击事件
	signClick() {

	}
	// 出赛点击事件
	goGameClick() {
		// this.removeChild(new GameHome())
		this.addChild(new GamePlay())
	}
	// 成就点击事件
	achievementClick() {
	
	}
	// 改装点击事件
	refitClick() {

	}
	//箭头
	arrowClick(i: egret.Sprite, b: boolean) {
		let tw = egret.Tween.get(i);
		if (b) {
			tw.to({ x: (++this.carI * -GameConst.StageW) }, 200);
		} else {
			if (this.carI <= 0) return;
			tw.to({ x: (--this.carI * -GameConst.StageW) }, 200);
		}
	}
	//抽奖
	lotteryClick() {

	}
}