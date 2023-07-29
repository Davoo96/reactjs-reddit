import { useState } from "react";
import { useGetPostsByCategoryQuery } from "../../config/reactJsApi";
import PostNavigation from "../postNavigation";
import PostsResults from "../postsResults";
import { PostType } from "../postsResults/types";

const PostsView = () => {
  const [postType, setPostType] = useState<PostType>(PostType.HOT);

  const { data, error, isLoading, isFetching } =
    useGetPostsByCategoryQuery(postType);

  const isLoadingState = isLoading || !data || isFetching;

  if (error) {
    if ("status" in error) {
      const errorMessage =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errorMessage}</div>
        </div>
      );
    }
  }

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
        isDisabled={isLoadingState}
      />
      {isLoadingState ? (
        <div>Loading...</div>
      ) : (
        <PostsResults children={data.children} />
      )}
    </>
  );
};

export default PostsView;
