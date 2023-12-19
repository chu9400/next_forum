import { connectDB } from "@/util/database"
import Link from "next/link";

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()

    return(
        <div className="list-bg">
            { result.map((result, i)=>{
                return(
                    <div className="list-item">                    
                        <Link href={'detail/' + result._id}>
                            <h4>{result.title}</h4>
                        </Link>
                        <Link href={'/edit/' + result._id}>수정</Link>
                        <p>1월 1일</p>
                    </div>
                )
            })}
        </div>
    )
}