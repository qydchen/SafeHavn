import React from "react";
import Dropzone from 'react-dropzone';
import { Redirect } from "react-router-dom";

class ProfilePicForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: this.props.currentUser.image_url,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateDraggedFile = this.updateDraggedFile.bind(this);
  }

  handleSubmit(e) {
    let formData = new FormData();
    let userid = this.props.currentUser.id;
    if (this.state.imageFile) {
      formData.append("user[image]", this.state.imageFile);
    }
    this.props.editProfile(formData, userid).then(this.props.closeModal());
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
     fileReader.onloadend = function() {
       this.setState({ imageFile: file, imageUrl: fileReader.result });
     }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDraggedFile(e) {
    let file = e[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="pf-pic-cont">Your Profile Picture
          <div className='upload-cont'>
            <Dropzone className="upload-box" onDrop={this.updateDraggedFile}>
              <div className="parent-img">
                <img className="upload-img" src={this.state.imageUrl}/>
              </div>
              <div className="register-txt upload-txt">Drag image or upload a image here</div>
            </Dropzone>

          </div>
          <button className="pinkButton upload-btn" onClick={this.handleSubmit}>Edit Picture</button>
        </div>
      )
    } else {
      return (
        <Redirect to="/homes"/>
      )
    }
  }
};


export default ProfilePicForm;
