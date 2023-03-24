import React, { forwardRef } from "react";

const MenuSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="menu-section">
      MenuSection
    </section>
  );
});

export default MenuSection;
