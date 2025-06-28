import { database } from "../../src/config/index.js";
import { INTERESTS_ERRORS } from "../../src/constants/error_messages/index.js";

const InterestsController = async (_, res) => {
    try {
        const interests = await database('interests').select('*');
        res.json(interests);
    } catch (error) {
        res.status(INTERESTS_ERRORS.GET_INTERESTS_ERROR.error_code)
            .json({ message: INTERESTS_ERRORS.GET_INTERESTS_ERROR.message })
    }
}

export default InterestsController;