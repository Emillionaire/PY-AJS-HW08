export default class ErrorRepository {
    constructor() {
        this.errorList = new Map();

        this.errorList.set(34, "Invalid name");
        this.errorList.set(17, "The memory is full");
        this.errorList.set(82, "Server down");

        // console.log(this.errorList)
    }

    translate(code) {
        return this.errorList.has(code) ? this.errorList.get(code) : "Unknown error";
    }
}