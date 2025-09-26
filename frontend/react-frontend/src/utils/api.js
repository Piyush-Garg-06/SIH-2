const API_BASE_URL = 'http://localhost:5000/api'; // Backend server URL

const handleResponse = async (response) => {
  if (!response.ok) {
    // Handle HTTP errors (non-2xx statuses)
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    const error = new Error(errorData.message || 'Something went wrong');
    error.response = response; // Attach the original response for more details
    error.data = errorData; // Attach parsed error data
    throw error;
  }
  return response.json();
};

const api = {
  get: async (url, config = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
    if (token) {
      headers['x-auth-token'] = token;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'GET',
      headers,
      ...config,
    });
    return handleResponse(response);
  },

  post: async (url, data, config = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
      ...config.headers,
    };

    // If data is FormData, fetch will automatically set Content-Type to multipart/form-data
    // Otherwise, default to application/json
    if (!(data instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    if (token) {
      headers['x-auth-token'] = token;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers,
      body: data instanceof FormData ? data : JSON.stringify(data),
      ...config,
    });
    return handleResponse(response);
  },

  // Add put, delete, etc. as needed, following the same pattern
};

// Mimic response interceptor for 401 errors
const originalHandleResponse = api.get; // Store original for re-use if needed
api.get = async (...args) => {
  try {
    return await originalHandleResponse(...args);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    throw error;
  }
};

const originalPost = api.post;
api.post = async (...args) => {
  try {
    return await originalPost(...args);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    throw error;
  }
};


export default api;