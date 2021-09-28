import Item from '@App/Type/Item';
import Character from "@App/Type/Character";
import Rune from '@App/Rune';
import { NestedStatsList, default as Stat } from '@App/Stat';

export default class Runeword {
    public constructor(
        public name: string,
        public items: Item[],
        public runes: Rune[],
        public stats: Stat[] | NestedStatsList,
        public character: Character = null,
        public ladder: Boolean = false,
    ) {
        this.name = name;
        this.items = items;
        this.runes = runes;
        this.stats = stats;
        this.character = character;
        this.ladder = ladder;
    }
}