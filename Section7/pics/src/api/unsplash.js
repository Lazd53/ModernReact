import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
      Authorization: 'Client-ID e2bd6e790d00cde2b7319edc6126be7572f28b9860537f5197283e64e3fcb438'
    }
  });
