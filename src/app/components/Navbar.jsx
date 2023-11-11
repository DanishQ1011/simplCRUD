import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 rounded-lg p-5 mt-6 text-white ">
            <Link className="text-[30px]" href={'/'}>Simpl<span className="text-red-400">CRUD</span></Link>
            <Link className=" bg-slate-900 text-[20px] p-2 rounded-md hover:text-red-400" href={'/addTopic'}>Add topic</Link>
        </nav>
    )
}