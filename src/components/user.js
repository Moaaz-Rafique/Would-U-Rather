import { Paper, Typography, CardMedia } from "@material-ui/core";

function User({ user }) {
  const { name, answeredPolls, createdPolls,image } = user;
  return (
    <Paper
      elevation={1}
      style={{ width: "60%", margin: "20px 0px", padding: "20px" }}
    >
      <CardMedia
          // className={classes.media}
          style={{height:'250px'}}
          image={image}
          title="Contemplative Reptile"
        />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="subtitle1">Answered: {answeredPolls}</Typography>
      <Typography variant="subtitle1">Created: {createdPolls}</Typography>
    </Paper>
  );
}
export default User;
