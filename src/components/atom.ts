import { atom, selector } from 'recoil';
import { TodoType } from './type';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [],
});
