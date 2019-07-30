const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    survey_name: {type: String, required: true},
    user_id: {type: ObjectId},
    exp_date: {type: String, required: true},
    participant_total: {type: Number}
  },
  {
    collection: 'surveys'});
  
  module.exports = mongoose.model('Survey', surveySchema);