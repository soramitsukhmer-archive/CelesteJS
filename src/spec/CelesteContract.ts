import { FunctionalityContract } from './FunctionalityContract'
import { AccessRightContract } from './AccessRightContract'

export interface CelesteContract {
    addFunctionality(functionality: FunctionalityContract): this;
    addAccessRight(functionalityID: Number, rights: AccessRightContract): this;
}
