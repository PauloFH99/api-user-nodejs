import { Request } from "express";
import { Params } from "express-serve-static-core";

interface MockRequest {
    params?: Params
}

export function makeMockRequest({ params }: MockRequest) {
    const request = {
        params: params || {}
    } as unknown;

    return request as Request
}