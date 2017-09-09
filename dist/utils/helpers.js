"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foramt(template, data) {
    if (!data) {
        return template;
    }
    return template.replace(/\{([^\}]+)\}/g, (mStr, cStr1) => {
        return data.hasOwnProperty(cStr1) ? data[cStr1] : cStr1;
    });
}
exports.foramt = foramt;
