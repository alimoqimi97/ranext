import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from '../users/users.js';
import { PostList } from "../posts/posts.js";
import authProvider from '../../pages/Auth.js';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import LoginPage from '../../components/LoginPage/LoginPage.jsx';
import ImprovedLoginPage from '../../components/LoginPage/ImprovedLoginPage.js';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
    <Admin loginPage={ImprovedLoginPage} dataProvider={dataProvider} authProvider={authProvider} >
        <Resource name="users" list={UsersList} icon={UserIcon} />
        <Resource name="posts" list={PostList} icon={PostIcon} />
        {/* <Resource name="posts" list={ListGuesser} /> */}
    </Admin>
    );
};

export default AdminDashboard;