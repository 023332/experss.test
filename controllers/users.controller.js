import {generateMD5Hash} from "../utlis/helpers.js";

const USER_PASSWORD_SECRET = 'chaperonage1234@gmail.com';

export  default {
    login(req, res) {
        res.send("/login");
    },

    register(req, res) {
        const host = generateMD5Hash(generateMD5Hash("1234567") + USER_PASSWORD_SECRET);
        res.json({
            host,
        });
    }
}