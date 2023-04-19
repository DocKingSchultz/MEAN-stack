const cloudinary = require('cloudinary').v2;


// Configuration
cloudinary.config({
  cloud_name: "dbojpprhx",
  api_key: "665725843676129",
  api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
});

const res = cloudinary.uploader.upload('../assets/pictures/sheep.jpg', {public_id: "ovca"})

res.then((data) => {
  console.log(data);
  console.log(data.secure_url);
}).catch((err) => {
  console.log(err);
});


// Generate
const url = cloudinary.url("ovca", {
  width: 100,
  height: 150,
  Crop: 'fill'
});


console.log(url);
