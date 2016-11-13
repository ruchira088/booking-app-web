import React from "react"

export default props => (
    <input className="input-field" {...props}/>
)
// export default React.createClass({
//     render() {
//         const {name, value} = this.props
//
//         return (
//             <input name={name} value={value} />
//         )
//     }
// })