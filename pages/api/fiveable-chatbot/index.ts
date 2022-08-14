import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    tag: "rubberduck",
    name: "Rubber Duck Debugger",
    url: `${process.env.BOT_URL}/api/fiveable-chatbot`,
    avatar: `${process.env.BOT_URL}/duck.jpg`,
    color: "#fcad03"
  });
};
