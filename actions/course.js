import fetch from "isomorphic-fetch";
import { API } from "../config";

export const getAllCourses = async () => {
  return fetch("/api/course", { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
