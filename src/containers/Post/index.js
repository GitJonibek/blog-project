import React from 'react'

import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/SideBar'
import styles from './style.css'

const Post = (props) => {

  return (
    <section className={styles.container}>
      <BlogPost {...props} />
      <SideBar {...props} />
    </section>
  )
}

export default Post;
