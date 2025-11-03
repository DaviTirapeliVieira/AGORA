import { createSlice } from '@reduxjs/toolkit';
import headerNavigation from '@/config/navigation-config';
import projectConfig from '@/config/project-config';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    title: projectConfig.title,
    navigation: headerNavigation,
  },
  reducers: {
    setTitle: (state, action) => ({
      ...state,
      title: action.payload,
    }),
    addNavItem: (state, action) => ({
      ...state,
      navigation: [...state.navigation, action.payload],
    }),
    removeNavItem: (state, action) => ({
      ...state,
      navigation: state.navigation.filter(item => item.id !== action.payload),
    }),
  },
});

export const { setTitle, addNavItem, removeNavItem } = headerSlice.actions;
export default headerSlice.reducer;
