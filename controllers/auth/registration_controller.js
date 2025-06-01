import { validationResult } from 'express-validator';
import { database } from '../../src/config/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AUTH_VALIDATION_ERRORS } from '../../src/constants/error_messages/index.js';

const RegistrationController = async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array());
    }

    try {
        const { email, username, password } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const [id] = await database("accounts").insert({ email, username, password: hashedPassword });
        const accessToken = jwt.sign({ user_id: id }, process.env.JWT_SECRET_KEY, { expiresIn: '60d' });
        res.status(201).json({ success: true, access_token: accessToken });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(500).json({ error: AUTH_VALIDATION_ERRORS.USER_EXISTS });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

export default RegistrationController;