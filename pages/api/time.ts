// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  date: Date;
};

function time(req: NextApiRequest, res: NextApiResponse<Data>) {
  const dynamicDate = new Date();
  res.status(200).json({ date: dynamicDate });
}

export default time;
