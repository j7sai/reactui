import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, DialogActions, FormControl} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    background:"	rgb(214, 214, 245)",
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: 300,
    },
    marginLeft:200,
    marginRight: "12%",
    display: 'flex',
    flexWrap: 'wrap',
    paper: {
      padding: theme.spacing(2),
      marginTop: 114 ,
      color: theme.palette.text.secondary,
      maxWidth: 350,
    },

  },
  gridContainer: {
      maxWidth: 940
  },
  Button:{
    background:"#c0c1aa"
  },
  listContainer:{
    columns:2,
  },
  input: {
    display: 'none',
  }, 
  demo: {
    backgroundColor: theme.palette.background.paper,
    width:100,
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const [fileList, setFileList] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <React.Fragment>
      <div>
      <Paper className={classes.paper} style={{marginTop:114,background:'rgb(148, 175, 164)',marginLeft:'16%',marginRight:'16%'}}>
        <Grid container className={classes.gridContainer} spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}>
            <h1 style={{color:'rgb(255, 255, 255)',fontFamily:'Times New Roman'}}>Add Images with Description</h1>
          </Grid>
          <Grid item xs={12}>
            <input accept="image/*"  className={classes.input} onChange={props.fileHandlerSave} id="contained-button-file"  multiple type="file" />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={12} sm={6} direction="row"  >
            <Grid xs={10}>
            {/* <React.Fragment className={classes.demo}> */}
            <List dense={dense} className={classes.listContainer}>
              {props.photosList.map(item=>{
                return (
                  <ListItem>
                  <ListItemText
                    primary={item.name}
                  />
                </ListItem>
                ) 
              })}
            </List>
            </Grid>
            <Grid xs={4}></Grid>
          {/* </React.Fragment> */}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-textarea"
              label="Description"
              placeholder="Placeholder"
              style={{width:400}}
              name="description"
              onChange={props.handlerDesc}
              multiline
            />
          </Grid>
          <Button type="sumbit" onClick={props.save} className={classes.Button} >sumbit</Button>
          <br/><br/><br/><br/>
        </Grid>
      </Paper>
      </div>
    </React.Fragment>
  );
}