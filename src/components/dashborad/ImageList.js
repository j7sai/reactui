import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
// import tileData from './tileData';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import LaunchIcon from '@material-ui/icons/Launch';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft:'14%',

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 	"rgb(214, 214, 245)",
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  // gridList:{
  // }
}));

const tileData=[
{
    "id": 1,
    "tag": [],
    "imagesrc": "http://127.0.0.1:8000/media/documents/Sample-Hospital-Software-Bill-MyOPD-Beds_R8UK4CN.jpg",
    "description": "",
    "createdDate": "2020-02-14",
    "user": 1,
    cols:2,
    rows:1
},
{
    "id": 2,
    "tag": [],
    "imagesrc": "http://127.0.0.1:8000/media/documents/1_mIPxTSp.jpg",
    "description": "",
    "createdDate": "2020-02-14",
    cols:1,
    rows:1

},
{
    "id": 3,
    "tag": [],
    "imagesrc": "http://127.0.0.1:8000/media/documents/Sample-Hospital-Software-Bill-MyOPD-Beds_R8UK4CN.jpg",
    "description": "",
    "createdDate": "2020-02-14",
    "user": 1,
    cols:2,
    rows:2

},
{
    "id": 4,
    "tag": [],
    "imagesrc": "http://127.0.0.1:8000/media/documents/Sample-Hospital-Software-Bill-MyOPD-Beds_VayyfKv.jpg",
    "description": "",
    "createdDate": "2020-02-14",
    cols:1,
    rows:1
}]

export default function ImageGridList(props) {
  const classes = useStyles();
  const [imageList, setImageList] = React.useState([]);

 
  return (
    <div className={classes.root}>     
      <GridList cellHeight={250}  cols={4}     className={classes.gridList}>
      
        {props.imageList.map(item => (
          <GridListTile key={item.id} >
            <img  src={item.imagesrc} alt="image" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
