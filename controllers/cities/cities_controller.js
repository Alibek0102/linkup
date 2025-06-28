import { database } from '../../src/config/index.js';
import { CITY_ERRORS } from '../../src/constants/error_messages/index.js';

const CitiesController = async (_, res) => {
    try {
        const cities = await database("cities").select("*");
        res.json(cities);
    } catch (error) {
        res.status(404).json({ message: CITY_ERRORS.GET_CITIES_ERROR });
    }
}

export default CitiesController;