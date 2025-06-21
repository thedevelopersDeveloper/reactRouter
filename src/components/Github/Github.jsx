import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"
const Github = () =>{
    const {userid} = useParams()
    const [data,setData] = useState(0)
    useEffect(()=>{
        fetch(`https://api.github.com/users/${userid}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return(
        <>
        <h1>Followers:{data.followers}</h1>
        <img src={data.avatar_url} width={300} alt="loading"></img>
        </>
    )
}
export default Github