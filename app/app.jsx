import React from "react"
import {render} from "react-dom"
import {Router, Route, browserHistory, Link} from "react-router"
import {Provider} from "react-redux"
import configureStore from "./reducers/configureStore"
import LoginPage from "./pages/LoginPage.jsx"

const LandingPage = () => (
    <div>
        Welcome
        <ul>
            <li>
                <Link to="login">Login</Link>
            </li>
        </ul>
    </div>
)


const Login = () => <div>Login</div>
const Home = () => <div>Home</div>

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LandingPage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="home" component={Home}/>
        </Router>
    </Provider>,
    document.getElementById("app")
)