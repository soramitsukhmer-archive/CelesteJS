import { AccessRightContract } from './AccessRightContract'

export type FunctionalityContract = {
    id: Number;
    name: String;
    type: String;
    function: String;
    description: String;
    accessRights: Array<AccessRightContract>
}
