const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dbojpprhx",
  api_key: "665725843676129",
  api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
});


// Upload

const res = cloudinary.video('../assets/videos/coffee.mp4', {public_id: "video1"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });


// // Generate 
// const url = cloudinary.url("video1", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });



// The output url
// console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

cloudinary.api
.resources_by_ids(["video1"])
.then(result=>console.log(result));
