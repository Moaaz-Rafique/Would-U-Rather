import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
function AddPoll() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users);
  const [statement, setStatement] = useState("");
  const [options, setOptions] = useState([{ name: "" }, { name: "" }]);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(false);
    setMessage("");
  }, [statement, options]);
  const addThisPoll = () => {
    if (statement == "") {
      setMessage("Please enter your Statement");
      return;
    }
    for (let opt of options) {
      if (opt == "") {
        setMessage("Please enter All of your options");
        return;
      }
    }
    let newPoll = {
      statement: statement,
      options: options,
      creator: currentUser,
      votes: [],
    };
    let updatedUsers = users;
    updatedUsers[currentUser].createdPolls++;

    dispatch({
      type: "ADDPOLL",
      poll: newPoll,
      users: updatedUsers,
    });

    let myOptions = options;
    myOptions = [{ name: "" }, { name: "" }];
    setStatement("");
    setOptions([...myOptions]);
    setDisabled(true);
  };
  const setOption = (e, i) => {
    let myOptions = options;
    myOptions[i] = { name: e.target.value };
    setOptions([...myOptions]);
  };
  const addOption = () => {
    setOptions([...options, { name: "" }]);
  };
  return (
    <Paper style={{ padding: "30px" }}>
      <Box style={{ display: "flex" }}>
        <Typography
          style={{ margin: "auto" }}
          variant="h3"
          m="auto"
          color="primary"
        >
          New Poll
        </Typography>
      </Box>
      <TextField
        id="standard-full-width"
        label="Statement"
        style={{ margin: "auto" }}
        placeholder="Placeholder"
        helperText="Add a statement for others"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
      />
      <Grid spacing={1}>
        {options.map((option, i) => {
          console.log(option, "option");
          return (
            <>
              <TextField
                key={i}
                label={"Option: " + (i + 1)}
                id="outlined-margin-normal"
                margin="normal"
                variant="outlined"
                placeholder={"Add Option"}
                value={option.name}
                onChange={(e) => setOption(e, i)}
              />

              <br />
            </>
          );
        })}
        <Button type="button" color="secondary" onClick={addOption}>
          Add Option
        </Button>
      </Grid>
      <Button
        type="button"
        color="primary"
        disabled={disabled}
        onClick={addThisPoll}
      >
        Add Poll
      </Button>
      <Typography variant="caption" color="secondary">
        {message}
      </Typography>
      <Typography variant="caption" style={{ color: "green" }}>
        {disabled ? "Successfully added poll" : ""}
      </Typography>
    </Paper>
  );
}
export default AddPoll;
