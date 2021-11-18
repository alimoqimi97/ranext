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


//      ----------under testing part-----------         //
import { create } from "jss";
import rtl from "jss-rtl";
import {
    StylesProvider,
    jssPreset,
    ThemeProvider,
    createTheme
} from "@material-ui/core/styles";

// configure jss.
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// create rtl(right to left) theme.
const rtlTheme = createTheme({ direction: "rtl" });

//              -----------------------                 //



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//  Note: <StylesProvider /> component should not be in a component that has a state 
//  that changes and trigger re-render for performance reasons. therefore we use it here
//  and insert <ThemeProvider> component in <ImprovedLoginPage /> component

const AdminDashboard = () => {
    return (
        <StylesProvider jss={jss}>
            <Admin loginPage={ImprovedLoginPage} dataProvider={dataProvider} authProvider={authProvider} >
                <Resource name="users" list={UsersList} icon={UserIcon} />
                <Resource name="posts" list={PostList} icon={PostIcon} />
            </Admin>
        </StylesProvider>

    );
};

export default AdminDashboard;