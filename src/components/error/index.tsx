import React, { Component } from 'react'

export class Error extends Component {
  render() {
    return (
      <div className="h-full">
        <p className="text-xl font-bold">
          ups! Something went wrong, try later!
        </p>
      </div>
    )
  }
}
