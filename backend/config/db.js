import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', true)
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MonogoDB Connected: ${conn.connection.host}`)
    } catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB