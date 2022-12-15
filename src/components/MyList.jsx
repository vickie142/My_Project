import React, {useState, useEffect} from "react";

export default function BlogList() {

    const [ myBlogs, setMyBlogs ] = useState([])

    async function loadData() {
        const response = await fetch("http://localhost:8000/bloggers")
        const data = await response.json()
        console.log(data)
        setMyBlogs(data)
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <h2>Here is all my current posts.</h2>
            <ul>
                {myBlogs.map((blogs, idx) => <li key={idx[3]}>{blogs}</li>)}
            </ul>
        </>
    )
}
