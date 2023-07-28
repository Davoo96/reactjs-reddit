type PostProps = {
  title: string;
  sentAt: string;
  userName: string;
  domain: string;
  img?: string;
};

const Post = ({ title, sentAt, userName, domain, img }: PostProps) => {
  return (
    <a
      href={domain}
      target="_blank"
      className="flex justify-start align-top gap-[13px] relative py-3 before:absolute before:w-full before:h-[1px] before:bg-gray-dark-2 before:top-0"
    >
      {img ? (
        <img src={img} alt="" />
      ) : (
        <div className="hidden w-[77px] h-[77px] bg-gray-gray rounded-lg lg:block" />
      )}
      <div className="max-w-[900px]">
        <h4 className="text-xl font-semibold leading-normal">{title}</h4>
        <p className="font-normal text-gray-dark-2 pb-[9px] leading-normal">
          enviado há {sentAt} horas por{" "}
          <span className="text-primary">{userName}</span>
        </p>
        <p className="font-bold leading-normal">{domain}</p>
      </div>
    </a>
  );
};

export default Post;
