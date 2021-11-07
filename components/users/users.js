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
import { List, SimpleList, Datagrid, TextField, EmailField, ReferenceField, EditButton } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';


export const UsersList = props => {

    // const theme = useTheme();
    // const isSmall = useMediaQuery(theme => theme.breakpoint.down('sm'));

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.body}
                    tertiaryText={record => record.id}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="username" />
                    {/* <ReferenceField label="User" source="userId" reference="users" >
                        <TextField source="username" />
                    </ReferenceField> */}
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="body" />
                    <TextField source="company.name" />
                    <EditButton />

                    {/* <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
                    <TextField source="username" />
                    <TextField source="id" />
                    <TextField source="city" />
                    <TextField source="street" /> */}
                </Datagrid>
            )
            }
        </List>
    );
};