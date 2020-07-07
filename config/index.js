
/*module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    DOMAIN: process.env.DOMAIN,
    DOMAIN_GOOGLE_STORAGE: process.env.DOMAIN_GOOGLE_STORAGE,
    JWT_SECRET: process.env.JWT_SECRET
} */

// mongodb+srv://dbuser02:dbuser02@cluster0-z4eg1.gcp.mongodb.net/codecamp?retryWrites=true&w=majority

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: "mongodb://127.0.0.1:27017/codecamp",
    DOMAIN: process.env.DOMAIN,
    JWT_SECRET: "xxxxxxxxx"
}