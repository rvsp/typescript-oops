export abstract class Engine {
    engineNo: string;
    engineCC: string;

    constructor(engineNumber: string, engineCC: string) {
        this.engineNo = engineNumber;
        this.engineCC = engineCC;
    }

}