import { HomePage,AboutUsPage,PhrasesPage } from '../modules/phrases/pages';

type JSXComponent = () => JSX.Element;

interface RouteConfig {
    to: string;
    path: string;
    Component: JSXComponent;
    name: string;
    children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
    {
        to: '/HomePage',
        path: 'HomePage',
        Component: HomePage,
        name: 'HomePage'
    },
    {
        to: '/PhrasesPage',
        path: 'PhrasesPage',
        Component: PhrasesPage,
        name: 'PhrasesPage'
    }, {
        to: '/AboutUsPage',
        path: 'AboutUsPage',
        Component: AboutUsPage,
        name: 'AboutUsPage'
    },
]