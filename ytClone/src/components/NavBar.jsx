// import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems={"center"}
      sx={{ background: "#000", top: 0, justifyContent: "space-between" }}
    >
        <Link to='/' style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        </Link>
        <SearchBar/>
    </Stack>
  );
};

export default NavBar;
