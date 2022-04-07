import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log(req.json);

    return new Response('Hello, world!')
}