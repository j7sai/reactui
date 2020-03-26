import React,{Component} from 'react'
import Header from './Header';
import Imagelist from './ImageList';
import axios from 'axios';
import SearchBar from './searchbar'
import Pagination from './Pagination';
class Dashboard extends Component{
    constructor(props)
    {
        super()
        this.state={
            images:{
                results:[],
                count:0
            }
        }
    }
    componentDidMount(){
      axios.get('https://fathomless-mountain-09030.herokuapp.com/api/images/')
      .then(response => {
       this.setState({images:response.data})
      })
      .catch(error => {
          console.log(error)
      }) 
    }

    handlesearchimages=(images)=>{
      this.setState({images:images})
    }

    handlePaginationNumber=(pageNumber)=>{
        axios.get(`https://fathomless-mountain-09030.herokuapp.com/api/images/?page=${pageNumber}`)
        .then(response => {
         this.setState({images:response.data})
        })
        .catch(error => {
            console.log(error)
        }) 
    }

    render()
    {
        return (
            <div>
                <Header />             
                <br/><br/><br/>
                <center>
                <SearchBar handleSetSearchImages={this.handlesearchimages} />
                <br/>
                {this.state.images.results.length!==0?<Imagelist imageList={this.state.images.results} handleClick={this.handleClickImage}/>:<p>No Images Found</p>}
                {this.state.images.results.length!==0?<Pagination handlePage={this.handlePaginationNumber} countImages = {this.state.images.count}/>:null}
                </center>
            </div>
        )
    }
}
export default Dashboard