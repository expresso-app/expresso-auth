module.exports = {
    env: process.env.NODE_ENV,
    appEnv: process.env.APP_ENV,
    port: process.env.PORT || 3000,
    dbConnection: process.env.DATABASE_CONNECTION,
    email: {
        address: process.env.EMAIL_ADDRESS,
        host: process.env.EMAIL_HOST,
        userName: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD
    }
};