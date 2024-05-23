import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 */
class TempoApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);

      const url = `${BASE_URL}/${endpoint}`;
      const headers = { Authorization: `Bearer ${TempoApi.token}` };
      const params = method === "get" ? data : {};

      try {
          return (await axios({ url, method, data, params, headers })).data;
      } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
      }
  }

  /** Get albums, genres for discover */
  static async getDisc() {
    let res = await this.request(``);
    return res;
  }

  static async getUserPlaylists(user_id) {
      let res = await this.request(`playlists/user/${user_id}`);
      return res;
  }
}


export default TempoApi;
