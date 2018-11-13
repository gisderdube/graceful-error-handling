import React, { Component } from 'react'
import axios from 'axios'

class GenericErrorReq extends Component {
    constructor(props) {
        super(props)

        this._callBackend = this._callBackend.bind(this)
    }

    render() {
        return (
            <div>
                <button onClick={this._callBackend}>Cause a global Error</button>
            </div>
        )
    }

    _callBackend() {
        axios
            .post('/api/city')
            .then(result => {
                // do something with it, if the request is successful
            })
            .catch(err => {
                if (err.response.data.error === 'GENERIC') {
                    this.props.setError(err.response.data.description)
                } else {
                    // it is a specific error, display it differently
                }
            })
    }
}

export default GenericErrorReq
