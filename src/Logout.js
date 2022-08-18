import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import './App.css';

const Logout = () => {

  const logout_url = process.env.REACT_APP_BACK_URL + "/logout";

  return(
    <Box m={0} pt={0} className="right">
      <Button href={logout_url} variant="outlined" >Logout</Button>
    </Box>
  )
};

export default Logout;
