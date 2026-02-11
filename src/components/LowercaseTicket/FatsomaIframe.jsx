import React from "react";

const FatsomaIframe = () => {
  return (
    <iframe
      src="https://widgets.fatsoma.com/widgets/web/b604fd9d-8c9d-456c-8e09-ebccb95cb010/events"
      title="Fatsoma Events"
      style={{
        width: "100%",
        minHeight: "600px",
        border: "none",
      }}
      loading="lazy"
    />
  );
};

export default FatsomaIframe;
