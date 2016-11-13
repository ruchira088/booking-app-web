import React from "react"
import {connect} from "react-redux"
import InputGroup from "../components/InputGroup.jsx"
import {loginUser} from "../actions/userAccount"

export default connect(undefined, dispatch => ({
    loginUser: credentials => dispatch(loginUser(credentials))
}))(React.createClass({
    getInitialState() {

        return {
            username: "",
            password: ""
        }
    },
    onInputChanged({target}) {
        const {name, value} = target

        this.setState({[name]: value})
    },
    onSubmit() {
        const {loginUser} = this.props

        loginUser(this.state)
    },
    render() {
        const {username, password} = this.state

        return (
            <div className="login-page">
                <div className="login-widget">
                    <InputGroup name="username" label="Username" value={username} onChange={this.onInputChanged}>
                    </InputGroup>
                    <InputGroup name="password" label="Password" type="password" value={password} onChange={this.onInputChanged}>
                    </InputGroup>
                    <button type="button" onClick={this.onSubmit}>Login</button>
                </div>
            </div>
        )
    }
}))