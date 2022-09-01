const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ppst')
const plm = require('passport-local-mongoose')
const findOrCreate = require('mongoose-findorcreate')


const userSchema = mongoose.Schema({
   username: String,
   name:String,
   email:String
})

userSchema.plugin(plm , {usernameField:'email'})
userSchema.plugin(findOrCreate)


module.exports = mongoose.model('user', userSchema)
