import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {TextField} from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

const drawerWidth = 205;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
   height:"56px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "Indigo"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen ] = React.useState(false);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
    
      <List>
      <ListItem button >
            <ListItemText style={{ color: "Black", align:"centre" }}></ListItemText>
          </ListItem>
        <a href="/" style={{ textDecoration: 'none' }}>
          <ListItem button >
            <ListItemText style={{ color: "White",textDecoration: 'none' }} activeStyle = {{backgroundColor:"Blue"}}>Dashboard</ListItemText>
            <ListItemText style={{ color: "Black", align:"centre" }}></ListItemText>
          </ListItem>
        </a>
        <ListItem button >
      
          <a href='/imageapp/uploadimage/'>
            <ListItemText style={{ color: "White",textDecoration: 'none' }} activeStyle = {{backgroundColor:"Blue"}}>Upload Image</ListItemText>
          </a>
        </ListItem>
        
      </List>
      
    </div>
  );

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: "Black",height:52 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Grid item xs={11}>
            <Typography variant="h6" noWrap style={{ float: "left"}}>
                Stock Image Service
            </Typography>
            <Typography variant="h6" noWrap  >

                  </Typography>
          </Grid>

        </Toolbar>
      </AppBar>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }} >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer classes={{
                paper: classes.drawerPaper,
                  }}
                variant="permanent"
                open >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
