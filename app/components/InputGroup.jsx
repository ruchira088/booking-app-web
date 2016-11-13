import React from "react"
import Input from "./Input.jsx"

export default React.createClass({
    render() {
        const {label, name} = this.props

        return (
            <div className="input-group">
                <label className="input-label" htmlFor={name}>{label}</label>
                <Input {...this.props}/>
            </div>
        )
    }
})