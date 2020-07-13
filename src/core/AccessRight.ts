import { AccessRightContract, AccessRightType } from '../spec/AccessRightContract';

export default class AccessRight implements AccessRightContract {
    public id: Number;
    public name: String;

    /**
     * Create a new instance of AccessRight
     * @param state
     */
    constructor(data: AccessRightType) {
        this.id = data.id || null;
        this.name = data.name;
    }
}
