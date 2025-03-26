import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import helpers from "../utils/helpers.js";

const users = [
    {
        "id": "bbb6eeaa-71b4-4ed4-bd28-a48d6dc2d02b",
        "login": "test",
        "password": "07413b147f8edab327dfd9c677b199ff"
    },
];

export default {
    login: async (req, res) => {
        const { login, password } = req.body;

        const ifExist = users.find(user => user.login === login);

        if (!ifExist) {
            res.status(422).json({
                message: 'user not found',
            });
            return;
        }

        if (ifExist.password === helpers.passwordHash(password)) {
            const expiresIn = moment().add(10, 'minutes').toISOString();

            const token = helpers.encrypt({
                userId: ifExist.id,
                expiresIn,
            });

            res.status(200).json({
                token: token,
                expiresIn,
            });
            return;
        }

        res.status(401).json({
            message: 'invalid password',
        });
    },

    register: async (req, res) => {
        const { login, password } = req.body;

        console.log(req.body)

        const ifExist = users.find(user => user.login === login);

        if (ifExist) {
            res.status(422).json({
                message: 'user already exist',
            })
            return;
        }

        users.push({
            id: uuidv4(),
            login,
            password: helpers.passwordHash(password),
        })

        res.json({
            users,
            message: 'successfully registered',
        });
    },

    profile: async (req, res) => {
        const user = users.find(user => user.id === req.userId);

        res.json({
            user,
            message: 'user profile',
        });
    },
}