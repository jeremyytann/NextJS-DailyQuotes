import { connectToDb } from '@utils/database';
import Quote from '@models/quote';

export const POST = async (req) => {
  const { userId, description, tag } = await req.json();

  const date = new Date();

  var dateFormat = new Intl.DateTimeFormat("en-ZA", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: "Asia/Kuala_Lumpur",
    timeZoneName: "short"
  });

  const formattedDateTime = dateFormat.format(date);

  try {
    await connectToDb();

    const newQuote = new Quote({
      created_at: new Date().toISOString(),
      created_date_time: formattedDateTime,
      creator: userId,
      description,
      tag,
    });

    await newQuote.save();

    return new Response(JSON.stringify(newQuote), { status: 201 });
  } catch (error) {
    return new Response('Failed to create new quote', { status: 500 });
  }
}