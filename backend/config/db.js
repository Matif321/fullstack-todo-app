import mongoose from "mongoose"


const dbconntion = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connetion connect sucessfulllay")

    } catch (error) {
        console.log("db conntion have eror")

    }
}
export default dbconntion;