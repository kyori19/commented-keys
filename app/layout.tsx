import './global.css';
import {ReactNode} from "react";
import {JetBrains_Mono} from "@next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
        <head>
            <style>
                {`
                    html, pre {
                        font-family: ${jetBrainsMono.style.fontFamily}, monospace;
                    }
                `}
            </style>
        </head>
        <body>{children}</body>
        </html>
    )
}
