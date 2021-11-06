import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from '../users/users.js';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={PostList} />
        {/* <Resource name="posts" list={ListGuesser} /> */}
    </Admin>
    );
};

export default AdminDashboard;