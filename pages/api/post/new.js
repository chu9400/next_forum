import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {

    if (요청.method == "POST") {
        if (요청.body.title == '' || 요청.body.content == '' ) {
            return 응답.status(400).json("제목과 내용을 입력해주세요.");
        } 

        const db = (await connectDB).db("forum");
        let checkId = await db.collection("post").findOne({title: 요청.body.title })

        if (checkId != null) {
            return 응답.status(400).json("이미 있는 글 제목 입니다.")
        }

        let result = await db.collection("post").insertOne(요청.body);
        응답.redirect(302, '/list')    

    } else {
        return 응답.status(400).json("POST 요청해야함.")
    } 

}