import { NextApiRequest, NextApiResponse } from "next";

const quackPhrases = [
  "quack",
  "quack quack",
  "quack, quack",
  "quack!",
  "quack?",
  "quack."
];

export default (_: NextApiRequest, res: NextApiResponse) => {
  let message = [];

  for (let i = 0; i < 3; i++) {
    message.push(quackPhrases[Math.floor(Math.random() * quackPhrases.length)]);
  }

  res.status(200).send(message.join(" "));
};
