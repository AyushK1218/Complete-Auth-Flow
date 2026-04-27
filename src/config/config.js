import dotenv from "dotenv"

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environmental variables")
}

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environmental variables");
}

if (!process.env.EMAIL_APP_PASSWORD) {
    throw new Error("EMAIL_APP_PASSWORD is not defined in environment variables");
}

if (!process.env.EMAIL_USER) {
    throw new Error("EMAIL_USER is not defined in environment variables");
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD
};

export default config