import Gem from "@App/Gem";

export default class Rune {
	constructor(
		public id: number,
		public name: string,
		public weapon: string,
		public armor: string,
		public level: number,
		public image: string,
		public recipe?: (Rune|Gem)[],
	) {
		this.id = id;
		this.name = name;
		this.weapon = weapon;
		this.armor = armor;
		this.level = level;
		this.image = image;
		this.recipe = recipe;
	}
}