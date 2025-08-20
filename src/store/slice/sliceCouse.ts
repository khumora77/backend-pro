import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

interface Course {
  id: number;
  title: string;
  teacher: string;
}

interface CoursesState {
  items: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const res = await axios.get("http://localhost:3000/courses");
  return res.data;
});

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course: { title: string; teacher: string }) => {
    const res = await axios.post("http://localhost:3000/courses", course);
    return res.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    removeCourseLocal(state, action: PayloadAction<number>) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching courses";
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { removeCourseLocal } = coursesSlice.actions;
export default coursesSlice.reducer;
