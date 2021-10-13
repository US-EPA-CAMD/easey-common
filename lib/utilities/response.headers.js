"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHeaders = void 0;
class ResponseHeaders {
    static setPagination(page, perPage, totalCount, req) {
        let concatLinks;
        if (page && perPage) {
            const totalPages = Math.ceil(totalCount / perPage);
            const pageParam = `page=${+page}`;
            const first = `<${req.url.replace(pageParam, `page=1`)}>; rel="first"`;
            const prev = `<${req.url.replace(pageParam, `page=${+page - +1}`)}>; rel="previous"`;
            const next = `<${req.url.replace(pageParam, `page=${+page + +1}`)}>; rel="next"`;
            const last = `<${req.url.replace(pageParam, `page=${totalPages}`)}>; rel="last"`;
            switch (+page) {
                case 1: {
                    concatLinks = `${next},${last}`;
                    break;
                }
                case totalPages: {
                    concatLinks = `${first},${prev}`;
                    break;
                }
                default: {
                    concatLinks = `${first},${prev},${next},${last}`;
                    break;
                }
            }
            req.res.setHeader("Link", concatLinks);
            req.res.setHeader("X-Total-Count", totalCount);
        }
    }
}
exports.ResponseHeaders = ResponseHeaders;
//# sourceMappingURL=response.headers.js.map