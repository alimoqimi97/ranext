import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from '../users/users.js';
import { PostList } from "../posts/posts.js";
import authProvider from '../../pages/Auth.js';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ImprovedLoginPage from '../ImprovedLoginPage/ImprovedLoginPage.js';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { useTranslate } from 'react-admin';
import TranslatedFarsiWords from '../lib/TranslatedFarsiWords.ts';

const messages = {
    'fa': TranslatedFarsiWords
}

const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');

//  Note: <StylesProvider /> component should not be in a component that has a state 
//  that changes and trigger re-render for performance reasons. therefore we use it here
//  and insert <ThemeProvider> component in <ImprovedLoginPage /> component:
const AdminDashboard = () => {
    return (
        <Admin
            loginPage={ImprovedLoginPage}
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
        >
            <Resource name="users" list={UsersList} icon={UserIcon} />
            <Resource name="posts" list={PostList} icon={PostIcon} />
        </Admin>
    );
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default AdminDashboard;