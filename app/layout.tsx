import './global.css';
import GlobalStyle from "./GlobalStyle";

import type {ReactNode} from "react";

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html>
        <body>
        <GlobalStyle/>
        {children}
        </body>
        </html>
    )
}
