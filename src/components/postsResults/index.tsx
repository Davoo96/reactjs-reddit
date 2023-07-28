import { Posts } from "../../config/apiTypes";
import Button from "../button";
import { ButtonIcons, ButtonTypes } from "../button/types";
import Post from "../post";

const PostsResults = ({ children }: Posts) => (
  <div className="max-w-[1060px] my-0 mx-4 lg:mx-auto">
    {children.map(post => (
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
        onClick={() => {}}
        type={ButtonTypes.FULL}
        icon={ButtonIcons.ADD}
        isActive
      />
    </div>
  </div>
);

export default PostsResults;
