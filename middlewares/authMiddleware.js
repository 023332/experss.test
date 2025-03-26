import moment from 'moment';
import helpers from "../utils/helpers.js";
export default async (req, res, next) => {
    const token = req.headers.token || null;

    if (!token) {
        res.status(401).json({
            message: 'token not found',
        })
        return;
    }

    let data = null

    try {
        data = helpers.decrypt(token);

        if (data.expiresIn && moment().isAfter(moment(data.expiresIn))) {
            data = null
        } else {
            req.userId = data.userId;
        }
        console.log(data);
    } catch (err) {
        data = null;
        console.log(err)
    }

    if (!data) {
        res.status(401).json({
            message: 'token not found',
        })
        return;
    }

    next()
}



