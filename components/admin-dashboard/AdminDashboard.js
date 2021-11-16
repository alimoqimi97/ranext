import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from '../users/users.js';
import { PostList } from "../posts/posts.js";
import authProvider from '../../pages/Auth.js';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
// import LoginPage from '../../components/LoginPage/LoginPage.jsx';
import ImprovedLoginPage from '../../components/LoginPage/ImprovedLoginPage.js';

// import { createTheme } from '@material-ui/core/styles';
// import { create } from 'jss';
// import rtl from 'jss-rtl';
// import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// // Configure JSS
// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// const theme = createTheme({
//     direction: 'rtl',
// });

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

// Configure JSS
const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});

const theme = createTheme({
    direction: 'rtl',
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
        // <StylesProvider jss={jss}>
        <Admin loginPage={ImprovedLoginPage} dataProvider={dataProvider} authProvider={authProvider} >
            <Resource name="users" list={UsersList} icon={UserIcon} />
            <Resource name="posts" list={PostList} icon={PostIcon} />
        </Admin>
        // </StylesProvider>
    );
};

export default AdminDashboard;