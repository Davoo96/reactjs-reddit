import { useState } from "react";
import Button from "../button";
import { ButtonTypes } from "../button/types";

type PostNavigationProps = {
  onClickHot: () => void;
  onClickNews: () => void;
  onClickRising: () => void;
  isDisabled: boolean;
};

const PostNavigation = ({
  onClickHot,
  onClickNews,
  onClickRising,
  isDisabled,
}: PostNavigationProps) => {
  const [activeStates, setActiveStates] = useState({
    hot: true,
    news: false,
    rising: false,
  });

  return (
    <div className="flex justify-center align-center gap-4 py-5 px-4">
      <Button
        title="Hot"
        onClick={() => {
          onClickHot();
          setActiveStates({ hot: true, news: false, rising: false });
        }}
        isActive={activeStates.hot}
        type={ButtonTypes.DEFAULT}
        isDisabled={isDisabled}
        ariaLabel="Hot posts"
      />
      <Button
        title="News"
        onClick={() => {
          onClickNews();
          setActiveStates({ hot: false, news: true, rising: false });
        }}
        isActive={activeStates.news}
        type={ButtonTypes.DEFAULT}
        isDisabled={isDisabled}
        ariaLabel="News posts"
      />
      <Button
        title="Rising"
        onClick={() => {
          onClickRising();
          setActiveStates({ hot: false, news: false, rising: true });
        }}
        type={ButtonTypes.DEFAULT}
        isActive={activeStates.rising}
        isDisabled={isDisabled}
        ariaLabel="Rising posts"
      />
    </div>
  );
};

export default PostNavigation;
