var db = require('./db');
const userSchema = new db.mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String }
}, { collection: 'users' });
let userModel = db.mongoose.model('userModel', userSchema);
module.exports = {
    userModel
}