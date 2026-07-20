import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
    const primaryUri = process.env.MONGO_URI;

    if (!primaryUri) {
        throw new Error("MONGO_URI is not defined");
    }

    try {
        await mongoose.connect(primaryUri, { serverSelectionTimeoutMS: 5000 });
        console.log(" ✅ MongoDB connected");
    } catch (error) {
        console.error(" ❌ MongoDB connection error: ", error);
        process.exit(1); // Exit the process with an error code
    }

}

export default connectDB;