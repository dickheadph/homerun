// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tours from '../../data/tours.json';

export default function handler(req, res, next) {
  if (!tours) {
    return next(new Error('LALALALALA', 400));
  }
  res.status(200).json({ tours });
}
