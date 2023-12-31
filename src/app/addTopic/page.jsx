"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description){
            alert('Title and description are required.');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description}),
            });

            if(res.ok){
                
              await router.push('/');
            } else{
                throw new Error("Failed to create a topic.");
            }

        } catch (error) {
            console.log(error);
        }

    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
            <input
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                type="text" 
                className="rounded-sm px-3 py-3 bg-slate-600" 
                placeholder="Topic Title"
            />

            <input
                onChange={(e) => setDescription(e.target.value)} 
                value={description} 
                type="text" 
                className="rounded-sm px-3 py-3 bg-slate-600" 
                placeholder="Topic Description"
            />
            
            <button type="submit" className="bg-green-600 rounded-sm py-3 hover:bg-green-700">
                Add topic
            </button>
        
        </form>
    )
}