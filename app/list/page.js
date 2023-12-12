import { connectDB } from "@/util/database"
import Link from "next/link";

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()

    console.log(result);

    return(
        <div className="list-bg">
            { result.map((result, i)=>{
                return(
                    <div className="list-item">
                        <h4>
                            <Link href={`detail/${result._id}`}>
                                {result.title}
                            </Link>
                        </h4>
                        <p>1월 1일</p>
                    </div>
                )
            })}
        </div>
    )
}