import axios from "axios";

export const getWeather = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(
      "https://weatherapi-com.p.rapidapi.com/current.json",
      {
        params: { q: `${lat},${lng}` },
        headers: {
          "X-RapidAPI-Key":
            "ce7c016092msh1dbd5efd4bf6bc2p14c007jsnaed82ddf9c09",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
