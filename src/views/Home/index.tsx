import React from "react";

export default () => {
  return (
    <div className="columns-1 text-center">
      <picture className="w-full">
        <source srcSet="/images/photo-small.webp" media="(max-width: 640px)" />
        <source srcSet="/images/photo-medium.webp" media="(max-width: 960px)" />
        <source srcSet="/images/photo-large.webp" media="(min-width: 0px)" />
        <img
          src="/images/photo.webp"
          alt="Photo"
          className="w-1/4 rounded-full shadow-xl mx-auto"
        />
      </picture>
      <h1 className="text-6xl	font-bold mx-auto">Charity concerts lineup</h1>
      <h3>Events 🎸</h3>
    </div>
  );
};
