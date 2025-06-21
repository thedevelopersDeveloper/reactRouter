import {useParams} from 'react-router-dom'
const Dynamic = () => {
    const {id} = useParams()
    return(<h1>My user:{id}</h1>)
}
export default Dynamic