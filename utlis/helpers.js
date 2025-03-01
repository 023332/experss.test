import crypto from "crypto";


const functions = {
     generateMD5Hash: (data) => {
         return crypto.createHash("md5").update(data).digest("hex");
     }
}

export  default functions;

export  const generateMD5Hash = functions.generateMD5Hash;