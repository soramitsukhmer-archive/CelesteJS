import { FunctionalityContract } from './FunctionalityContract'
import { AccessRightContract } from './AccessRightContract'

export interface CelesteContract {
    addFunctionality(functionalityID: Number): this;
    addAccessRights(functionalityID: Number, rightsID: Number): this;
}
