import { cloudinary } from './../server';
export class fileUploader {


    uploadImage(src, imageID, width, height) {
        const res = cloudinary.uploader.upload(src, { public_id: imageID })

        res.then((data) => {
            console.log(data);
            console.log(data.secure_url);
        }).catch((err) => {
            console.log(err);
        });


        const url = cloudinary.url(imageID, {
            width: width,
            height: height,
            Crop: 'fill'
        });

        console.log("Image uploaded : " + url);
    }
    uploadVideo(src, videoID) {
        const res = cloudinary.uploader
            .upload_large(src,
                {
                    public_id: videoID,
                    resource_type: "video",
                    chunk_size: 6000000
                })
        console.log("Video uploaded : ");
    }
    uploadFile(src, fileID)
    {
        const res = cloudinary.uploader
        .upload_large(src,
            {
                public_id: fileID,
                resource_type: "auto"
            })
    }
}