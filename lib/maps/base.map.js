"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMap = void 0;
class BaseMap {
    many(values) {
        return Promise.all(values.map((v) => this.one(v)));
    }
}
exports.BaseMap = BaseMap;
//# sourceMappingURL=base.map.js.map