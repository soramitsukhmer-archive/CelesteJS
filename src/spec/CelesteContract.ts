import { FunctionalityContract } from './FunctionalityContract'
import { AccessRightContract } from './AccessRightContract'

export interface CelesteContract {
    addFunctionality(functionality: FunctionalityContract): this;
    addAccessRights(functionalityID: Number, rights: AccessRightContract): this;
}
