import React from "react";

interface IconItemProps {
  icon: React.ReactNode;
}

export default function IconItem({ icon }: IconItemProps) {
  return (
    <div className="w-fit flex items-start bg-accent-purple/10 p-2 text-accent-purple transition-all duration-300">
      {icon}
    </div>
  );
}
