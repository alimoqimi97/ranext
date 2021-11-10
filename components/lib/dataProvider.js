import useMqtt from "./useMqtt";

export default {
    getList: (resource, params) => {


        const [incommingMessages, setIncommingMessages] = useState([])
        const addMessage = (message) => {
          setIncommingMessages((incommingMessages) => [...incommingMessages, message])
        }
        const clearMessages = () => {
          setIncommingMessages(() => [])
        }
      
        const incommingMessageHandlers = useRef([
          {
            topic: 'SERVER/#',
            handler: (msg) => {
              addMessage(msg)
            },
          },
        ])

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

          return {
            message: incommingMessages
          };

        // return new Promise((resolve,reject) => {
        //   resolve({
        //     message: incommingMessages
        //   });
        // });
    },

    getOne: (resource, params) =>{
        return null;
    },

    getMany: (resource, params) => {
        return null;
    },

    getManyReference: (resource, params) => {
        return null;
    },

    update: (resource, params) =>{
        return null;
    },

    create: (resource, params) =>{
        return null;
    },

    delete: (resource, params) =>{
        return null;
    },

    deleteMany: (resource, params) => {
        return null;
    }
}