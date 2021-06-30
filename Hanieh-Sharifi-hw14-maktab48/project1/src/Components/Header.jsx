import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from "@material-ui/core/Box";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { MenuItem, MenuList } from '@material-ui/core';
import ThemeContext from "../Context/ThemeContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:"sticky",
    top:"0",
    opacity:"1",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"center"
  },
  menu: {
      display:"flex",
      flexGrow: 12
  }
}));

function Header()
{
    const [displayer, setDisplayer] = useState(false);
    const classes = useStyles();
    const {lightThemeState, setLightThemeState} = useContext(ThemeContext);

    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Box  display={{ xs: "inline", sm: "none" }}>
                            <IconButton onClick={()=>setDisplayer(!displayer)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="h6" className={classes.title}>
                            Profiler
                        </Typography>
                        <MenuList display="none" variant="menu" className={classes.menu}>
                            <Box display={{ xs: "none", sm: "inline" }}>
                                <MenuItem>
                                        <Link to="/">Home</Link>
                                </MenuItem>
                            </Box>
                            <Box display={{ xs: "none", sm: "inline" }}>
                                <MenuItem>
                                        <Link to="/about">About Us</Link>
                                </MenuItem>
                            </Box>
                        </MenuList>
                        <IconButton onClick={() => {setLightThemeState(!lightThemeState)}}   edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Brightness4Icon />
                        </IconButton>
                    </Toolbar>
                    {displayer && (<MenuList variant="menu">
                            <Box>
                                <MenuItem>
                                    <Link to="/" onClick={() => setDisplayer(false)}>Home</Link>
                                </MenuItem>
                            </Box>
                            <Box>
                                <MenuItem>
                                    <Link to="/about" onClick={() => setDisplayer(false)}>About Us</Link>
                                </MenuItem>
                            </Box>
                        </MenuList>)}
                </AppBar>
            </div>
    );
}


export default Header;