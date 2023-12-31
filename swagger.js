const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Users API",
        description: "Users API Information",
        version: "1.0.0"
    },
    host: "localhost:3000",
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);