module.exports=thefunction=>(req,res,next)=>{
    Promise.resolve(thefunction(req,res,next)).catch(next)
}