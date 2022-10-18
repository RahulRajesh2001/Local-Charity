class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }

    // for the search feature
    search(){
        const keyword=this.queryStr.keyword ?{
            name:{
                //regular expressioin
                $regex:this.queryStr.keyword,
                //i-- case in sensitive
                $options:"i",
            },

        }:
        {}
        this.query=this.query.find({...keyword})
        return this;
    }
//for the filter feature
    filter(){
        const queryCopy={...this.queryStr}

        //removing some fields for catefory
const removeFields=["keyword","page","limit"];

removeFields.forEach(key=>delete queryCopy[key]);



//filter for Rating

let queryStr=JSON.stringify(queryCopy);
queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);
this.query=this.query.find(JSON.parse(queryStr));
return this;
// for the pagination
    }
    pagination(resultPerPage){
        const currentPage=Number(this.queryStr.page)||1;

        const skip=resultPerPage*(currentPage-1)
        this.query=this.query.limit(resultPerPage).skip(skip)
        return this;
    }
};

module.exports=ApiFeatures;