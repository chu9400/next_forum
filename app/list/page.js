import { connectDB } from "@/util/database"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()

    console.log(result);

    return(
        <div className="list-bg">
            { result.map((result, i)=>{
                return(
                    <div className="list-item">
                        <h4>{result.title}</h4>
                        <p>1월 1일</p>
                    </div>
                )
            })}
        </div>
    )
}