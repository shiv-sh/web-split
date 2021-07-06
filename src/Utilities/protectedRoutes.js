import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoutes = ({name, component: Component, ...rest }) => {
    console.log('kk',name);
    return (
        <Route
            {...rest}
            render= {(props) => (
                sessionStorage.getItem('authenticated')?<Component {...props} />:<Redirect to={{
                    pathname: '/login'
                  }} />
    )}
/>
    )

}

export default ProtectedRoutes;


