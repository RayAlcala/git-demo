import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
// memo tells React to look at the props that this component gets 
// and checks the new value for all those props and compares it to the previous value those props got 
// if value of a prop changed, component gets re-executed and re-evaluated 
// if only parent component changed, then component execution will be skipped 