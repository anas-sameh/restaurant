import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Counter({ end, label }) {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
      <div ref={ref} className="text-center text-white">
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>
          {inView ? <CountUp end={end} duration={2} /> : 0}
        </h1>
        <p style={{ fontSize: '18px' }}>{label}</p>
      </div>
    );
  }