import User from "../models/mongodb-atlas.js"
import bcrypt from "bcryptjs";

const registerRoute = async(req,res) => {
  try {
    const registrationData = req.body;
    console.log(registrationData);
    const newPassword = req.body.subject
    const encryptedData = {...registrationData, subject : newPassword}
    const data = new User (encryptedData);
    data.save();
    console.log(encryptedData);
    res.status(200).json({success : true,data : encryptedData,message : "Registered Sucessfully!"})
    }
    catch (error) {
      res.status(400).send(error);
    }
}
export default registerRoute;
