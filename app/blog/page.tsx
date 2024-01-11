import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

const Blog = () => {
  return (
    <div className='container'><h1>Blog page</h1></div>
  )
}

export default Blog