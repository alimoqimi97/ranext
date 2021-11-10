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
import useMqtt from '../lib/useMqtt';
import MqttDataField from '../mqttDataField/mqttDataField.js';
import { useState, useRef } from 'react';
import { mqttContext } from '../mqttDataField/contextProvider';
import { useGetList } from 'react-admin';
// import { MyGridDataTable } from '../myGridDataTable/MyGridDataTable.js';
import  BasicTable  from '../basic-table/BasicTable.js';
import MqttList from '../react-window-table/ReactWindowTable.js';


export const UsersList = props => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                }`,
        },
    ];

    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ];

    // const createData = (name, calories, fat, carbs, protein) => {
    //     return { name, calories, fat, carbs, protein };
    // };



    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ];

    const [incommingMessages, setIncommingMessages] = useState([]);
    const addMessage = (message) => {
        // console.log(message);
        setIncommingMessages((incommingMessages) => [...incommingMessages, message]);

        // console.log('incommingMessages: ');
        // console.log(incommingMessages);
    }
    const clearMessages = () => {
        setIncommingMessages(() => []);
    }
    let indx = 0;

    const incommingMessageHandlers = useRef([
        {
            topic: 'Object/56/#',
            handler: (msg) => {
                addMessage(msg);
            },
        },
    ]);

    const mqttClientRef = useRef(null);
    const setMqttClient = (client) => {
        mqttClientRef.current = client
    };

    useMqtt({
        uri: process.env.NEXT_PUBLIC_MQTT_URI,
        options: {
            username: process.env.NEXT_PUBLIC_MQTT_USERNAME,
            password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
            clientId: process.env.NEXT_PUBLIC_MQTT_CLIENTID,
        },
        topicHandlers: incommingMessageHandlers.current,
        onConnectedHandler: (client) => setMqttClient(client)
    });

    // const rows = incommingMessages.map((msg) => {
    //     return ({message: msg});
    // });

    // console.log(`incommingMessages length = ${incommingMessages.length}`);
    console.log(`incommingMessages[last] = ${incommingMessages[incommingMessages.length - 1]}`);

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));


    return (
        <div>

            <MqttList  contentArray={incommingMessages} />


            {/* <BasicTable rows={incommingMessages} /> */}



            {/* <TextField source={incommingMessages} /> */}
            {/* {
                incommingMessages.map((value, index) => {
                    return (<p key={index}>{value}</p>)
                })
            } */}
            {/* <List >
                {isSmall ? (
                    <SimpleList
                        primaryText={record => record.name}
                        secondaryText={record => record.body}
                        tertiaryText={record => record.id}
                    />
                ) : (
                    <Datagrid rowClick="edit">
                        <MqttDataField source="username" index={0} mqttData={incommingMessages[indx]} />
                        <TextField source="message" />

 */}



            {/* <TextField source="id" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="body" />
                    <TextField source="company.name" /> */}
            {/* <EditButton />

                    </Datagrid>
                )
                }
            </List> */}
        </div>
    );
};

// export default UsersList;