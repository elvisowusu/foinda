import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <p className="flex items-center gap-2 text-lg text-gray-600">
    {icon} {text}
  </p>
);

export default ContactInfo;
