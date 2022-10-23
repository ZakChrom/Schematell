const { Schema, model } = require("mongoose");

module.exports = model('accounts', new Schema({
        name: {
            type: String,
            default: "Mod Empty",
            required: true
        },
        description: {
            type: String,
            default: "Description Empty"
        },
        data: {
            type: Object,
            default: {},
            required: true
        },
        mod_id: {
            type: Number,
            default: 0,
            required: true,
            unique: true,
        },
        user_id: {
            type: Number,
            default: 0,
            required: true,
        }
    },{
        collection: "mods"
    })
);