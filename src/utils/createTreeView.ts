import { v4 as uuid } from "uuid";
import { tokenize } from "./index";
import {
  FunctionalityContract,
  FunctionalityTreeContract,
} from "../spec/FunctionalityContract";

export function createTreeView(key: string) {
  return function (items: FunctionalityContract[]): FunctionalityTreeContract {
    const tree = [];

    items.reduce(function (acc, cur) {
      const token = tokenize(cur[key]);
      let index = acc.findIndex((item) => item._cacheKey === token);

      if (index === -1) {
        const length = acc.push({
          id: uuid(),
          name: cur.name,
          children: [],
          _cacheKey: token,
        });

        index = length - 1;
      }

      acc[index].children.push(cur);

      acc[index].children.map((item) => {
        item.children = item.accessRights.map((child) => ({
          id: uuid(),
          functionId: item.id,
          accessRightId: child.id,
          name: child.name,
          parent: item.name,
        }));

        return item;
      });

      return acc;
    }, tree);

    return tree;
  };
}
