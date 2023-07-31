import { useState } from "react";
import { useGetPostsByCategoryQuery } from "../../config/reactJsApi";
import { useAppDispatch } from "../../lib/customHooks/useAppDispatch";
import { clearPosts } from "../../modules/posts/slice";
import PostNavigation from "../postNavigation";
import PostsResults from "../postsResults";
import { PostCategory } from "../postsResults/types";

const PostsView = () => {
  const dispatch = useAppDispatch();
  const [postCategory, setPostCategory] = useState<PostCategory>(
    PostCategory.HOT,
  );

  const { data, error, isLoading, isFetching, isError } =
    useGetPostsByCategoryQuery(postCategory);

  const isLoadingState = isLoading || !data || isFetching;

  if (isError) {
    const errorMessage = error.toString().toLowerCase();

    return (
      <div>
        <div>An error has occurred:</div>
        <div>{errorMessage}</div>
      </div>
    );
  }

  const handleOnClickHot = () => {
    dispatch(clearPosts());
    setPostCategory(PostCategory.HOT);
  };

  const handleOnClickNews = () => {
    dispatch(clearPosts());
    setPostCategory(PostCategory.NEW);
  };

  const handleOnClickRising = () => {
    dispatch(clearPosts());
    setPostCategory(PostCategory.RISING);
  };

  return (
    <div className="bg-white dark:bg-black">
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
    </div>
  );
};

export default PostsView;
