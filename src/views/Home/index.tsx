import React from "react";

export default () => {
  return (
    <>
      <h1>Home</h1>
      <picture>
        <source srcSet="/images/photo-small.webp" media="(max-width: 640px)" />
        <source srcSet="/images/photo-medium.webp" media="(max-width: 960px)" />
        <source srcSet="/images/photo-large.webp" media="(min-width: 0px)" />
        <img src="/images/photo.webp" alt="Photo" />
      </picture>
    </>
  );
};
