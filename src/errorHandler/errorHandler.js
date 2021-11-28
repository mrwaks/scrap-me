"use strict";

export const errorCode = error => {
    switch (error.code) {
        case "ENOENT":
            console.log('No such file or directory.');
            break;
        default:
            throw error;
    }
}

export const errorStatus = (error, ...args) => {
    switch (error.status) {
        case 6:
            console.log(`curl: (${error.status}) Could not resolve host: ${args[0].replace(/http:\/\/|https:\/\//, "")}`);
            break;
        default:
            throw error;
    }
}