import React, { Component } from 'react'

class InlineError extends Component {
    render() {
        if (!this.props.error) return null

        return (
            <div
                style={{
                    marginTop: 15,
                    color: '#cc0000',
                }}
            >
                {this.props.error}
            </div>
        )
    }
}

export default InlineError
