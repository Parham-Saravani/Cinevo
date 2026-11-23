import { baseUrl } from "./constants";
import getCookie from "./Cookie/getCookie";

const takeUserContent = async (endPoint) => {
  const token = getCookie("auth-token");
  try {
    const response = await fetch(`${baseUrl}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
};

export default takeUserContent;
