'use client';

import {JetBrains_Mono} from "@next/font/google";
import {FC} from "react";

const jetBrainsMono = JetBrains_Mono({subsets: ['latin']});

const GlobalStyle: FC = () => (
    <style jsx global>
        {`
            html, pre {
                font-family: ${jetBrainsMono.style.fontFamily}, monospace;
            }
        `}
    </style>
);

export default GlobalStyle;
