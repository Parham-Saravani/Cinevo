import { baseUrl } from "./constants";
import getCookie from "./Cookie/getCookie";
import { upload } from "@imagekit/react";
import Toast from "../Components/Toast/Toast";

export const getUserData = async (profileImageFile) => {
  try {
    const userToken = getCookie("auth-token");

    const response = await fetch(`${baseUrl}/api/user/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token:userToken }),
    });
    if (!response.ok) {
      console.log("try again!");
      return;
    }

    const { username } = await response.json();
    const imagekitParamsResponse = await fetch(
      `${baseUrl}/api/discover/imagekit`,
    );

    if (!imagekitParamsResponse.ok) {
      Toast({ children: "Something happend, please try again." });
      return;
    }

    const { token, expire, signature, publicKey } =
      await imagekitParamsResponse.json();

    const uploadProfileImage = await upload({
      token,
      expire,
      signature,
      file: profileImageFile,
      publicKey,
      fileName: `${username}.png`,
    });
    return uploadProfileImage.url;
  } catch (error) {
    console.log(error);
  }
};
