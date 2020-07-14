import { CelesteContract } from './spec/CelesteContract';
import { AccessRightContract } from './spec/AccessRightContract';
import { FunctionalityContract, FunctionalityGroupContract, FunctionalityTreeContract } from './spec/FunctionalityContract';
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
     * Create a tree view of Functionalities
     */
    tree(key?: string): FunctionalityTreeContract;
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
