import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft:"36%"
    },
  },
}));

export default function PaginationSize(props) {
  const classes = useStyles();
  let countImages = props.countImages
  let totalPages = Math.ceil(countImages/30)
  function handleChange(event,page){
    props.handlePage(page)
  }
  return (
    <div className={classes.root}>
      <Pagination count={totalPages!==0?totalPages:1} size="large" onChange={handleChange}/>
    </div>
  );
}
