import StatType from '@App/Type/Stat';
import Item from "@App/Type/Item";

export type NestedStatsList = {
    [key in Item]?: Stat[];
};

export default class Stat {
    constructor(
        public type: StatType,
        public description: string,
        public context: any[] = []
    ) {
        this.type = type;
        this.description = description;
        this.context = context;
    }
}
