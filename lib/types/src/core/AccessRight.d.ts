import { AccessRightContract, AccessRightType } from '../spec/AccessRightContract';
export default class AccessRight implements AccessRightContract {
    id: number;
    name: string;
    /**
     * Create a new instance of AccessRight
     * @param state
     */
    constructor(data: AccessRightType);
}
