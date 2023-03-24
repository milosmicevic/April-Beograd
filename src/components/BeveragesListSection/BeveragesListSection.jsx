import React, { forwardRef } from "react";

const BeveragesListSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="beverages-list-section">
      BeveragesListSection
    </section>
  );
});

export default BeveragesListSection;
