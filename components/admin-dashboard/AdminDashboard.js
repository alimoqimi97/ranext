import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UsersList from '../users/UsersList.js';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={ListGuesser} />
        <Resource name="posts" list={UsersList} />
    </Admin>
    );
};

export default AdminDashboard;