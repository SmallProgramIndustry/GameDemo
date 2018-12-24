class GameConst {
	/**舞台宽度 */
	public static StageW:number;
    /**舞台高度 */
	public static StageH:number;
	public constructor() {
	}
	/**根据名字创建位图 */
	public static CreateBitmapByName(name:string):egret.Bitmap {
		let texture:egret.Texture = RES.getRes(name);
		let bitmap:egret.Bitmap = new egret.Bitmap(texture);
		return bitmap;
	}

}