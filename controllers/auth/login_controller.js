import { validationResult } from 'express-validator';
import { database } from '../../src/config/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AUTH_VALIDATION_ERRORS } from '../../src/constants/error_messages/index.js';

const LoginController = async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array());
    }

    try {
        const { email, password } = req.body;

        const account = await database("accounts").where({ email: email }).first();
        bcrypt.compare(password, account.password, function (err, result) {
            if (result == true) {
                const accessToken = jwt.sign({ user_id: account.id }, process.env.JWT_SECRET_KEY, { expiresIn: '60d' });
                res.status(201).json({ success: true, access_token: accessToken });
            } else {
                res.status(500).json({ error: AUTH_VALIDATION_ERRORS.UNCORRECT_PASSWORD });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default LoginController;