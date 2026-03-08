import app from "./app"

const PORT=process.env.PORT

import { connectDB } from "./config/db";

connectDB()
.then(() => {
     app.listen(PORT,()=>{
          console.log(`Server running on port ${PORT}`);
     })
})
.catch((error) => {
     console.error("Database connection error:", error);
})
