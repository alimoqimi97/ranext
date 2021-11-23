import { FixedSizeList  as List } from 'react-window';

const MqttList = ({contentArray}) => {
    
    let tmpArr = [...contentArray];


    let reversedContent = tmpArr.reverse();

    const Row = ({ index, style }) => {
        return (
            <div style={style}>{ reversedContent[index] }</div>
        );
    };
    
    return (
        <List
            height={500}
            itemCount={reversedContent.length}
            itemSize={35}
            width={1200}
        >
            {Row}
        </List>
    );
}

export default MqttList;
