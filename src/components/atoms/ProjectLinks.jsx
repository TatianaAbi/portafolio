import { Link } from "react-router-dom"

const ProjectLinks = ({post,setview})=>{
    return(
    <Link to={post.slug} className="link-option" onClick={()=> setview(true)}>{post.linkName}</Link>
    )
}
export{ProjectLinks}