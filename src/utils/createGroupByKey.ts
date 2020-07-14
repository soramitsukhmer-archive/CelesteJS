import { tokenize } from './index'
import { FunctionalityContract, FunctionalityGroupContract } from "../spec/FunctionalityContract";

export function createGroupByKey(key: string) {
    return function (items: FunctionalityContract[]): FunctionalityGroupContract {
        const group: FunctionalityGroupContract = new Map();

        items.reduce(function (acc, cur) {
            const token = tokenize(cur[key]);

            if (acc.has(token)) {
                const cached = acc.get(token);
                acc.set(token, [...cached, cur]);
            } else {
                acc.set(token, [cur]);
            }

            return acc;
        }, group);

        return group;
    }
}
