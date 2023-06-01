const mongoose = require("mongoose");

const {Schema} = mongoose;

const bookSchema = new Schema(
    {

        title:{
            required: true,
            trim: true,
            type: String
        } ,

        author:{
            required: true,
            trim: true,
            type: String

        },
        description:{
            type: String
            
        },
        publishedYear:{
            type:Number
        }


},
{
    timestamps:true, versionKey:false
})

const Book = mongoose.model("Book",bookSchema)

module.exports = Book