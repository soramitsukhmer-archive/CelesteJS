import { FunctionalityContract } from './FunctionalityContract'
import { AccessRightContract } from './AccessRightContract'

export interface CelesteContract {
    addFunctionality(functionalityID: number): this;
    addAccessRights(functionalityID: number, rightsID: number): this;
    findFunctionalityById(id: number): {index: number, item: FunctionalityContract };
    findRightsById(id: number): {index: number, item: AccessRightContract };
}
