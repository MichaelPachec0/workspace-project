const mongoose = require('mongoose')

//ticket schema

const TicketSchema = mongoose.Schema({
    projectId: {type:mongoose.Schema.Types.ObjectId, ref: 'Project'},
    title: {
        type:String,
        required:true
    },
    type: {
        type:String

    },
    description: {
        type:String
    },
    priority: {
        type:String
    },
    status: {
        type:String
    },
    completed: {
        type:Boolean
    },
    notes:{
        type:Array
    },
    todolist:{
        type:Array
    },
    created: { type: Date, default: Date.now },
    labels:{
        type:Array
    },
    label:{
        type:String
    }
})
const ProjectSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String
    },
    user: {
        type:mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    tickets: [{
        type:mongoose.Schema.Types.ObjectId, ref: 'Ticket'
    }],
    progress: {
        type:Number
    },
    notes: {
        type:Array
    },
    labels: {
        type:Array
    },
    created: { type: Date, default: Date.now }
    
})
const UserdataSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
    
})

const Ticket = mongoose.model("Ticket", TicketSchema)
const Project = mongoose.model("Project", ProjectSchema)
const Userdata = mongoose.model('UserData', UserdataSchema)

module.exports = {Ticket, Project, Userdata}