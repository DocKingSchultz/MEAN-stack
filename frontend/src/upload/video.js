const cloudinary = require('cloudinary').v2;


// Configuration
cloudinary.config({
  cloud_name: "dbojpprhx",
  api_key: "665725843676129",
  api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
});

const res = cloudinary.uploader
.upload_large("../assets/videos/coffee.mp4",
  { public_id:"original_coffee",
    resource_type: "video",
    chunk_size: 6000000 })
