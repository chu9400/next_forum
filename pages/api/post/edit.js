import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    
    if(요청.method == "POST") {
        if (요청.body.title == '' || 요청.body.content == '' ) {
            return 응답.status(400).json("제목과 내용을 입력해주세요.");
        }
        
        const db = (await connectDB).db("forum");
        let updatedPostData = {
            title : 요청.body.title,
            content: 요청.body.content,
        }
        let result = await db.collection("post").updateOne(
            {_id : new ObjectId(요청.body._id)}, 
            {$set : updatedPostData}
        );
        
        응답.redirect(302, '/list')
    } else {
        return 응답.status(400).json("POST 요청을 해주세요.")
    }

}