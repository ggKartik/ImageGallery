class feature{
    constructor(query,querystr){
        this.query = query;
        this.querystr = querystr;
    }
    search(){
        const keyword=this.querystr.keyword?{
            imgName:{
                $regex:this.querystr.keyword,
                $options:"i"
            }
        }:{}
        this.query= this.query.find({...keyword});
        return this;
    }

    pagination(unitPerPage){
        //find page number
        let resultPage = Number(this.querystr.page) || 1;
        //no of items to be skipped
        let skippeditems = unitPerPage*(resultPage-1);
        this.query = this.query.limit(unitPerPage).skip(skippeditems);
        return this;
    }
}

module.exports = feature;