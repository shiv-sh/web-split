import React from 'react';
import './view1.css';

function View1({ url }) {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    const isurlValid = (url) => {
        return regex.test(url)
    }
    return (
        <div className="view1">
            {isurlValid(url) ? <iframe src={url}
                width="100%"
                height="100%">
            </iframe> : <h3>Enter a Valid url in input box above</h3>}
        </div>
    )
}

export default View1;
