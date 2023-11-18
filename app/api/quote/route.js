import { connectToDb } from '@utils/database';
import Quote from '@models/quote';

export const GET = async (req) => {
  try {
    await connectToDb();

    const quotes = await Quote.find({}).populate('creator');

    return new Response(JSON.stringify(quotes), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch quotes', { status: 500 });
  }
}