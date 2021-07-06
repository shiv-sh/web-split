import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './main.css';
import View1 from '../webview-1/view1';
import View2 from '../webview-2/view2';
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Main() {
    const userName = sessionStorage.getItem('userName');
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [toggle, setToggle] = useState(false);
    const history = useHistory();

    function handleLogout() {
        sessionStorage.clear();
        history.push('/login')
    }
    return (
        <div className="main">
            <div className="main-bar">
                <div className="web-1">
                    <div className="username">
                        <div><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faUser}></FontAwesomeIcon></div>
                        <div> {userName}</div>
                    </div>
                    <div className="togglebars">
                        <div onClick={e=>setToggle(!toggle)}><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faBars}></FontAwesomeIcon></div>
                    </div>
                    {toggle?<div className="toggle-div">
                    <div><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faUser}></FontAwesomeIcon></div>
                    <div> {userName}</div>
                    </div>:null}
                    <div className="textbox">
                        <input className="textbox-input" value={url1} name="url1"
                            onChange={e => setUrl1(e.target.value)} type="text" />
                    </div>
                </div>
                <div className="web-2">
                    <div className="textbox">
                        <input className="textbox-input" value={url2} name="url1"
                            onChange={e => setUrl2(e.target.value)} type="text" />
                    </div>
                    <div className="logout">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
            <div className="web-split">
                <View1 url={url1} style={{ 'marginRight': '5px' }} />
                <View2 url={url2} />
            </div>
        </div>
    )
}

export default Main;
