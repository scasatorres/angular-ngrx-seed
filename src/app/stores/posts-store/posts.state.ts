import { PostModel } from 'src/app/models';

export interface State {
  posts: PostModel[];
  selectedPostId: string;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  posts: [],
  selectedPostId: null,
  isLoading: false,
  error: null
};
