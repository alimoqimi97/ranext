import { FixedSizeList as List } from 'react-window';
import listConfig from './listConfig.js';

const MqttList = ({ listContent }) => {

    let contentCopy = [...listContent];
    let reversedContent = contentCopy.reverse();

    console.log(listConfig);

    const Row = ({ index, style }) => {
        return (
            <div style={style}>
                {
                    reversedContent[index]
                }
            </div>
        );
    };

    return (
        <List
            height={listConfig.HEIGHT}
            itemCount={reversedContent.length}
            itemSize={listConfig.ITEMSIZE}
            width={listConfig.WIDTH}
        >
            {Row}
        </List>
    );
}

export default MqttList;
