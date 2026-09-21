import { baseUrl } from "./constants";
import { upload } from "@imagekit/react";

export const uploadImage = async (currentFile, currentFileName) => {
  try {
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
      file: currentFile,
      publicKey,
      fileName: currentFileName,
    });

    return uploadProfileImage.url;
  } catch (error) {
    return undefined;
  }
};
