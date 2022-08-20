import { api } from "@/src/server/api";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  await api.handle(_req, res);
};

export default handler;
