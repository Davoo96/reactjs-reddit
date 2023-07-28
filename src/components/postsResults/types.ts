export enum PostType {
  HOT = "hot",
  NEW = "new",
  RISING = "rising",
}

export type PostsViewProps = {
  postType: PostType;
};
