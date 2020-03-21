import React,{Component} from 'react'
import AddUploadImage from './AddImageUpload';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

class UploadImage extends Component{
    constructor(props)
    {
        super()
        this.state={
            photosList:[],
            formphotoList:[],
            values:{
                description:'',
                },
            open:false,
            message:''
        };

    }
    handlerdescription=(e)=>{
        const vname=e.target.name
        const vvalue=e.target.value
        this.setState(state=>{
            state.values[vname]=vvalue
            return {values:state.values} 
    });
    }
     
    handleFileSave=(e)=>{
        let keys = Object.keys(e.target.files)
        let photosList = keys.map(key =>{
            return e.target.files[keys[key]]
        })
        this.setState({photosList:photosList,formphotoList:e.target.files})
    }
    handleOpen =  () => {
      this.setState({open: true});
    };
  
     handleClose = () => {
      this.setState({open: false });
    };
  
    getCreateResponse() {
        let form_data = new FormData();
        form_data.append('description', this.state.values.description)
        let keys = Object.keys(this.state.formphotoList)
        keys.forEach(key=>{
          form_data.append("images[]",this.state.formphotoList[key])
        })
        let url = 'http://localhost:8000/image/';
        const response =axios.post(url, form_data, {
            headers: {
              'content-type': 'multipart/form-data'
            }
          })
          .then(res => {
                console.log(res.data);
                this.setState({open:true,message:res.data["message"]})

              })
              .catch(err =>{
                  let response = err.response
                  this.setState({open:true,message:response.data["message"]})
              }
          )
        return new Promise((resolve, reject) => {
          setTimeout(function() {
            response ? resolve(response) : reject('Error');
          },0);
        })
      }

    handleSubmit = () => {
          console.log("Dsdssd")
          this.getCreateResponse()
            .then(currentResponse => this.getCreateResponse())
            .then(currentRepsonse => {
              setTimeout(() => {
                this.setState({
                  photosList:[],
                  formphotoList:[],
                  values:{
                      description:'',
                      },
                  open:false,
                  message:''
                    })

              }, 2000);
              return true;
            })
            .catch(err => {
            })
      };

    render()
    {
        return (
            <div>
                <AddUploadImage photosList={this.state.photosList} handlerDesc={this.handlerdescription}
                 fileHandlerSave={this.handleFileSave} save={this.handleSubmit} />
                  <Snackbar
                    open={this.state.open}
                    onClose={this.handleClose}
                    message={this.state.message}
                  />
            </div>
        )
    }
}
export default UploadImage