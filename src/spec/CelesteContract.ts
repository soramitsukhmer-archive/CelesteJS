import { FunctionalityContract } from './FunctionalityContract'
import { AccessRightContract } from './AccessRightContract'

export interface CelesteContract {
    addFunctionality(functionalityID: Number): this;
    addAccessRights(functionalityID: Number, rightsID: Number): this;
    findFunctionalityById(id: Number): {index: Number, item: FunctionalityContract };
    findRightsById(id: Number): {index: Number, item: AccessRightContract };
}
