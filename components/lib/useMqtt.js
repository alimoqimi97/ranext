import MQTT from 'mqtt'
import { useEffect, useRef } from 'react'

function useMqtt({
  uri,
  options = {},
  topicHandlers = [{ topic: '', handler: ({ topic, payload, packet }) => {} }],
  onConnectedHandler = (client) => {},
}) {
  const clientRef = useRef(null);

  useEffect(() => {
    if (clientRef.current) return
    if (!topicHandlers || topicHandlers.length === 0) return () => {}

    try {
      clientRef.current = options
        ? MQTT.connect(uri, options)
        : MQTT.connect(uri)
    } catch (error) {
      console.error('error', error)
    }

    const client = clientRef.current
    
    console.log('test');
    console.log(topicHandlers[0].topic);
    client.subscribe(topicHandlers[0].topic)
    
    client.on('message', (topic, rawPayload, packet) => {
      console.log(topic);
      const th = topicHandlers[0];

      let payload
      try {
        payload = JSON.parse(rawPayload);
      } catch {
        payload = rawPayload;
      }
      if (th){
        th.handler(rawPayload.toString());
      }
    });

    client.on('connect', () => {
      if (onConnectedHandler) onConnectedHandler(client)
    });

    return () => {
      if (client) {
        topicHandlers.forEach((th) => {
          client.unsubscribe(th.topic)
        })
        client.end()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useMqtt
