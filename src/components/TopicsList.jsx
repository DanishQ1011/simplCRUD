import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

export default function TopicsList(){
    return (
        <div className="mt-4 p-5 flex justify-between rounded-md bg-slate-700">
            <div>
                <h3 className="text-2xl font-bold">Topic</h3>
                <div className="mt-2">Topic Description</div>
            </div>

            <div className="flex gap-4 items-start">
                <RemoveBtn/>
                <button className="text-green-500">
                    <Link href={"/editTopic/123"}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </button>
            </div>
        </div>
    )
}