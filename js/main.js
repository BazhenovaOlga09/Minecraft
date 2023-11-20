$('.slayder').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: `
    <button class="slider__arrow slider__arrow--left">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_31_9)">
<path d="M30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60Z" fill="url(#paint0_linear_31_9)"/>
<path d="M30 55.0001C43.7849 55.0001 55 43.785 55 30.0001C55 16.2152 43.7849 5.00006 30 5.00006C16.2145 5.00006 5 16.2152 5 30.0001C5 43.785 16.2145 55.0001 30 55.0001Z" fill="url(#paint1_linear_31_9)"/>
<path opacity="0.3" d="M17.9917 30.9375L40.1332 45V16.875L17.9917 30.9375Z" fill="black"/>
<path d="M18.9292 30L41.0707 44.0625V15.9375L18.9292 30Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_31_9" x1="60" y1="30" x2="-4.45313e-07" y2="30" gradientUnits="userSpaceOnUse">
<stop class="slayder-color__hover" stop-color="#33B49D"/>
<stop class="slayder-color__hover" offset="1" stop-color="#00A185"/>
</linearGradient>
<linearGradient id="paint1_linear_31_9" x1="55" y1="30.0001" x2="5" y2="30.0001" gradientUnits="userSpaceOnUse">
<stop class="slayder-color__hover" stop-color="#00A185"/>
<stop class="slayder-color__hover" offset="1" stop-color="#33B49D"/>
</linearGradient>
<clipPath id="clip0_31_9">
<rect width="60" height="60" fill="white" transform="matrix(-1 0 0 1 60 0)"/>
</clipPath>
</defs>
</svg>
    </button>
    `,
    nextArrow: `
    <button class="slider__arrow slider__arrow--right">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_31_16)">
<path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#paint0_linear_31_16)"/>
<path d="M30 55.0001C16.2151 55.0001 5 43.785 5 30.0001C5 16.2152 16.2151 5.00006 30 5.00006C43.7855 5.00006 55 16.2152 55 30.0001C55 43.785 43.7855 55.0001 30 55.0001Z" fill="url(#paint1_linear_31_16)"/>
<path opacity="0.3" d="M42.0083 30.9375L19.8668 45V16.875L42.0083 30.9375Z" fill="black"/>
<path d="M41.0708 30L18.9293 44.0625V15.9375L41.0708 30Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_31_16" x1="4.45313e-07" y1="30" x2="60" y2="30" gradientUnits="userSpaceOnUse">
<stop class="slayder-color__hover" stop-color="#33B49D"/>
<stop class="slayder-color__hover" offset="1" stop-color="#00A185"/>
</linearGradient>
<linearGradient id="paint1_linear_31_16" x1="5" y1="30.0001" x2="55" y2="30.0001" gradientUnits="userSpaceOnUse">
<stop class="slayder-color__hover" stop-color="#00A185"/>
<stop class="slayder-color__hover" offset="1" stop-color="#33B49D"/>
</linearGradient>
<clipPath id="clip0_31_16">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs>
</svg>
    </button>
    `,
  });
