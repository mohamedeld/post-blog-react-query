import { useState } from "react"
import { PostDetails } from "./PageDetails";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../libs/api";

const Post = () => {
  const [currentPage,setCurrentPage] = useState(1);
  const [selectedPost,setSelectedPost] = useState('');

  const {data,isLoading,isError} = useQuery({
    queryKey:['posts',currentPage],
    queryFn:fetchPosts
  })
  if(isLoading){
    return (
      <p>Loading...</p>
    )
  }
  if(isError){
    return (
      <p>Something went wrong...</p>
    )
  }
  return (
    <>
      <ul>
        {data?.length> 0 ? (
          data?.map(item=>{
            return (
              <li key={item?.id} onClick={()=> setSelectedPost(item)}>
                {item?.title}
              </li>
            )
          })
        ):(<p>There are no posts right now</p>)}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetails post={selectedPost} />}
    </>
  )
}

export default Post