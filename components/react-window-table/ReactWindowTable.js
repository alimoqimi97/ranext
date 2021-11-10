import { FixedSizeList  as List } from 'react-window';


// const Row = ({ index, style }) => {
//     return (
//         <div style={style}> Row {index} </div>
//     );
// };


const MqttList = ({listCount, contentArray}) => {


    const Row = ({ index, style }) => {
        return (
            <div style={style}>{ contentArray[index] }</div>
        );
    };
    
    return (
        <List
            height={500}
            itemCount={listCount}
            itemSize={35}
            width={1200}
        >
            {Row}
        </List>
    );
}

export default MqttList;
