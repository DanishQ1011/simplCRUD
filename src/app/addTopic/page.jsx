export default function AddTopic(){
    return(
        <form className="flex flex-col gap-3 mt-4">
            <input type="text" className="rounded-sm px-3 py-3 bg-slate-600" placeholder="Topic Title"/>
            <input type="text" className="rounded-sm px-3 py-3 bg-slate-600" placeholder="Topic Description"/>
            <button className="bg-green-600 rounded-sm py-3 hover:bg-green-700">
                Add topic
            </button>
        </form>
    )
}