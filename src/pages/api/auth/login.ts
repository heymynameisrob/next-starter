// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signIn } from "@/auth";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body;

  try {
    return await signIn("resend", data);
  } catch (err: unknown) {
    return res.status(500).json({ message: err });
  }
}
