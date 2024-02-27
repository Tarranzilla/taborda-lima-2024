import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://use.typekit.net/lqr5ihx.css" />

                <meta name="theme-color" content="#000810" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
