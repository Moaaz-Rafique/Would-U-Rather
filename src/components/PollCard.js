import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

function PollCard({ poll, submitVote, index }) {
  const { statement, options, votes } = poll;
  const [selectedOption, setSelectedOption] = useState(0);
  const dispatch = useDispatch();
  const onChangeValue = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Paper
      elevation={1}
      style={{ width: "60%", margin: "20px", padding: "20px" }}
    >
      {statement}
      {options.map((opt, index) => {
        return (
          <div
            key={index}
            onChange={(e, index) => {
              onChangeValue(e);
            }}
          >
            <label>
              {" "}
              <input type="radio" name={statement} value={index} />
              {opt ? <span>{opt.name}</span> : "error"}
            </label>
          </div>
        );
      })}
      <Button
        variant="contained"
        style={{ backgoundColor: "#400CCC" }}
        onClick={() => {
          submitVote(index, selectedOption);
        }}
      >
        Submit Vote
      </Button>
    </Paper>
  );
}
export default PollCard;
