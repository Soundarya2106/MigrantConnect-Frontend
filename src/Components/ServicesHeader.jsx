import React from "react";
import styles from "../DesignFiles/ServicesContainer.module.css";

const ServiceHeader = () => {
  return (
    <header className={styles.servicesHeader}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<svg id="685:3782" layer-name="Services" width="342" height="82" viewBox="0 0 342 82" fill="none" xmlns="http://www.w3.org/2000/svg" class="services-title" style="width: 330px; height: 74px"> <text fill="#404040" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="38" font-weight="800" letter-spacing="0em"><tspan x="87.2803" y="41.8">Services</tspan></text> <g filter="url(#filter0_d_685_3782)">   <path d="M6 66H336" stroke="#404040" stroke-opacity="0.55" stroke-width="3" stroke-linecap="round" shape-rendering="crispEdges"></path> </g> <g filter="url(#filter1_d_685_3782)">   <circle cx="168.5" cy="65.5" r="8.5" fill="#223B6E"></circle> </g> <defs>   <filter id="filter0_d_685_3782" x="0.5" y="64.5" width="341" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>     <feOffset dy="4"></feOffset>     <feGaussianBlur stdDeviation="2"></feGaussianBlur>     <feComposite in2="hardAlpha" operator="out"></feComposite>     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_3782"></feBlend>     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_3782" result="shape"></feBlend>   </filter>   <filter id="filter1_d_685_3782" x="156" y="57" width="25" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>     <feOffset dy="4"></feOffset>     <feGaussianBlur stdDeviation="2"></feGaussianBlur>     <feComposite in2="hardAlpha" operator="out"></feComposite>     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_3782"></feBlend>     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_3782" result="shape"></feBlend>   </filter> </defs> </svg>',
        }}
      />
    </header>
  );
};

export default ServiceHeader;
