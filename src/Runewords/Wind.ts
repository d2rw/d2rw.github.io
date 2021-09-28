import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Wind",
    [Item.Melee],
    [Rune.Sur, Rune.El],
    [
        new Stat(StatType.Default, "10% Chance To Cast Level 9 Tornado On Striking"),
        new Stat(StatType.FasterRunWalk, "+20% Faster Run/Walk"),
        new Stat(StatType.IncreasedAttackSpeed, "+40% Increased Attack Speed"),
        new Stat(StatType.FasterHitRecovery, "+15% Faster Hit Recovery"),
        new Stat(StatType.Damage, "+120-160% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "-50% Target Defense"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating"),
        new Stat(StatType.Special, "Hit Blinds Target"),
        new Stat(StatType.Default, "+1 To Light Radius"),
        new Stat(StatType.Charges, "Level 13 Twister (127 Charges)"),
    ],
);
