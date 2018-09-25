import React from 'react'

export class Wu extends React.Component {
  audioRef = React.createRef()

  render() {
    return (
      <div
        style={{ width: '100px' }}
        onMouseEnter={() => this.audioRef.current.play()}
        onMouseLeave={() => this.audioRef.current.pause()}
      >
        <img alt="wutang" src="/wu.jpeg" height="50" />
        <audio
          style={{ width: '0px', height: '0px  ' }}
          loop
          ref={this.audioRef}
        >
          <source src="/wu.wav" type="audio/wav" />
        </audio>
      </div>
    )
  }
}
