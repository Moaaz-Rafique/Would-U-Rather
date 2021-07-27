import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
function AddPoll() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const [statement, setStatement] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const addThisPoll = () => {
    let newPoll = {
      statement: statement,
      options: options,
      creator: currentUser,
      votes: [],
    };
    dispatch({
      type: "ADDPOLL",
      poll: newPoll,
    });
  };
  const setOption = (e, i) => {
    let myOptions = options;
    myOptions[i] = { name: e.target.value, votes: 0 };
    setOptions([...myOptions]);
  };
  const addOption = () => {
    setOptions([...options, ""]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="What?"
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
      />
      <div>
        {options.map((option, i) => {
          return (
            <p key={i}>
              <input
                type="text"
                placeholder={"Add Option"}
                value={option.name}
                onChange={(e) => setOption(e, i)}
              />
            </p>
          );
        })}
        <button type="button" onClick={addOption}>
          Add Option
        </button>
      </div>
      <button type="button" onClick={addThisPoll}>
        Add Poll
      </button>
    </div>
  );
}
export default AddPoll;
