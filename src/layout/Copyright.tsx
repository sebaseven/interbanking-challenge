import { Link, Typography } from "@mui/material";

const Copyright = ()=>{
    return (
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://www.interbanking.com.ar">
            InterBanking
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      );
}

export default Copyright