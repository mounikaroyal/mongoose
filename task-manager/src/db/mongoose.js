const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/collegeinfo', {
    useNewUrlParser:true,
    useCreateIndex:true
})
const User = mongoose.model('User', {
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("age must be a positive number")
            }
        }
    },
    Number:{
        type:Number
    },
    mail:{
        type:String
    }
})
 const me = new User({
    name: "mahi",
    age: -1
    // Number:564164881,
    // mail:'example@gmail.com'
})
me.save().then(() => {
    console.log(me)
}).catch((error) =>{
    console.log('Error!',error)

})

const Task = mongoose.model('Task', {
    desciption: {
        type: String
    },
    completed: {
        type: Boolean

    }
})
// const task = new Task({
//     desciption: 'Learn the Mongoose library',
//     completed: false
// })
// task.save().then(() => {
// console.log(task)
// }).catch((error) => {
//     console.log(error)
// })