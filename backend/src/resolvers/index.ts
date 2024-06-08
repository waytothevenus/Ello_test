import { booksData } from "../data/books";

export const resolvers = {
  Query: {
    books: () => booksData,
    booksByTitle: (parent: any, args: any, context: any) => {
      return booksData.filter((book) => book.title.includes(args.title));
    },
  },
};
