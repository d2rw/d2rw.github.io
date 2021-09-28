import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Voice of Reason",
    [Item.Sword, Item.Mace],
    [Rune.Lem, Rune.Ko, Rune.El, Rune.Eld],
    [
        new Stat(StatType.Default, "15% Chance To Cast Level 13 Frozen Orb On Striking"),
        new Stat(StatType.Default, "18% Chance To Cast Level 20 Ice Blast On Striking"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating"),
        new Stat(StatType.Damage, "+220-350% Damage To Demons"),
        new Stat(StatType.Damage, "+355-375% Damage To Undead (varies)"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating Against Undead"),
        new Stat(StatType.Damage, "Adds 100-220 Cold Damage"),
        new Stat(StatType.Damage, "-24% To Enemy Cold Resistance"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.Special, "Cannot Be Frozen"),
        new Stat(StatType.GoldFind, "75% Extra Gold From Monsters"),
        new Stat(StatType.Default, "+1 To Light Radius"),
    ],
    undefined,
    true
);
