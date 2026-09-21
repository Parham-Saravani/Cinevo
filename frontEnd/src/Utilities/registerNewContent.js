import Toast from "../Components/Toast/Toast";
import { baseUrl } from "./constants";
import { uploadImage } from "./uploadImage";

const UploadImagesAndRegisterContent = async (content) => {
  try {
    const poster = await uploadImage(
      content.posterFile,
      content.title.split(" ").join(""),
    );
    if (!poster) {
      console.log(`poster not uploaded`);
      return;
    }

    const banner = await uploadImage(
      content.bannerFile,
      content.title.split(" ").join(""),
    );
    if (!banner) {
      console.log(`banner not uploaded`);
      return;
    }

    // const trailerFile = await uploadImage(content.posterFile)
    const screenshots = await Promise.all(
      content.totalScreenshots.map(async (item, index) => {
        const url = await uploadImage(
          item.file,
          `${content.title.split(" ").join("")} ${index + 1}`,
        );
        return url;
      }),
    );
    content.poster = poster;
    content.banner = banner;
    content.screenshots = screenshots;

    const response = await fetch(`${baseUrl}/api/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      console.log("server error");
      return;
    }

    return await response.json();
  } catch (error) {
    console.log(error);

    Toast({ children: "`Please check your network connection.`" });
  }
};

export default UploadImagesAndRegisterContent;
