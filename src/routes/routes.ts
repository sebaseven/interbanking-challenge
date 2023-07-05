import { HomePage,AboutUsPage,PhrasesPage } from '../modules/phrases/pages';

interface RouteConfig {
    to: string;
    path: string;
    Component:() => JSX.Element;
    name: string;
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