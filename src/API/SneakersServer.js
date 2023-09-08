import axios from "axios";
export default class SneakersServer {
  static async getSneakers() {
    try {
      const responce = await axios.get("http://localhost:3000/sneakers");
      const sneakers = await responce.data;
      return sneakers;
    } catch (e) {
      console.log(e);
    }
  }
}
