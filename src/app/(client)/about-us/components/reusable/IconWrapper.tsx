import React from "react";

interface IconWrapperProps {
  icon: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => (
  <div className="w-8 h-8 text-orange-500 mx-auto mb-3">{icon}</div>
);

export default IconWrapper;
