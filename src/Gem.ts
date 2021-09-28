import {Quality, Type} from "@App/Type/Gem";

export default class Gem {
    constructor(
        public type: Type,
        public quality: Quality,
        public image: string,
        public level: number,
        public weapon: string,
        public armor: string,
        public shield: string
    ) {
        this.type = type;
        this.quality = quality;
        this.image = image;
        this.level = level;
        this.weapon = weapon;
        this.armor = armor;
        this.shield = shield;
    }

    get name() {
        return this.quality + ' ' + this.type;
    }
}