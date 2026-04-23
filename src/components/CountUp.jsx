import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ endString, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  // Extract number and suffix from string (e.g. "30,000+" -> number: 30000, suffix: "+")
  const numericString = endString.replace(/[^0-9.]/g, '');
  const endNum = parseFloat(numericString);
  const suffix = endString.replace(/[0-9.,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo) for a smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * endNum));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endNum);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, endNum, duration]);

  const formattedCount = count.toLocaleString() + suffix;

  return <span ref={ref}>{formattedCount}</span>;
};

export default CountUp;
