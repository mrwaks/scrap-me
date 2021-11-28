"use strict";

import { writeFileSync } from "fs";
import { execSync } from "child_process";
import { errorCode, errorStatus } from "../errorHandler/errorHandler.js";

/**
 * Get data (html doc) from an url with the curl command line.
 * @param {string} url 
 * @returns Buffer
 */
export const curlURL = url => {
    try {
        return execSync(`curl -s ${url}`);
    } catch (error) {
        errorStatus(error, url);
    }
};

/**
 * Match data from a regexp, and return the data string match.
 * @param {RegExp} regexp 
 * @param {string} data 
 * @returns string | void
 */
export const matchData = (regexp, data) => regexp.test(data) ? data.match(regexp).join(",\n") : console.log("\x1b[33mData not found\x1b[0m");

/**
 * Print data in a file in a writeData directory.
 * @param {string} data - data to print.
 * @param {string} filePath - path to file.
 * @returns void.
 */
export const printData = (data, filePath) => {
    try {
        if (typeof data === "undefined") {
            console.log("undefined");
        } else {
            writeFileSync(filePath, data);
            console.log(`\x1b[32mSuccessful print at ${filePath}\x1b[0m`);
        }
    } catch (error) {
        errorCode(error);
    }
};