import React, { Component } from 'react'

class GlobalError extends Component {
    render() {
        if (!this.props.error) return null

        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: 10,
                    backgroundColor: '#ffcccc',
                    boxShadow: '0 3px 25px -10px rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {this.props.error}
                &nbsp;
                <i
                    className="material-icons"
                    style={{ cursor: 'pointer' }}
                    onClick={this.props.resetError}
                >
                    close
                </i>
            </div>
        )
    }
}

export default GlobalError
