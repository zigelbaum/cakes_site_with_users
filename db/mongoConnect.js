// hi just adding an

const mongoose = require('mongoose');
const {config}=require("../config/secret")

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.ijk1hfe.mongodb.net/black23`);
    console.log("mongo connect black23")
}