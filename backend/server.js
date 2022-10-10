const app=require("./app")
const dotenv=require('dotenv')
const connectDatabase=require("./config/database")

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log('shutting down the server due to uncaught Exception')
    process.exit(1)
})



//config
dotenv.config({path:"backend/config/config.env"})

//call databaseconnect fn
connectDatabase();


app.listen(process.env.PORT,()=>{

    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

//unhandled promise rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("shutting down the server due to unhandled Promise Rejection")

    server.close(()=>{
        process.exit(1)
    })
})

