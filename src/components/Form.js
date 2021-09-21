import { useState } from "react";

import { useDispatch } from "react-redux";

import { fetchText, changeType } from "../redux/textSlice";

function Form() {
  const dispatch = useDispatch();

  const [paras, setParas] = useState(1);
  const [format, setFormat] = useState("text");

  dispatch(fetchText(paras, format));

  const handleOption = (e) => {
    e.preventDefault();
    setFormat(e.target.value);
    dispatch(changeType(e.target.value));
  };

  return (
    <>
      <form>
        <input
          type="number"
          onChange={(e) => setParas(e.target.value)}
          value={paras}
          min="1"
        />{" "}
        <br />
        <select name="section" value={format} onChange={(e) => handleOption(e)}>
          <option value="text">Text</option>
          <option value="html">HTML</option>
        </select>
      </form>
    </>
  );
}

export default Form;
