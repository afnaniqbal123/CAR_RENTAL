import { FeedBacks } from "../Models/Feedbacks.model.js";

export const AddFeedback = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const { Rating, Message } = req.body;
  const feedBack = new FeedBacks({
    message: Message,
    rating: Rating,
    contract_ID: id,
  });
  feedBack.create((err, result) => {
    if (err) res.send(err).status(401);
    else res.send("All Done").status(201);
  });
};
