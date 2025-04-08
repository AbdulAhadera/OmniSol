import React, { useState, useEffect } from 'react';
import { Phone, Loader, PhoneOff } from 'lucide-react';

const CallButton = () => {
  const [state, setState] = useState('idle'); // idle, calling, connecting, on-call

  // Function to simulate a call
  const handleCall = () => {
    if (state === 'idle') {
      // Start call sequence
      setState('calling');

      // Simulate connecting after 2 seconds
      setTimeout(() => {
        setState('connecting');

        // Simulate connected call after 1.5 seconds
        setTimeout(() => {
          setState('on-call');

          // End call automatically after 5 seconds for demo
          setTimeout(() => {
            setState('idle');
          }, 5000);
        }, 1500);
      }, 2000);
    } else if (state === 'on-call') {
      // End call immediately if already on call
      setState('idle');
    } else {
      // Cancel call if in calling/connecting state
      setState('idle');
    }
  };

  // Determine button color based on state
  const getButtonColor = () => {
    switch (state) {
      case 'idle':
        return 'bg-blue-500';
      case 'calling':
        return 'bg-yellow-500';
      case 'connecting':
        return 'bg-yellow-600';
      case 'on-call':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  // Determine which icon to show based on state
  const getButtonIcon = () => {
    switch (state) {
      case 'idle':
        return <Phone className="w-10 h-10 text-white" />;
      case 'calling':
      case 'connecting':
        return <Loader className="w-10 h-10 text-white animate-spin" />;
      case 'on-call':
        return <PhoneOff className="w-10 h-10 text-white" />;
      default:
        return <Phone className="w-10 h-10 text-white" />;
    }
  };

  // Determine animation class based on state
  const getAnimationClass = () => {
    if (state === 'calling' || state === 'connecting') {
      return 'animate-pulse';
    }
    return '';
  };

  return (

    <div className=" cursor-pointer group" onClick={handleCall}>

      <div className={`inset-0 rounded-full ${getButtonColor().replace('bg-', 'bg-')}/30 ${getAnimationClass()}`}></div>
      {(state === 'calling' || state === 'connecting') && (
        <>
          <div className="inset-[-10px] rounded-full bg-white/10 animate-ping-slow"></div>
          <div className="inset-[-5px] rounded-full bg-white/20 animate-ping-slow animation-delay-300"></div>
        </>
      )}
      <div className={`flex items-center justify-center rounded-full ${getButtonColor()} w-32 h-32 shadow-lg transition-all duration-300 group-hover:scale-95`}>
        <div className="rounded-full bg-gray-900 w-24 h-24 flex items-center justify-center">
          {getButtonIcon()}
        </div>
      </div>
    </div>
  );
};

export default CallButton;