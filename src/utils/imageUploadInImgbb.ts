/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { errorMessage } from "./sonarToastMessage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const imageUploadIntoImgbb = (formData: any) => {
  const url = `https://api.imgbb.com/1/upload?key=6172cdc3d7968fb2194fbc4fc29a6a67`;

  const image = fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imageData) => {
      return imageData.data.display_url;
    })
    .catch(() => {
      errorMessage("Image not upload please try again", 3000);
    });

  return image;
};
