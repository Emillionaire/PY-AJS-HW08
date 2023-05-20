export default class Team {
    constructor() {
        this.members = new Set();
    };
    
    add(Char) {
        if (this.members.has(Char)) {
            console.log('This character is already in the team!')
        } else {
            this.members.add(Char)
        }
    };

    addAll(...Chars) {
        for (let C of Chars) {
            if (this.members.has(C)) {
                null
            } else {
                this.members.add(C)
            }
        }
    };

    toArray() {
        return Array.from(this.members)
    };
}
