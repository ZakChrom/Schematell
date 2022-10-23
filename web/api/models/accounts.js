const { Schema, model } = require("mongoose");

module.exports = model('account', new Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "This user has not placed a bio, yet."
        },
        profile_picture: {
            type: String,
            default: "./../images/default_profile_picture.png"
        },
        user_id: {
            type: Number,
            default: 0,
            required: true,
        }
    },{
        collection: "logins"
    })
);