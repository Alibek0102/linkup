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
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/**/*.js'],
};

export default swaggerOptions;