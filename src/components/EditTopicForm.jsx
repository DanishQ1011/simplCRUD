"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({id, title, description}){

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if(!res.ok){
                throw new Error("Failed to update topic.")
            }
            router.refresh();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
            <input 
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text" 
                className="rounded-sm px-3 py-3 bg-slate-600" 
                placeholder="Topic Title"
            />
            
            <input 
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type="text" 
                className="rounded-sm px-3 py-3 bg-slate-600" 
                placeholder="Topic Description"
            />
            
            <button className="bg-green-600 rounded-sm py-3 hover:bg-green-700">
                Update topic
            </button>
        </form>
    )
}