import { createSlice } from '@reduxjs/toolkit';
import projectConfig from '@/config/project-config';

const footerSlice = createSlice({
  name: 'footer',
  initialState: projectConfig.footer,
  reducers: {
    setFooterText: (state, action) => ({
      ...state,
      text: action.payload,
    }),
  },
});

export const { setFooterText } = footerSlice.actions;
export default footerSlice.reducer;
