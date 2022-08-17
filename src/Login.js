import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import './App.css';

const Login = () => {

  const login_url = process.env.BACK_URL + "/auth/google";
  console.log(login_url);

  return(
    <Box m={0} pt={0} className="center">
      <Button href={login_url} variant="outlined">Login</Button>
    </Box>
  )
};

export default Login;