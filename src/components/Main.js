import React from "react";
import { Icon } from "antd";

export default () => (
  <div className="Main">
    <div>
      <h1> Phill Ayers </h1>
      <h1 className="sub"> SOFTWARE ENGINEER </h1>
      <div className="icons">
        <a
          href="https://github.com/payers1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="github" />
        </a>
        <img src="/wu.jpeg" height="50" />
        <a
          href="https://www.linkedin.com/in/phill-ayers-aa6074b8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="linkedin" />
        </a>
      </div>
    </div>
  </div>
);
