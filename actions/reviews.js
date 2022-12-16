import fetch from "isomorphic-fetch";
import axios from "axios";

export const getGoogleReviews = () => {
  var config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLZPsLTVa4joROXsvvQFhEHc&fields=reviews&key=AIzaSyC7HUsrB2T1x7ztJHCmfAGX4vWpW1AuX4M",
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      var reviews = { reviews: response.data.result.reviews };
      return reviews;
    })
    .catch(function (error) {
      return { error: error };
    });
};
