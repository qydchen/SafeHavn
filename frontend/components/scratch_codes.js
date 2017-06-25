// for uploading a picture

// class HomeShow extends React.Component {
//   constructor(props) {
//     super(props)
    // this.state = {
    //   imageFile: null,
    //   imageUrl: null // uploading a picture
    // }
// }
// updateFile(e) {
//   var file = e.currentTarget.files[0];
//   var fileReader = new FileReader();
//   fileReader.onloadend = function() {
//     this.setState({imageFile: file, imageUrl: fileReader.result});
//   }.bind(this);
//
//   if (file) {
//     fileReader.readAsDataURL(file);
//   }
// }

// handleSubmit(e) {
//   var data = new FormData();
//   formData.append("listing[body]", this.state.body);
//   formData.append("listing[image]", this.state.imageFile);
//   APIUtil.createHome(formData, this.goBack);
//   }
// }
