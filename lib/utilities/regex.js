"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = void 0;
class Regex {
    static commaDelimited(str) {
        return `'((^${str}$)|([,][ ]*${str}$)|([,][ ]*${str}[,])|(^${str}[,])|(^${str} [(])|([,][ ]*${str} [(]))'`;
    }
}
exports.Regex = Regex;
//# sourceMappingURL=regex.js.map