import { rest } from "msw";

export const handlers = [
  rest.get("https://www.reddit.com/r/reactjs/hot.json", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        children: [
          {
            data: {
              id: "14q4jjj",
              author: "acemarke",
              title: "Beginner's Thread / Easy Questions (July 2023)",
              url: "https://www.reddit.com/r/reactjs/comments/14q4jjj/beginners_thread_easy_questions_july_2023/",
              created_utc: 1688444207,
            },
          },
        ],
      }),
    );
  }),
];
