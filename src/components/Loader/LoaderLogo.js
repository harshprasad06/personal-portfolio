import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="loader"
        width="300"
        height="50"
        viewBox="0 0 300 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FF8C00", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FF0080", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#gradient1)"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fontWeight="bold"
          opacity="0"
        >
          <tspan dy="0" style={{ fontFamily: 'cursive', fontSize: '30px' }}>Harsh Prasad</tspan>
          <tspan dy="0" style={{ fontFamily: 'cursive', fontSize: '30px' }}> &lt;/&gt;</tspan>
          <animate
            attributeName="opacity"
            dur="5s"
            keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
            values="0;0;0;0;0;0;0;0;0;0;1"
            repeatCount="indefinite"
          />
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
