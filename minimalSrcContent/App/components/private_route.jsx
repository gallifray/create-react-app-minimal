import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth_resolved: false,
            auth_ok: false,
        }

    }

    checkAuth = () => {
        //     const token = localStorage.getItem('user_token');
        //     var ok = false;
        //     if (!token)
        //         this.setState({
        //             auth_resolved: true,
        //             auth_ok: false
        //         })
        //     fetch('/auth/check', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ token })
        //     })
        //         .then((response) => response.json())
        //         .catch(err => console.log(err))
        //         .then((data) => {
        //             if (!data.valid_token)
        //                 localStorage.removeItem('user_token')
        //             this.setState({
        //                 auth_resolved: true,
        //                 auth_ok: data.valid_token
        //             })
        //         })
    }

    componentWillReceiveProps = () => this.checkAuth();
    componentWillMount = () => this.checkAuth();

    render() {
        const { component: Component, ...rest } = this.props;
        if (!this.state.auth_resolved)
            return (<div></div>);
        else {
            return (
                <Route {...rest} render={props => (
                    <div>
                        {!this.state.auth_ok && <Redirect to={{ pathname: '/login' }} />}
                        <Component {...this.props} />
                    </div>
                )}
                />
            )
        }
    }
}


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         false ? <Component {...props} /> : <Redirect to='/login' />
//     )} />
// )

export default PrivateRoute;