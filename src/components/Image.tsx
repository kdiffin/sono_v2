import React, { useState } from "react";

const ImageCustom = ({
  src,
  alt,
  className,
}: {
  src?: string;
  alt?: string;
  className?: string;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError || !src ? "/placeholder.svg" : src}
      alt={alt ?? "imgalt"}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default ImageCustom;
