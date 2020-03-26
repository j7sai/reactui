import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 1000,
    marginLeft: 92,
    background: "rgba(245, 0, 6, 0.22)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color:"black",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
 
  function handleSearchInput(e){
        setSearch(e.target.value)
  }
  
  function sumbitSearch(){
      axios.get(`https://fathomless-mountain-09030.herokuapp.com/api/images/?search=${search}`)
      .then(response => {
        props.handleSetSearchImages(response.data)
      })
      .catch(error => {
          console.log(error)
      })  
  }

  return (
    <Paper  className={classes.root} >

      <InputBase
        className={classes.input}
        placeholder="search Images using tags,description and dates ,ie ex: fromdate:20-19-2020 tags:animals,sports"
        onChange={handleSearchInput}
      />
      <IconButton onClick={sumbitSearch} type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}