import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './components/Logo/Logo';

export default {
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== '/') {
            return {
                titleTemplate: '%s - SoBold Docs',
            };
        }
    },
    logo: Logo,
    project: {
        link: 'https://github.com/SoBold/sobold-dev-standards',
    },
    docsRepositoryBase: 'https://github.com/SoBold/sobold-dev-standards',
    sidebar: {
        defaultMenuCollapseLevel: 1,
    },
    footer: {
        text: Logo,
    },
} satisfies DocsThemeConfig;
