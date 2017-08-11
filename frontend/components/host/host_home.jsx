import React from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom';
import { cancellationText, spaceText, amenityText } from '../../util/home_detail_descriptions';

class HostTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      title: "",
      description: "",
      address: "",
      max_guests: 2,
      bathrooms: 1,
      property_type: "Entire Home/Apt",
      room_type: "",
      internet: false,
      family: false,
      kitchen: false,
      beds: 2,
      bedrooms: 1,
      cancellation: "Flexible",
      imageFile: null,
      imageUrl: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateDraggedFile = this.updateDraggedFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let home = Object.assign({}, this.state);
    let formData = new FormData();
    if (this.state.imageFile) {
      formData.append("home[image]", this.state.imageFile);
    }
    this.props.createHome({home});
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

  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

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
        <Redirect to="/"/>
      )
    }
  }

}

export default withRouter(HostTrip);
