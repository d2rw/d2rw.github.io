import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Treachery (Assassin)",
    [Item.BodyArmor],
    [Rune.Shael, Rune.Thul, Rune.Lem],
    [
        new Stat(StatType.Default, "5% Chance To Cast Level 15 Fade When Struck"),
        new Stat(StatType.Default, "25% Chance To Cast level 15 Venom On Striking"),
        new Stat(StatType.Skill, "+2 To Assassin Skills"),
        new Stat(StatType.IncreasedAttackSpeed, "+45% Increased Attack Speed"),
        new Stat(StatType.FasterHitRecovery, "+20% Faster Hit Recovery"),
        new Stat(StatType.Resistance, "Cold Resist +30%"),
        new Stat(StatType.GoldFind, "50% Extra Gold From Monsters"),
    ],
    Character.Assassin
);
