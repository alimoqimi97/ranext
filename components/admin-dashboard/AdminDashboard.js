import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from '../users/users.js';
import { PostList } from "../posts/posts.js";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {
    return (
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={UsersList} />
        <Resource name="posts" list={PostList} />
        {/* <Resource name="posts" list={ListGuesser} /> */}
    </Admin>
    );
};

export default AdminDashboard;