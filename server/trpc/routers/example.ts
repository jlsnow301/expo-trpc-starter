import { publicProcedure } from "../trpc";

const getExample = publicProcedure.query(({ ctx }) => {
  return {
    greeting: " from the server",
  };
});

export const exampleRouter = {
  getExample,
};
