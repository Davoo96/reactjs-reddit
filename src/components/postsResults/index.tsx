import { Posts } from "../../config/apiTypes";
import Button from "../button";
import { ButtonTypes } from "../button/types";
import Post from "../post";
import getUtcDateHours from "../../lib/functions/getUtcDate";
import { useAppDispatch } from "../../lib/customHooks/useAppDispatch";
import { increment } from "../../modules/numberPosts/slice";
import { useAppSelector } from "../../lib/customHooks/useAppSelector";

const PostsResults = ({ children }: Posts) => {
  const dispatch = useAppDispatch();
  const numberOfPostsDisplayed = useAppSelector(
    state => state.numberPosts.displayedPosts,
  );

  const handleViewMore = () => {
    dispatch(increment());
  };

  const postsToRender = children.slice(0, numberOfPostsDisplayed);

  return (
    <div className="max-w-[1060px] my-0 mx-4 lg:mx-auto">
      {postsToRender.map(post => (
        <Post
          key={post.data.id}
          title={post.data.title}
          sentAt={getUtcDateHours(post.data.created_utc)}
          userName={post.data.author}
          domain={post.data.url}
        />
      ))}
      <div className="pt-3 pb-[38px]">
        <Button
          title="Ver mais"
          onClick={handleViewMore}
          type={ButtonTypes.FULL}
          icon
          isActive
          isDisabled={numberOfPostsDisplayed >= children.length}
        />
      </div>
    </div>
  );
};

export default PostsResults;
