import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Key", //replace the key with the access key you have got from unsplash api
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export default searchImage;
