import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const getTopics = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });

        if(!res.ok){
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
}

export default async function TopicsList(){

    const { topics } = await getTopics();

    return (
        <>
        {topics.map((t) => ( 
        <div className="mt-4 p-5 flex justify-between rounded-md bg-slate-700">
            <div>
                <h3 className="text-2xl font-bold">{t.title}</h3>
                <div className="mt-2">{t.description}</div>
            </div>

            <div className="flex gap-4 items-start">
                <RemoveBtn/>
                <button className="text-green-500">
                    <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </button>
            </div>
        </div>
        ))}
        </>
    )
}