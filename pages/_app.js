import { useEffect } from 'react';
import '../styles/globals.scss';

export default function SoBoldDocs({ Component, pageProps }) {
    useEffect(() => {
        document.body.className = 'sobold-docs';
    });
    return <Component {...pageProps} />;
}
