import * as React from 'react';
import useMqtt from '../../js/useMqtt.js';
import { useState, useRef } from 'react';
import MqttList from '../MqttList/MqttList.js';

export const MqttFilledList = props => {

    const [incommingMessages, setIncommingMessages] = useState([]);
    const addMessage = (message) => {
        setIncommingMessages((incommingMessages) => [...incommingMessages, message]);
    }
    const clearMessages = () => {
        setIncommingMessages(() => []);
    }

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

    return (
        <div>
            <MqttList listContent={incommingMessages} />
        </div>
    );
};
