import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: 'akashamrolkar', 
  api_key: '666295476659841', 
  api_secret: 'wh1Vm9oi2Tf8q3eJG7EmEVVjIEc' 
});

  export const uploadOnCloudinary = async(localFilePath) => {
    console.log(localFilePath)
    try {
        if(!localFilePath) return null
       const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        
       fs.unlinkSync(localFilePath)
       return response.secure_url;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file
        return null
    }
    
  }
