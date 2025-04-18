import React from 'react'
import Hero from '../Component/Projects/Hero'
import Blogs from '../Component/Blog/Blogs'

function Blog() {
    return (
        <div>
            <Hero title={"Our Blogs"} route={"blogs"} prevRoute={"Home"} nextRoute={"Blogs"} />
            <Blogs />
        </div>
    )
}

export default Blog