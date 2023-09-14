import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { IPost } from './post';

export interface IPostsProp {
  items: Array<IPost>;
}


export type IPostsContextType = {
  allPosts: IPost[];
  setAllPosts: Dispatch<SetStateAction<IPost[]>>;
};

const defaultPostsContext = {
  allPosts: [],
  setAllPosts: (posts: IPost[]) => {},
} as IPostsContextType;
export const PostsContext = createContext(defaultPostsContext);

type PostsProviderProps = {
  value: {
    allPosts: IPost[];
    setAllPosts: Dispatch<SetStateAction<IPost[]>>;
  }
  children: React.ReactNode;
};

export default function PostsProvider({value, children }: PostsProviderProps) {

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}