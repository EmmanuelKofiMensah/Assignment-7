import {Schema, model} from "mongoose";

const postSchema = new Schema({
    title :{
        type: String,
        required: [true, "Post title is required"],
    },

    content : {
        type: String,
        required: [true, "Post content is required"],
    },

    user :{
        type : Schema.Types.ObjectId,
        ref : "User",
        required : [true, "Author is required"],
    },

    numberOfLikes :{
        type: Number,
        default: 0,
    },

    likedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ],
},
{
    timestamps: true,
}
);


export default model("Post", postSchema);