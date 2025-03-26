import CryptoJS from "crypto-js";
import md5 from "md5";

const { USER_PASSWORD, USER_AUTH_SECRET } = process.env;

export default {
  passwordHash(password) {
    return md5(md5(password) + USER_PASSWORD);
  },

  encrypt: (data, secret = USER_AUTH_SECRET) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
  },

  decrypt: (ciphertext, secret = USER_AUTH_SECRET) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
