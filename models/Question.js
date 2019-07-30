const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {type: String, required: true},
    comp_id: {type: Number},
    survey_id: {type: ObjectId},
    values: {type: Array},
    answers: {type: Array}
  },
  {
    collection: 'questions'});
  
  module.exports = mongoose.model('Question', questionSchema);