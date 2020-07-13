import { FunctionalityContract } from './FunctionalityContract'
import { AccessRightContract } from './AccessRightContract'

export interface CelesteContract {
    addFunctionity(functionality: FunctionalityContract): this;
    addAccessRight(functionalityID: Number, rights: AccessRightContract): this;
}
