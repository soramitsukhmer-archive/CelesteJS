import { FunctionalityContract, FunctionalityType } from '../spec/FunctionalityContract'
import { AccessRightContract } from "../spec/AccessRightContract";

export default class Functionality implements FunctionalityContract {
    public id: number;
    public name: string;
    public type: string;
    public function: string;
    public description: string;
    public accessRights: Array<AccessRightContract>

    /**
     * Create a new instance of Functionality
     * @param data
     */
    constructor(data: FunctionalityType) {
        this.id = data.id || null;
        this.name = data.name;
        this.type = data.type;
        this.function = data.function;
        this.description = data.description || null;
        this.accessRights = data.accessRights || [];
    }
}
