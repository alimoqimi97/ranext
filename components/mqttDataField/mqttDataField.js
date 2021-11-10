import * as React from "react";
import { useRecordContext } from 'react-admin';
import { useContext } from "react";
import mqttContext from './contextProvider.js';

const MqttDataField = ({ source , mqttData }) => {

    const record = useRecordContext();

    const mqttDt = useContext(MqttDataField);

    // console.log(record);
    // console.log(record[source]);
    // console.log(mqttDt);

    return (
        <p>
            {mqttDt}
        </p>
    );


    // const record = useRecordContext();
    // return record ? (
    //     <a href={record[source]}>
    //         {record[source]}
    //     </a>
    // ) : null;
}

export default MqttDataField;