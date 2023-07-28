export type Posts = {
  children: [
    {
      data: {
        id: string;
        author: string;
        title: string;
        url: string;
        preview?: {
          images: [
            {
              source: {
                url: string;
              };
            },
          ];
        };
      };
    },
  ];
};
