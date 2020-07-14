import { AccessRightContract, AccessRightType } from '../spec/AccessRightContract';

export default class AccessRight implements AccessRightContract {
    public id: number;
    public name: string;

    /**
     * Create a new instance of AccessRight
     * @param state
     */
    constructor(data: AccessRightType) {
        this.id = data.id || null;
        this.name = data.name;
    }
}
