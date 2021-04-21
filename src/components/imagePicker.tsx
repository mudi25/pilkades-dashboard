import React from "react";

interface TImagePicker {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  imageUrl: string;
  id: string;
  width?: number;
  height?: number;
}
const ImagePicker: React.FunctionComponent<TImagePicker> = ({
  onChange,
  imageUrl,
  id,
  width,
  height,
}) => {
  return (
    <div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        onChange={onChange}
        type="file"
        id={id}
      />
      <label htmlFor={id}>
        <img
          alt={id}
          src={
            imageUrl === "" ? process.env.REACT_APP_NOT_FOUND_IMAGE : imageUrl
          }
          width={width ? width : 50}
          height={height ? height : 50}
        />
      </label>
    </div>
  );
};
export default ImagePicker;
