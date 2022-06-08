const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel.create(data)
    return res.send({msg: savedData})
}


const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    return res.send({msg: savedData})
}

const allBooks = async function (req, res) {
    let savedData = await authorModel.find({author_name : "chetan bhagat" })
    const id = savedData[0].author_id
    const bookName = await bookModel.find({author_id : id }).select({name : 1, _id: 0})
    return res.send({msg: bookName})
}   

const updateBookPrice = async function (req, res) {
    let bookDetail = await bookModel.find({name: "two states"})
    let id = bookDetail[0].author_id
    let authorN = await authorModel.find({author_id : id}).select({author_name:1, _id:0 })

    const bkName = bookDetail[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100}, {new:true}).select({price:1, _id:0})
    return res.send({msg: authorN, updatedPrice})
}

const authorsName = async function (req, res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)
    // console.log(id);

    let temp = []
    for (let i=0; i<id.length; i++) {
        let x = id [i]
        const author = await authorModel.find({author_id : x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    // console.log(temp);
    const authorName = temp.flat()
    // console.log(authorName);
    return res.send({msg: authorName})
}

// additional problems 

const getBooksById = async function (req,res) {
    let authorId = req.params.id
    let savedData = await bookModel.find({author_id : authorId}).select({name:1, _id:0})
    return res.send({data : savedData})

}

const getAuthor = async function (req,res) {
    let bookQuery = await bookModel.find({ratings:{$gt:"4"}}).select({author_id:1, _id:0})
    let authId = bookQuery.map(inp => inp.author_id)
    
    let temp = []
    for(i=0;i<authId.length;i++) {
        let x = authId[i]
    let authorQuery = await authorModel.find({ $and: [{author_id : x}, {age: {$gt:"50"}}] }).select({author_name:1, age:1, _id:0})
    temp.push(authorQuery)
    }
    const finalAns = temp.flat()
    return res.send({data: finalAns})
}


module.exports.getAuthor = getAuthor
module.exports.getBooksById = getBooksById
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.allBooks= allBooks
module.exports.updateBookPrice= updateBookPrice
module.exports.authorsName= authorsName