import { connect } from "@/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await connect;
  const db = await client.db('board');

  if (req.method === 'POST') {
    console.log(req.body);
    const { id, title, content } = req.body;

    const result = await db.collection('post').updateOne({
      _id: new ObjectId(id)
    }, {
      $set: { title, content }
    });
    console.log(result);

    res.redirect(302, '/list');
  }
}