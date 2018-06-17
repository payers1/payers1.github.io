import React from 'react'
import { Icon } from 'antd';

export default () => {
  return <div className='Main'>
    <div>
      <h1> Phill Ayers </h1>
      <h1 className="sub"> SOFTWARE ENGINEER </h1>
      <div style={{display: 'flex', margin: '20px auto', width: '300px', justifyContent: 'space-evenly'}}>
        <Icon style={{fontSize: 40}} type="github" />
        <Icon style={{fontSize: 40}} type="linkedin" />
      </div>

    </div>
  </div>

}