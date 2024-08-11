import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState = null as Todo | null;

export const currentTodoSlice: Slice<Todo | null> = createSlice({
  name: 'currentTodo',
  initialState,
  reducers: {
    setTodo: (_, { payload }: PayloadAction<Todo>) => {
      return { ...payload };
    },
    removeTodo: () => null,
  },
});
