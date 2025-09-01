import React from "react";

const ContactLocation = () => {
  return (
    <div className="lg:pt-20 pt-15 h-[600px]">
      <iframe
        src="https://yandex.com/map-widget/v1/?ll=69.257692%2C41.283998&z=17&mode=search&text=Mahmud%20Tarobiy%2029A%20Tashkent"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default ContactLocation;
