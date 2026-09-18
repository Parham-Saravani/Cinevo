import { baseUrl } from "./constants";

export const updateContent = async (contentID, updateData, endpoint) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: contentID, updateData }),
    });
    console.log(response);

    if (!response.ok) {
      return {
        children: "Failed to update content.",
      };
    }
    const data = await response.json();
    console.log(data);

    if (data.message === "UPDATE_SUCCESSFUL") {
      return {
        children: "Content updated successfully.",
        isError: false,
      };
    } else if (data.message === "SOMETHING_HAPPEND") {
      return {
        children: "Something went wrong. Please try again.",
      };
    } else if (data.message === "CONTENT_NOT_FOUND") {
      return {
        children: "Content not found.",
      };
    }

    return {
      children: "Invalid data provided.",
      isError: true,
    };
  } catch (error) {}
};
