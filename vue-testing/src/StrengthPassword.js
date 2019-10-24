class StrengthPassword {
    constructor() {
        this.minLen=6;
        this.minLetterCount=3;
    }


    checkMinLength(password) {
        return password.length >= this.minLen;
    }

    checkMinLetterCount(password) {
        return new RegExp('/^\w{' + this.minLetterCount + ',}$/g').test(password);
    }
}

export default StrengthPassword;