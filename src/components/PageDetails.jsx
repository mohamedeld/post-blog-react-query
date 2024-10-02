import { useMutation, useQuery } from "@tanstack/react-query";
import { deletePost, fetchComments, updatePost } from "../libs/api";
import "./PostDetail.css";
export function PostDetails({ post }) {
  // replace with useQuery
  const {data,isLoading,isError} = useQuery({
    queryKey:['post',post?.id],
    queryFn:()=>fetchComments(post?.id)
  });
  const deletePostBtn = useMutation({
    mutationFn:(postId)=> deletePost(postId)
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
  const updatePostBtn = useMutation({
    mutationFn:(postId) => updatePost(postId)
  })
  return (
    <>
      <h3 style={{ color: "blue" }}>{post?.title}</h3>
      <button disabled={deletePostBtn?.isPending} onClick={()=> deletePostBtn?.mutate(post?.id)}>Delete</button> 
      <button disabled={updatePostBtn?.isPending}
      onClick={()=> updatePostBtn?.mutate(post?.id)}
      >Update title</button>
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