const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://hriddhisha03:zNKqtUFOlDMznVH1@cluster0.s0psdw8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}