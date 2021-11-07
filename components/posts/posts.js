import * as React from "react";
import { List, SimpleList, Datagrid, TextField, ReferenceField } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

export const PostList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => record.id}
                />
            ) : (
            <Datagrid rowClick="edit">
                <ReferenceField source="userId" reference="users">
                    <TextField source="id" />
                </ReferenceField>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
            </Datagrid>
            )
            }
        </List>
        
    );
};