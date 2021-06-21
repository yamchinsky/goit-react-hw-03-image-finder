import axios from "axios";

const api_url = "https://pixabay.com/api/";
const api_key = "21696545-9a06c1dceb645ff071558b926";
const type = "photo";
const orientation = "horizontal";
const per_page = 12;

export const get = (text, page) => {
  return axios.get(
    `${api_url}?key=${api_key}&q=${text}&image_type=${type}&page=${page}&orientation=${orientation}&per_page=${per_page}`
  );
};
export const getNull = () => null;
