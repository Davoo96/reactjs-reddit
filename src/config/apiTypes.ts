export type Posts = {
  children: [
    {
      data: {
        id: string;
        author: string;
        title: string;
        url: string;
        created_utc: number;
      };
    },
  ];
};
