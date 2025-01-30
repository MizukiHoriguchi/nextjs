import mongoose from "mongoose"
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://mhoriguchi:qhBhUEF2DknBN8Dh@cluster0.idbpn.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0")
            console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}
export default connectDB