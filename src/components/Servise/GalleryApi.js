import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '34125445-1c9917b2e51e42d8e5ff23e92';

export const getSearchGalleryApi = (request, page) => {
  return axios
    .get(`/?per_page=12&`, {
      params: {
        key: API_KEY,
        q: request,
        imageType: 'photo',
        orientation: 'horizontal',
        page,
      },
    })
    .then(r => r.data);
};
