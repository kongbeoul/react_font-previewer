import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import "./TextAreaForm.css";

const TextAreaForm = () => {
  const { size, font } = useSelector(state => state);
  const [textareaValue, setTextAreaValue] = useState(
    "가나다라마바사아자차카타파하"
  );
  const onChange = useCallback(e => {
    setTextAreaValue(e.target.value);
  });
  return (
    <div className="TextAreaForm">
      <textarea
        className={font}
        value={textareaValue}
        onChange={onChange}
        style={{
          fontSize: parseInt(size)
        }}
      />
    </div>
  );
};

export default TextAreaForm;
