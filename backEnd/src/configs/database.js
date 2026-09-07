import mongoose from "mongoose";

  const conntectToDataBase = async () => {
    try {
      await mongoose.connect(process.env.DATABASE_URI);
      console.log("MonogDb Connected");
    } catch (error) {
      console.log("MongoDb Connection Failed!", error);
    }
  };

export default conntectToDataBase;