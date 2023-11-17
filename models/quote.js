import { Schema, model, models } from 'mongoose';

const QuoteSchema = new Schema({
  created_at: {
    type: String,
    required: [true, 'Datetime is required.']
  },
  created_date_time: {
    type: String,
    required: [true, 'Datetime is required.']
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
    required: [true, 'Description is required.']
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.']
  },
});

const Quote = models.Quote || model('Quote', QuoteSchema);

export default Quote;