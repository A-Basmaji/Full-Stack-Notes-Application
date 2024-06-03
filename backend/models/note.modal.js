// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const noteSchema = new Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   tags: { type: [String], default: [] },
//   isPinned: { type: Boolean, default: false },
//   userId: { type: String, required: true },
//   createOn: { type: Date, default: new Date().getTime() },
// });

// module.exports = mongoose.modelNames("Note", noteSchema);


// Note model (models/Note.js)
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
