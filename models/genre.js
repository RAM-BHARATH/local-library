var mongoose = require('mongoose')

var Schema = mongoose.Schema

var GenreSchema = new Schema(
    {
        name: {type: String, minLength:3, maxLength: 100}
    }
);

//virtual for getting url of genre
GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/'+this._id
})

//Export Model
module.exports = mongoose.model('Genre', GenreSchema);