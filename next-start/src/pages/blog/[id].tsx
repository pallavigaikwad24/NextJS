import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <>This is the blog post with ID: {id}</>;
};

export default Post;