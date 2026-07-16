import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" ✅ MongoDB connected");
    } catch (error) {
        console.error(" ❌ MongoDB connection error: ", error);
        process.exit(1); // Exit the process with an error code
    }

}

export default connectDB;