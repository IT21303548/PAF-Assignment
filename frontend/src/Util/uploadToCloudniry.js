const cloudName = "dyxj7zydp";
const uploadPreset = "kcsjqqh2";

export const uploadToCloudinary = async (file, resourceType) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData.url;
  } catch (error) {
    console.error("Error uploading to Cloudinary: ", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};
