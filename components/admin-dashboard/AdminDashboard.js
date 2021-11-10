import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UsersList } from '../users/users.js';
import { PostList } from "../posts/posts.js";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminDashboard = () => {

    // const [incommingMessages, setIncommingMessages] = useState([]);
    // const addMessage = (message) => {
    //   setIncommingMessages((incommingMessages) => [...incommingMessages, message]);
      
    //   console.log('incommingMessages: ');
    //   console.log(incommingMessages);
    // }
    // const clearMessages = () => {
    //   setIncommingMessages(() => []);
    // }
  
    // const incommingMessageHandlers = useRef([
    //   {
    //     topic: 'SERVER/#',
    //     handler: (msg) => {
    //       addMessage(msg);
    //     },
    //   },
    // ]);
  
    // const mqttClientRef = useRef(null);
    // const setMqttClient = (client) => {
    //   mqttClientRef.current = client
    // };
  
    // useMqtt({
    //   uri: process.env.NEXT_PUBLIC_MQTT_URI,
    //   options: {
    //     username: process.env.NEXT_PUBLIC_MQTT_USERNAME,
    //     password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
    //     clientId: process.env.NEXT_PUBLIC_MQTT_CLIENTID,
    //   },
    //   topicHandlers: incommingMessageHandlers.current,
    //   onConnectedHandler: (client) => setMqttClient(client),
    // });
  


    return (
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={UsersList} />
        <Resource name="posts" list={PostList} />
        {/* <Resource name="posts" list={ListGuesser} /> */}
    </Admin>
    );
};

export default AdminDashboard;