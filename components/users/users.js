import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import useMqtt from '../lib/useMqtt';
import { useState, useRef } from 'react';
import MqttList from '../react-window-table/ReactWindowTable.js';


export const UsersList = props => {


    const [incommingMessages, setIncommingMessages] = useState([]);
    const addMessage = (message) => {
        setIncommingMessages((incommingMessages) => [...incommingMessages, message]);
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
        uri: 'wss://samacontrol.ir/mqtt',
        options: {
            username: '',
            password: '',
            clientId: 'rayan',
        },

        topicHandlers: incommingMessageHandlers.current,
        onConnectedHandler: (client) => setMqttClient(client)
    });

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <div>
            <MqttList contentArray={incommingMessages} />
        </div>
    );
};
