// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db, schema } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const json = await db.select().from(schema.test);

  console.log(json);

  return res.status(200).json({ message: "Yes!" });
}
