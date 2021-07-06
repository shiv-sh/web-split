import React, { useState, useEffect } from 'react';
import { Button, Row, Form, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import './Login.css';
import details from '../../Utilities/loginCred';

function Login() {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let match = details.find(el => el.username === userName && el.password === password);
        if (match) {
            setIsError(false)
            sessionStorage.setItem('userName', userName);
            sessionStorage.setItem('authenticated', true);
            history.push('/main')
        } else {
            setIsError(true)
        }
    }

    useEffect(()=> {
        if(sessionStorage.getItem('authenticated')){
            history.push('/main')
        }
    },[])

    return (
        <div className="login-page">

            <div className="form-layout">
                <div className="welcome-text">
                    <h1 className="heading">Welcome to Web Split</h1>
                </div>
                <div className="login-panel">
                    <div className="panel-heading">
                        <div className="panel-heading-left">
                            <span style={{ 'fontWeight': '300', 'fontSize': '40px' }}>Sign in</span>
                        </div>
                    </div>
                    <div id="divLogin" className={"bgImage panel-body"}>
                        <Form className="form-horizontal" >
                            <Form.Group controlId="formHorizontalUsername">
                                <Col md="12">
                                    <div className={isError?'show-error':'login-input'}>Email or Username</div>
                                    <input autoComplete="off" className="input no-outline" size="lg" value={userName} name="username"
                                        onChange={e => setUserName(e.target.value)} type="text" required />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId="formHorizontalPassword">
                                <Col md="12">
                                    <div className={isError?'show-error':'login-input'}>Password</div>
                                    <input autoComplete="off" className="input no-outline" size="lg" value={password} name="password"
                                        onChange={e => setPassword(e.target.value)} type="password" required />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Row style={{ 'marginLeft': '0px', 'marginTop': '30px' }}>
                                    <Col md="12" className="signin-btn">
                                        <Button className="sign-in" id="btn-lg" variant="info" size="lg" block type="submit" onClick={handleSubmit}>
                                            Sign in
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
