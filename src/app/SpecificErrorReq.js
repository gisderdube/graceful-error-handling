import React, { Component } from 'react'
import axios from 'axios'

import InlineError from './InlineError'

class SpecificErrorRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
            city: '',
        }

        this._callBackend = this._callBackend.bind(this)
        this._changeCity = this._changeCity.bind(this)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.city}
                    style={{ marginRight: 15 }}
                    onChange={this._changeCity}
                />
                <button onClick={this._callBackend}>Delete your city</button>
                <InlineError error={this.state.error} />
            </div>
        )
    }

    _changeCity(e) {
        this.setState({
            error: '',
            city: e.target.value,
        })
    }

    _validate() {
        if (!this.state.city.length) throw new Error('Please provide a city name.')
    }

    _callBackend() {
        this.setState({
            error: '',
        })

        try {
            this._validate()
        } catch (err) {
            return this.setState({ error: err.message })
        }

        axios
            .delete('/api/city')
            .then(result => {
                // do something with it, if the request is successful
            })
            .catch(err => {
                if (err.response.data.error === 'GENERIC') {
                    this.props.setError(err.response.data.description)
                } else {
                    this.setState({
                        error: err.response.data.description,
                    })
                }
            })
    }
}

export default SpecificErrorRequest
