class GamePlay extends egret.Sprite {
	public ss: number = 0;
	public ww: number = 0;
	public www: number = 0;
	public sss: number = 4;
	public xx: any;
	public t: number = 0;
	public w: number;
	public rotations = 120;
	public yy: number;
	public constructor() {
		super();
		let box = new egret.Sprite();
		let height = GameConst.StageH
		let width = GameConst.StageW
		box.graphics.beginFill(0x666666);
		box.height = height;
	
		box.width = width;
		box.graphics.drawRect(0, 0, width, height);
		this.addChild(box)
		// let myImg = GameConst.CreateBitmapByName('car_png')
		// 	myImg.y = (GameConst.StageH / 2) - 150;
		// 	myImg.x = ((GameConst.StageW / 2) - 250) + (GameConst.StageW * i);
		// 	myImg.height = 300;
		// 	myImg.width = 500;
		// 	// this.addChild(this.myImg)
		// 	imgBox.addChild(myImg)
		this.xx = GameConst.CreateBitmapByName('car_png')
		this.xx.text = '0'
		this.xx.textColor = 0xff0000;
		this.yy = height - 10
		this.xx.y = this.yy;
		this.w = width / 2
		this.xx.x = this.w;
		this.xx.height = 50;
			this.xx.rotation = this.rotations;
		this.xx.width = 70;
		this.addChild(this.xx)
		this.ud()
		let l = new MyButton('<', 50, 50)
		l.x = width - 140
		l.y = height - 70
		l.touchEnabled = true;
		l.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.direction(false), this);
		let r = new MyButton('>', 50, 50)
		r.x = width - 70
		r.y = height - 70

		r.touchEnabled = true;
		r.addEventListener(egret.TouchEvent.TOUCH_TAP, () => this.direction(true), this);
		this.addChild(l)
		this.addChild(r)
	}
	ud() {
		if (GameConst.StageH <= this.ss) {
			return
		}
		console.log(Math.sin(this.t * 3.14 / 180) * 20 + (GameConst.StageH / 2 - 20))
		console.log(Math.cos(this.t * 3.14 / 180) * 20 + (GameConst.StageH / 2 - 20))

		this.ss = this.ss + this.sss;
		this.ww = this.ww + this.www;
		this.xx.y = (this.yy - this.ss)
		this.xx.x = (this.w + this.ww)
		// let tw = egret.Tween.get(x, { loop:true});
		// tw.to({ x: (++this.ss) }, 200);
		//   egret.Tween.get(this).to({radius:0},2000)
		setTimeout(() => {
			this.ud()

		}, 200)

	}
	direction(i) {
		i ? this.t = this.t + 1 : this.t = this.t - 1

		switch (this.t) {
			case 8: { this.t = 0; this.sss = 4; this.www = 0 }; break;
			case 7: { this.sss = 3; this.www = -2;this.xx.rotation = this.rotations; }; break;
			case 6: { this.sss = 0; this.www = -4;this.xx.rotation = this.rotations+180+135; }; break;
			case 5: { this.sss = -3; this.www = -2 ;this.xx.rotation = this.rotations+180+90;}; break;
			case 4: { this.sss = -4; this.www = 0 ;this.xx.rotation = this.rotations+180+45;}; break;
			case 3: { this.sss = -3; this.www = 2 ;this.xx.rotation = this.rotations+90+90;}; break;
			case 2: { this.sss = 0; this.www = 4 ;this.xx.rotation = this.rotations+90+45;}; break;
			case 1: { this.sss = 3; this.www = 2;this.xx.rotation = this.rotations+90; }; break;
			case 0: { this.sss = 4; this.www = 0;this.xx.rotation = this.rotations+45; }; break;
			case -1: { this.sss = 3; this.www = -2;this.xx.rotation = this.rotations-45; }; break;
			case -2: { this.sss = 0; this.www = -4;this.xx.rotation = this.rotations-90;  }; break;
			case -3: { this.sss = -3; this.www = -2;this.xx.rotation = this.rotations-90-45;  }; break;
			case -4: { this.sss = -4; this.www = 0;this.xx.rotation = this.rotations-180;  }; break;
			case -5: { this.sss = -3; this.www = 2;this.xx.rotation = this.rotations-180-45;  }; break;
			case -6: { this.sss = 0; this.www = 4;this.xx.rotation = this.rotations-180-90;  }; break;
			case -7: { this.sss = 3; this.www = 2;this.xx.rotation = this.rotations-180-135;  }; break;
			case -8: { this.sss = 4; this.www = 0; this.t = 0;this.xx.rotation = this.rotations;  }; break;
		}

	}
	r() {
		this.t = this.t + 1
		switch (this.t) {

			case 8: { this.t = 0; this.sss = 4; this.www = 0 }; break;
			case 7: { this.sss = 3; this.www = -2 }; break;
			case 6: { this.sss = 0; this.www = -4 }; break;
			case 5: { this.sss = -3; this.www = -2 }; break;
			case 4: { this.sss = -4; this.www = 0 }; break;
			case 3: { this.sss = -3; this.www = 2 }; break;
			case 2: { this.sss = 0; this.www = 4 }; break;
			case 1: { this.sss = 3; this.www = 2 }; break;
			case 0: { this.sss = 4; this.www = 0 }; break;
			case -1: { this.sss = 3; this.www = -2 }; break;
			case -2: { this.sss = 0; this.www = -4 }; break;
			case -3: { this.sss = -3; this.www = -2 }; break;
			case -4: { this.sss = -4; this.www = 0 }; break;
			case -5: { this.sss = -3; this.www = 2 }; break;
			case -6: { this.sss = 0; this.www = 4 }; break;
			case -7: { this.sss = 3; this.www = 2 }; break;
			case -8: { this.sss = 4; this.www = 0; this.t = 0 }; break;
		}
		// if (this.t <= 0) {
		// 	this.sss = this.sss + 2
		// 	this.www = this.www + 2
		// 	return
		// }
		// this.sss = this.sss - 2
		// this.www = this.www + 2
		// this.t = this.t - 30
		// this.w = this.w + 10
		// this.xx.x = this.w 
	}

}