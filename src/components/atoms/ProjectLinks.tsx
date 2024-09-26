import React from 'react'
import { propsLink } from '../interfaces'
import { Link } from 'react-router-dom'

function ProjectLinks ({ post, setView }:propsLink){
  return (
    <Link to={post.slug} className='link-option' onClick={() => setView(true)}>
      {post.linkName}
    </Link>
  )
};
export { ProjectLinks }
