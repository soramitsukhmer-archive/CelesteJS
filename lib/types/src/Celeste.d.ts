import { CelesteContract } from './spec/CelesteContract';
import { FunctionalityContract, FunctionalityGroupContract } from './spec/FunctionalityContract';
import { AccessRightContract } from './spec/AccessRightContract';
export default class Celeste implements CelesteContract {
    private functionalities;
    private rights;
    /**
     * Create a new instance of Celeste
     * @param functionalities
     * @param rights
     */
    constructor(functionalities?: Array<FunctionalityContract>, rights?: Array<AccessRightContract>);
    /**
     * Add new functionality
     * @param functionality
     */
    addFunctionality(functionalityID: Number): this;
    /**
     * Add new Access Right to existing functionality
     * @param functionalityID
     * @param rights
     */
    addAccessRights(functionalityID: Number, rightsID: Number): this;
    /**
     * Find functionality by ID
     * @param id
     */
    findFunctionalityById(id: Number): {
        index: number;
        item: FunctionalityContract;
    };
    /**
     * Find rights by ID
     * @param id
     */
    findRightsById(id: Number): {
        index: number;
        item: AccessRightContract;
    };
    /**
     * Create a group of Functionalities
     */
    group(key?: string): FunctionalityGroupContract;
    /**
     * Throw functionality not found exception
     */
    private throwFunctionalityNotFoundException;
    /**
     * Throw access rights not found exception
     */
    private throwAccessRightsNotFoundException;
    /**
     * Throw error exception
     * @param message
     */
    private throwError;
}
