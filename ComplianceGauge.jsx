import React from 'react';

export default function ComplianceGauge({ value }) {
  // Calculate the position of the gauge needle
  const gaugeValue = Math.min(Math.max(value, 0), 100);
  const rotation = (gaugeValue / 100) * 180 - 90;
  
  // Determine gauge color based on value
  const getGaugeColor = (val) => {
    if (val >= 90) return '#22c55e'; // green
    if (val >= 75) return '#3b82f6'; // blue
    if (val >= 60) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };
  
  const gaugeColor = getGaugeColor(gaugeValue);

  return (
    <div className="w-32 h-32 relative">
      {/* Gauge background */}
      <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)' }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)' }}></div>
      </div>
      
      {/* Gauge center point */}
      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-slate-700 rounded-full transform -translate-x-1/2"></div>
      
      {/* Gauge needle */}
      <div 
        className="absolute bottom-0 left-1/2 w-1 bg-slate-800 origin-bottom transform -translate-x-1/2 rounded-t-full"
        style={{ 
          height: '50%', 
          transform: `translateX(-50%) rotate(${rotation}deg)` 
        }}
      >
        <div className="w-3 h-3 rounded-full bg-slate-800 absolute -top-1.5 left-1/2 transform -translate-x-1/2"></div>
      </div>
      
      {/* Value indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs font-bold" style={{ color: gaugeColor }}>{value}%</div>
      </div>
      
      {/* Scale markers */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-1 h-3 bg-slate-400 transform -rotate-90"></div>
        <div className="absolute bottom-0 left-1/4 w-1 h-2 bg-slate-300 transform -rotate-45"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-3 bg-slate-400 transform translate-x-0"></div>
        <div className="absolute bottom-0 left-3/4 w-1 h-2 bg-slate-300 transform rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-1 h-3 bg-slate-400 transform rotate-90"></div>
      </div>
    </div>
  );
}
