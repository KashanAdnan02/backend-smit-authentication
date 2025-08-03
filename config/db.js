const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect("mongodb+srv://hamza:hamza1234@cluster0.bcqjwyf.mongodb.net/smit?retryWrites=true&w=majority&appName=Cluster0").then((res) => {
        console.log("Mongodb Connected Successfully")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDB