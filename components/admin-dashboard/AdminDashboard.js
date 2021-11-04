import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from '../users/users.js';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
    <Admin dataProvider={dataProvider} >
        {/* <Resource name="posts" list={UsersList} /> */}
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
    </Admin>
    );
};

export default AdminDashboard;