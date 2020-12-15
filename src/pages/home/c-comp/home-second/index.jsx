import React, { memo } from "react";
import QueueAnim from "rc-queue-anim";
import ColorWindow from "@c/color-window";
import { Controlled as CodeMirror } from "react-codemirror2";
import { PageWrap } from "./style";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/mode/javascript/javascript.js");

export default memo(function index() {
  const jscode = `class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
  );`;

  return (
    <PageWrap>
      <QueueAnim className="page" duration="1000">
        <ColorWindow key="ColorWindow" padding="0px" margin="25px 5px">
          <CodeMirror
            value={jscode}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
            }}
          />
        </ColorWindow>
      </QueueAnim>
    </PageWrap>
  );
});
