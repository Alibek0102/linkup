import { database } from '../../src/config/index.js';
import { CITY_ERRORS } from '../../src/constants/error_messages/index.js';
import { PaginationBodyGenerator } from '../../utils/index.js';

const CitiesController = async (reg, res) => {
    try {
        const page = parseInt(reg.query.page) || 1;
        const perPage = parseInt(reg.query.per_page) || 10;
        const offset = (page - 1) * perPage;

        const [cities, [{ count }]] = await Promise.all([
            database("cities")
                .select("*")
                .limit(perPage)
                .offset(offset),

            database("cities")
                .count("* as count")
        ]);

        res.json({
            data: cities,
            pagination: PaginationBodyGenerator({ count, page, perPage })
        });
    } catch (error) {
        res.status(CITY_ERRORS.GET_CITIES_ERROR.error_code)
            .json({ message: CITY_ERRORS.GET_CITIES_ERROR.message });
    }
}

export default CitiesController;