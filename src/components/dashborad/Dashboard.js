import React,{Component} from 'react'
import Header from './Header';
import Imagelist from './ImageList';
import axios from 'axios';
import SearchBar from './searchbar'

class Dashboard extends Component{
    constructor(props)
    {
        super()
        this.state={
            images:[]
        }
    }
    componentDidMount(){
      axios.get('http://localhost:8000/images/')
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

    render()
    {
        return (
            <div>
                <Header />             
                <br/><br/><br/>
                <center>
                <SearchBar handleSetSearchImages={this.handlesearchimages} />
                <Imagelist imageList={this.state.images} handleClick={this.handleClickImage}/>
                </center>
            </div>
        )
    }
}
export default Dashboard