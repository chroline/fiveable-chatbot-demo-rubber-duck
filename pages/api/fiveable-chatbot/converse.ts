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
  let message: string[] = [];

  for (let i = 0; i < 3; i++) {
    message.push(quackPhrases[Math.floor(Math.random() * quackPhrases.length)]);
  }

  setTimeout(() => res.status(200).send(message.join(" ")), 1000 + Math.floor(Math.random()*9000))
};
