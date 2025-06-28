const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'LinkUp Документация',
            version: '1.0.0',
            description: 'Swagger документация твоего API',
        },
        servers: [
            {
                url: 'http://rp.qustust.ru/',
            },
        ],
    },
    apis: ['./routes/**/*.js'],
};

export default swaggerOptions;