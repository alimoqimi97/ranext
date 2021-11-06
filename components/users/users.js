// import * as React from "react";
// import { List, Datagrid, TextField, EmailField } from 'react-admin';

// export const UserList = ({props}) => {
//     console.log('hello userlist.');
//     return(
//     <List {...props}>
//         <Datagrid rowClick="edit">
//             <TextField source="id" />
//             <TextField source="name" />
//             <TextField source="username" />
//             <EmailField source="email" />
//             <TextField source="address.street" />
//             <TextField source="phone" />
//             <TextField source="website" />
//             <TextField source="company.name" />
//             <TextFiled source="geo.lng" />
//         </Datagrid>
//     </List>
//     );
// };

import * as React from 'react';
import { List, Datagrid, TextField, EmailField , ReferenceField} from 'react-admin';


export const PostList = props => {
    return (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <TextField source="username" />
            <TextField source="id" />
            <TextField source="city" />
            <TextField source="street" />
        </Datagrid>
    </List>
    );
};