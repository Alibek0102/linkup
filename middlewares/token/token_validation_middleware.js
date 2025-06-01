import { USER_ERRORS } from "../../src/constants/error_messages/index.js";
import jwt from "jsonwebtoken";

const TokenValidationMiddleware = (req, res, next) => {
    const requestHeader = req.headers['Authorization'];

    if (!requestHeader) {
        res.status(401).json({ message: USER_ERRORS.UNAUTH_USER });
    }

    const token = requestHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: USER_ERRORS.UNAUTH_USER });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: USER_ERRORS.TOKEN_EXPIRED });
        }

        req.decoded = decoded;
        next();
    });
}

export default TokenValidationMiddleware;