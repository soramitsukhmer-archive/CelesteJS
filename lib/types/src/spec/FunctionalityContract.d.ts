import { AccessRightContract } from './AccessRightContract';
export interface FunctionalityContract {
    id: number;
    name: string;
    type: string;
    function: string;
    description: string;
    accessRights: Array<AccessRightContract>;
}
export declare type FunctionalityType = {
    id?: number;
    name: string;
    type: string;
    function: string;
    description?: string;
    accessRights?: Array<AccessRightContract>;
};
export declare type FunctionalityGroupContract = Map<string, FunctionalityContract[]>;
