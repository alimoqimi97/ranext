import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { MqttFilledList } from '../MqttFilledList/MqttFilledList.js';
import { PostList } from "../posts/posts.js";
import authProvider from '../../pages/AuthProvider.js';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import LoginPage from '../LoginPage/LoginPage.js';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { useTranslate } from 'react-admin';
import TranslatedFarsiWords from '../../js/TranslatedFarsiWords.ts';
import ResourcesNames from "./ResourcesNames.js";

const farsiWords = {
    'fa': TranslatedFarsiWords
}

const translationProvider = polyglotI18nProvider(locale => farsiWords[locale], 'fa');

const AdminDashboard = () => {

    const translate = useTranslate();

    return (
            <Admin
                loginPage={LoginPage}
                dataProvider={dataProvider}
                authProvider={authProvider}
                i18nProvider={translationProvider}
            >
                <Resource
                    name={ResourcesNames.USERS}
                    list={MqttFilledList}
                    icon={UserIcon}
                    options={{
                        label: `${translate('ir.labels.users')}`
                    }}
                />
                <Resource
                    name={ResourcesNames.POSTS}
                    list={PostList}
                    icon={PostIcon}
                    options={{
                        label: `${translate('ir.labels.posts')}`
                    }}
                />
            </Admin>
    );
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default AdminDashboard;