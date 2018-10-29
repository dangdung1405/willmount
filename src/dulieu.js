import React, { Component } from 'react';
const a = 6;

class dulieu extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.data
        this.state = {
            a: 1
        }
        this.setState({
            b: 2,
            a: 3
        })

    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentWillReceiveProps(nextprops) {
        console.log(this.props)
        console.log(nextprops)
        console.log('componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log("THIS", this.data)
        return (
            //     <table>
            //     {this.nextProps.map((key) => {
            //         return (
            //             <tr>
            //                 <th>{key.index}</th>
            //                 <th>{key.img}</th>
            //                 <th>{key.title}</th>
            //                 <th>{key.content}</th>
            //             </tr>

            //         )
            //     })}

            // </table>
            <div>dulieu {this.props.dung}</div>
        );
    }
}

export default dulieu;