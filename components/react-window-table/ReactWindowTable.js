import { FixedSizeList  as List } from 'react-window';


// const Row = ({ index, style }) => {
//     return (
//         <div style={style}> Row {index} </div>
//     );
// };


const MqttList = ({listCount, contentArray}) => {
    
    let tmpArr = [...contentArray];


    let reversedContent = tmpArr.reverse();


    let caLength = contentArray.length;

    // console.log(`length of contentArray = ${contentArray.length}`);

    // console.log(`contnetArray[last] = ${contentArray[contentArray.length - 1]}`);
    // console.log(`reversedContent[0] = ${reversedContent[0]}`);


    // first ten elements of contentArray must be equal of last ten elements of reversedContent.
    for(let i = contentArray.length - 1 ; i > contentArray.length - 11 ; i--){

        console.log(`contentArray[${i}] = ${contentArray[i]}`);
    }

    for(let j = 0 ; j < 10 ; j++){
        // console.log(`contentArray[${contentArray.length - j}] = ${contentArray[j]}`);
        console.log(`reversedContent[${j}] = ${reversedContent[j]}`);
    }




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
