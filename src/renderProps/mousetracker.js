import React from 'react';
import Mouse from "./mouse";
import MouseWithCat from './mouseWithCat';

class MouseTracker extends React.Component {

    render() {
        return (<>
            <h1>Move the mouse around!</h1>
            <Mouse />
            <Mouse render={mouse => <Cat mouse={mouse} />} />
            <MouseWithCat />
        </>
        );
    }
}

export default MouseTracker 