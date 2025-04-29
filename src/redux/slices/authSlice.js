import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { showToast } from "../../utils/toast";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// Initial state
const initialState = {
  user: user || null,
  isAuthenticated: !!localStorage.getItem("token"),
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return await authService.login(credentials);
    } catch (error) {
      showToast.error(error.response?.data?.message || "Login failed");
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
  showToast.success("Logged out successfully");
});

// Register business
export const registerBusiness = createAsyncThunk(
  "auth/registerBusiness",
  async (businessData, { rejectWithValue }) => {
    try {
      return await authService.registerBusiness(businessData);
    } catch (error) {
      showToast.error(
        error.response?.data?.message || "Business registration failed"
      );
      return rejectWithValue(
        error.response?.data || "Business registration failed"
      );
    }
  }
);

// Register team member
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      showToast.error(error.response?.data?.message || "Registration failed");
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

// Forgot password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      return await authService.forgotPassword(email);
    } catch (error) {
      showToast.error(
        error.response?.data?.message || "Password reset request failed"
      );
      return rejectWithValue(
        error.response?.data || "Password reset request failed"
      );
    }
  }
);

// Reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      return await authService.resetPassword(passwordData);
    } catch (error) {
      showToast.error(error.response?.data?.message || "Password reset failed");
      return rejectWithValue(error.response?.data || "Password reset failed");
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      authService.logout();
      showToast.success("Logged out successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = "Login successful";
        showToast.success("Login successful");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      })
      // Register business cases
      .addCase(registerBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Business registration successful";
        showToast.success("Business registration successful");
      })
      .addCase(registerBusiness.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Register team member cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Registration successful";
        showToast.success("Registration successful");
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Forgot password cases
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Password reset email sent";
        showToast.success("Password reset email sent");
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Reset password cases
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Password reset successful";
        showToast.success("Password reset successful");
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetAuthState, logoutUser } = authSlice.actions;
export default authSlice.reducer;
