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

  /**
   * Get albums and genres for discovery.
   * 
   * @returns {object} - The data returned from the API.
   */
  static async getDisc() {
    try {
      let res = await this.request(``);
      return res;
    } catch (error) {
      console.error("Error in getDisc:", error);
      throw error; // Propagate the error to the caller
    }
  }

  /**
   * Get playlists for a specific user.
   * 
   * @param {string} user_id - The ID of the user.
   * @returns {object} - The data returned from the API.
   */
  static async getUserPlaylists(user_id) {
    let res = await this.request(`playlists/user/${user_id}`);
    return res;
  }

  /**
   * Get songs by a specific genre.
   * 
   * @param {string} genre - The genre to filter songs by.
   * @returns {object} - The data returned from the API.
   */
  static async getSongsByGenre(genre) {
    let res = await this.request(`songs/genre/${genre}`);
    return res;
  }

  /**
   * Get songs from a specific album.
   * 
   * @param {string} album_id - The ID of the album.
   * @returns {object} - The data returned from the API.
   */
  static async getSongsByAlbum(album_id) {
    let res = await this.request(`songs/album/${album_id}`);
    return res;
  }

  /**
   * Get cover art for a specific album.
   * 
   * @param {string} album_id - The ID of the album.
   * @returns {object} - The data returned from the API.
   */
  static async getAlbumArt(album_id) {
    let res = await this.request(`albums/cover/${album_id}`);
    return res;
  }

   /**
   * Get artist for a specific artist_id.
   * 
   * @param {string} artist_id - The ID of the artist.
   * @returns {object} - The data returned from the API.
   */
  static async getArtistById(artist_id) {
    let res = await this.request(`artists/${artist_id}`);
    return res;
  }



}


export default TempoApi;
