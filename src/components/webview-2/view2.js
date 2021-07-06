import React from 'react';
import './view2.css';

function View2({ url }) {
    return (
        <div className="view2">
            {url.length ? <iframe src={url}
                width="100%"
                height="100%">
            </iframe> : <h3>Enter a url in input box above</h3>}
        </div>
    )
}

export default View2
