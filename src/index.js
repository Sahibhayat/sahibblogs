import app from "./app.js";
import dotenv from 'dotenv';
import mongoDB from "./db/connect.js";


dotenv.config();
const port = process.env.PORT;
mongoDB()
.then(
    app.listen(port, () => {
        console.log(`Server is running on port No: ${port}`)
    })
)
.catch((err) => {
    console.log("Mongodb connction problem", err)
})

