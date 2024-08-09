import { Link } from 'react-router-dom'

const ProjectLinks = ({ post, setView }) => {
  return (
    <Link to={post.slug} className='link-option' onClick={() => setView(true)}>
      {post.linkName}
    </Link>
  )
}

export { ProjectLinks }
