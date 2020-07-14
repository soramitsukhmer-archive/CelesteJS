import { FunctionalityContract, FunctionalityType } from '../spec/FunctionalityContract';
import { AccessRightContract } from "../spec/AccessRightContract";
export default class Functionality implements FunctionalityContract {
    id: number;
    name: string;
    type: string;
    function: string;
    description: string;
    accessRights: Array<AccessRightContract>;
    /**
     * Create a new instance of Functionality
     * @param data
     */
    constructor(data: FunctionalityType);
}
