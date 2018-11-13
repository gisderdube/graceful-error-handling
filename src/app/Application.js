import React, { Component } from 'react'

import GlobalError from './GlobalError'
import GenericErrorReq from './GenericErrorReq'
import SpecificErrorReq from './SpecificErrorReq'

class Application extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
        }

        this._resetError = this._resetError.bind(this)
        this._setError = this._setError.bind(this)
    }

    render() {
        return (
            <div className="container">
                <GlobalError error={this.state.error} resetError={this._resetError} />
                <h1>Handling Errors</h1>
                <GenericErrorReq setError={this._setError} />
                <hr />
                <SpecificErrorReq setError={this._setError} />
            </div>
        )
    }

    _resetError() {
        this.setState({ error: '' })
    }

    _setError(newError) {
        this.setState({ error: newError })
    }
}

export default Application
