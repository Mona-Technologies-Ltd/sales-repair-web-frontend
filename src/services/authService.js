import axios from "axios";

// Create an axios instance with base URL and default headers
const authAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
authAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication services
const authService = {
  // Login user
  login: async (credentials) => {
    const response = await authAPI.post("/auth/login", credentials);
    if (response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  },

  // Register business
  registerBusiness: async (businessData) => {
    const response = await authAPI.post(
      "/auth/register-business",
      businessData
    );
    return response.data;
  },

  // Register team member
  register: async (userData) => {
    const response = await authAPI.post("/auth/register", userData);
    return response.data;
  },

  // Forgot password
  forgotPassword: async (emailData) => {
    // Extract email if it's an object, otherwise use as is
    const emailToSend = emailData.email ? emailData.email : emailData;
    const response = await authAPI.post("/auth/forgot-password", {
      email: emailToSend,
    });
    return response.data;
  },

  // Reset password
  resetPassword: async (passwordData) => {
    const { token, password, confirmPassword } = passwordData;
    const response = await authAPI.post(`/auth/reset-password/${token}`, {
      password,
      confirmPassword,
    });
    return response.data;
  },

  // Get current user from localStorage
  getCurrentUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },
};

export default authService;
