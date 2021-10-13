import { Request } from "express";
export declare class ResponseHeaders {
    static setPagination(page: number, perPage: number, totalCount: number, req: Request): void;
}
