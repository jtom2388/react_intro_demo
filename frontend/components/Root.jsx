import React from 'react';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let str = 'This is so much better than Vanilla JS'
        let arr = [30, 11, 35];

        return(
            <div>
                <p>{str}</p>
                <p>{arr.join(" ")}</p>
            </div>
        )
    }
}

export default Root;