import { baseUrl } from "./constants";

export const removeContent = async (contentID, endpoint) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: contentID }),
    });
    if (!response.ok) {
      console.log("remove failed!");
      return;
    }
    const data = await response.json();
    if (data.message === "CONTENT_DELETED") {
      return { children: "Successfully deleted", isError: false };
    } else if (data.message === "TRY_AGAIN") {
      return {
        children: "Something happend, please try again.",
        isError: true,
      };
    } else return { children: "Data in not valid!", isError: true };
  } catch (error) {}
};
