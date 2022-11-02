import {NextMiddleware, NextResponse} from "next/server";

export const config = {
    matcher: [
        "/(.+\.keys)",
    ],
}

const middleware: NextMiddleware = (req) => {
    const path = req.nextUrl.pathname;
    const userName = path.slice(1, -5);

    return NextResponse.rewrite(new URL(`/api/${userName}`, req.url));
}

export default middleware;
