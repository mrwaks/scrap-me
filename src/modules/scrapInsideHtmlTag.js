"use strict";

import { curlURL, matchData, printData } from "../utils/utils.js";

const betweenHTMLTag = /(?<=>).[^<>]+(?=<)/g;

/**
 * Scrap a url and returns a file with all the values between the html tags without the tags
 * @param {string} url - url to scrap.
 * @param {string} output - path to file
 * @returns 
 */
// export const scrapInsideHtmlTag = (url, output) => printData(matchData(betweenHTMLTag, curlURL(url).toString()), output);

export const scrapInsideHtmlTag = (url, output) => {
    const bufferData = curlURL(url);
    
    if (Buffer.isBuffer(bufferData)) {
        const stringData = bufferData.toString();
        if (betweenHTMLTag.test(stringData)) {
            const dataMatched = matchData(betweenHTMLTag, stringData);
            printData(dataMatched, output);
        } else {
            console.log('Data not matched');
        }
    }
}