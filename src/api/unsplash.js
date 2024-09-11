import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID zmi4ebgs2pAQoTdQgJbRhqqiAbJOjtG0YZTGvPstia4",
  },
});
