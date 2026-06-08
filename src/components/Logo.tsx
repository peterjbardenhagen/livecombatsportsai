"use client";

import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ size = "md", variant = "full", className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-xs" },
    md: { icon: 40, text: "text-sm" },
    lg: { icon: 56, text: "text-base" },
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background - Split green and gold */}
        <rect x="0" y="0" width="28" height="56" fill="#1A6B1A" rx="4" />
        <rect x="28" y="0" width="28" height="56" fill="#E8A020" rx="4" />

        {/* Kickboxer silhouette - dynamic fighting pose */}
        <g transform="translate(28, 28)">
          {/* Head */}
          <circle cx="-2" cy="-12" r="5" fill="white" />

          {/* Body */}
          <path
            d="M -2 -6 L 0 4"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Right arm raised (punching) */}
          <path
            d="M 1 -3 L 8 -8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left arm down */}
          <path
            d="M -3 -2 L -6 2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left leg up (kick position) */}
          <path
            d="M 0 4 L -8 12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Right leg */}
          <path
            d="M 0 4 L 4 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Text Logo */}
      {variant === "full" && (
        <div className={`flex items-baseline font-black tracking-tighter ${textSize}`}>
          <span className="text-white">LIVE</span>
          <span className="text-amber-500" style={{ color: "#E8A020" }}>
            COMBAT
          </span>
          <span className="text-white">SPORTS</span>
        </div>
      )}
    </div>
  );
}
