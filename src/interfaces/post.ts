
export interface IComment {
  id: number;
  text: string;
}

export interface IPost {
  title: string;
  body: string;
  date: number;
  author: {
    name: string;
    surname: string;
  };
  id: number;
  comments: Array<IComment>;
}

export interface IPostsProp {
  items: Array<IPost>;
}
export interface ICurrentPostProp {
  item?: IPost;
}

export type mainPageProp = {
  children: React.ReactNode;
};
