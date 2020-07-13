import { CelesteContract } from './spec/CelesteContract'
import { FunctionalityContract } from './spec/FunctionalityContract'
import { AccessRightContract } from './spec/AccessRightContract'

export default class Celeste implements CelesteContract {
    functionalities: Array<FunctionalityContract> = [];
    rights: Array<AccessRightContract> = [];

    /**
     * Create a new instance of Celeste
     * @param functionalities
     * @param rights
     */
    constructor(functionalities: Array<FunctionalityContract> = [], rights: Array<AccessRightContract> = []) {
        this.functionalities = functionalities
        this.rights = rights
    }

    /**
     * Add new functionality
     * @param functionality
     */
    addFunctionality(functionality: FunctionalityContract) {
        return this
    }

    /**
     * Add new Access Right to existing functionality
     * @param functionalityID
     * @param rights
     */
    addAccessRights(functionalityID: Number, rights: AccessRightContract) {
        return this
    }
}
