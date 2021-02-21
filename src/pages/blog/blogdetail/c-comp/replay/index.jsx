import React, { memo, useState } from "react";
import { Comment, Avatar, Form, Button, Input } from "antd";
import { ReplayWrap } from "./style";
const { TextArea } = Input;
export default memo(function Replay(props) {
  const [value, setValue] = useState("");
  const Editor = ({ value }) => (
    <>
      <Form.Item>
        <TextArea
          rows={4}
          onChange={e => {
            setValue(e.value);
          }}
          value={value}
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          // loading={submitting}
          // onClick={onSubmit}
          type="primary"
        >
          评论
        </Button>
      </Form.Item>
    </>
  );
  return (
    <ReplayWrap>
      <Comment
          avatar={
            <Avatar
              src="https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg"
              alt="Jianhua Gao"
            />
          }
          content={
            <Editor
              value={value}
            />
          }
        />
      
    </ReplayWrap>
  );
});
