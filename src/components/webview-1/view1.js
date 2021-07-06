import React from 'react';
import './view1.css';

function View1({ url }) {
    return (
        <div className="view1">
            {url.length ? <iframe src={url}
                width="100%"
                height="100%">
            </iframe> : <h3>Enter a url in input box above</h3>}
        </div>
    )
}

export default View1;
