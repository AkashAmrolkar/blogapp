import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath){
      return null
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(localFilePath, {resource_type: 'auto'})
    //console.log("File uploaded on cloudinary", cloudinaryResponse.url)  
    return cloudinaryResponse.url;
    fs.unlinkSync(localFilePath)
  } catch (error) {
    fs.unlinkSync(localFilePath)
    console.error('Cloudinary Service Error:', error);
    return null;
  }
};
