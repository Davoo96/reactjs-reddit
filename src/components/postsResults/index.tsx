import { useState } from "react";
import { Posts } from "../../config/apiTypes";
import Button from "../button";
import { ButtonTypes } from "../button/types";
import Post from "../post";

const PostsResults = ({ children }: Posts) => {
  const [numberPosts, setNumberPosts] = useState(9);

  const handleViewMore = () => {
    setNumberPosts(numberPosts + 5);
  };

  const postsToRender = children.slice(0, numberPosts);

  return (
    <div className="max-w-[1060px] my-0 mx-4 lg:mx-auto">
      {postsToRender.map(post => (
        <Post
          key={post.data.id}
          title={post.data.title}
          sentAt="whatever"
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
          isDisabled={postsToRender.length === children.length}
        />
      </div>
    </div>
  );
};

export default PostsResults;
