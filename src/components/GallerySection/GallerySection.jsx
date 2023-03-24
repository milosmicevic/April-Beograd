import React, { forwardRef } from "react";

const GallerySection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="gallery-section">
      GallerySection
    </section>
  );
});

export default GallerySection;
