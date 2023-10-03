import { API_ROOT, API_USER, API_MEDIA, API_POSTS } from "./Config/config";

const request = (endpoint) => {
  return fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + endpoint);
      }
      return response.json();
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

const apiService = {
  getUser: function (baseAddress, userId) {
    const address = baseAddress.replace(/\/$/, '');
    const endpoint = `${address}/${API_ROOT}/${API_USER}/${userId}`;

    return request(endpoint);
  },

  getPosts: function (baseAddress, amount) {
    const address = baseAddress.replace(/\/$/, '');
    const endpoint = `${address}/${API_ROOT}/${API_POSTS}/?per_page=${amount || 5}`;

    return request(endpoint);
  },

  getPostsThumbnails: function (baseAddress, postId) {
    const address = baseAddress.replace(/\/$/, '');
    const endpoint = `${address}/${API_ROOT}/${API_MEDIA}/${postId}`;
    
    return request(endpoint);
  }
};

export default apiService;