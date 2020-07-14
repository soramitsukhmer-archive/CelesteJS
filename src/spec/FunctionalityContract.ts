import { AccessRightContract } from './AccessRightContract'

export interface FunctionalityContract {
    id: number;
    name: string;
    type: string;
    function: string;
    description: string;
    accessRights: Array<AccessRightContract>
}

export type FunctionalityType = {
    id?: number;
    name: string;
    type: string;
    function: string;
    description?: string;
    accessRights?: Array<AccessRightContract>;
};

export type FunctionalityGroupContract = Map<string, FunctionalityContract[]>;

export type FunctionalityTreeContract = Array<{
    id: string,
    name: string,
    children: [],
    _cacheKey: any,
}>
