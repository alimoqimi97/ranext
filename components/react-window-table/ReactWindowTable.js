import { FixedSizeList  as List } from 'react-window';


// const Row = ({ index, style }) => {
//     return (
//         <div style={style}> Row {index} </div>
//     );
// };


const MqttList = ({listCount, contentArray}) => {

    const reversedContent = contentArray.reverse();

    for(let indx = 0 ;indx < 10 ; indx++){
        console.log('reversedContent[' + indx + ']: ');
        console.log(reversedContent[indx]);
    }

    for(let i = 0 ; i < 10 ; i++){
        console.log('contentArray[' + i + ']: ');
        console.log(contentArray[i]);
    }



    const Row = ({ index, style }) => {
        // console.log(reversedContent[index]);
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
