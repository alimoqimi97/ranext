


const useRayanMqtt = (topic) => {
    const [incommingMessages, setIncommingMessages] = useState(['test']);
    const addMessage = (message) => {
        console.log(message);
        setIncommingMessages((incommingMessages) => [...incommingMessages, message]);

        console.log('incommingMessages: ');
        console.log(incommingMessages);
    }
    const clearMessages = () => {
        setIncommingMessages(() => []);
    }
    let indx = 0;

    const incommingMessageHandlers = useRef([
        {
            topic: 'Object/#',
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
        onConnectedHandler: (client) => setMqttClient(client),
    });

    return incommingMessages;
}


export default useRayanMqtt;