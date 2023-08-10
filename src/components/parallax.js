import React, { useEffect } from 'react';

export function ParallaxEffect({className}) {

    const handleMouseMove = (event) => {
        document.querySelectorAll('.parallax-wrap span').forEach((shift) => {
          const position = shift.getAttribute('value');
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;
    
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      };
    
      useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

      const _className = "parallax-wrap " + className

    return (
        <div class="parallax-wrap ">
            <span value="-15"></span>
            <span value="5"></span>
            <span value="30"></span>
            <span value="-5"></span>
            <span value="15"></span>
        </div>
    )
}