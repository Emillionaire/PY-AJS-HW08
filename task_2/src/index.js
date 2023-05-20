import Errors from "./ErrorRepository.js";

function start() {
    const errors = new Errors();

    console.log(errors.translate(34));
    console.log(errors.translate(35));
}

start();