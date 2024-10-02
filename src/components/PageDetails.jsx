import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../libs/api";
import "./PostDetail.css";
export function PostDetails({ post }) {
  // replace with useQuery
  const {data,isLoading,isError} = useQuery({
    queryKey:['post',post],
    queryFn:()=>fetchComments(post?.id)
  });
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
      <h3 style={{ color: "blue" }}>{post?.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post?.body}</p>
      <h4>Comments</h4>
      {data?.map((comment) => (
        <li key={comment?.id}>
          {comment?.email}: {comment?.body}
        </li>
      ))}
    </>
  );
}