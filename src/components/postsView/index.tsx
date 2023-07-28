import { useState } from "react";
import { useGetPostsQuery } from "../../config/reactJsApi";
import PostNavigation from "../postNavigation";
import PostsResults from "../postsResults";
import { PostType } from "../postsResults/types";

const PostsView = () => {
  const [postType, setPostType] = useState<PostType>(PostType.HOT);

  const { data, error, isLoading } = useGetPostsQuery(postType);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Oh no, there was an error</div>;

  const handleOnClickHot = () => {
    setPostType(PostType.HOT);
  };

  const handleOnClickNews = () => {
    setPostType(PostType.NEW);
  };

  const handleOnClickRising = () => {
    setPostType(PostType.RISING);
  };

  return (
    <>
      <PostNavigation
        onClickHot={handleOnClickHot}
        onClickNews={handleOnClickNews}
        onClickRising={handleOnClickRising}
      />
      <PostsResults children={data.children} />
    </>
  );
};

export default PostsView;
