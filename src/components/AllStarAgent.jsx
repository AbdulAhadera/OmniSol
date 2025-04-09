import React, { useState, useEffect } from 'react';
import { Phone, Loader, PhoneOff } from 'lucide-react';
import Vapi from '@vapi-ai/web'; 

const vapi = new Vapi("a6d00dba-14d2-4800-9d0e-23f6e5ca0533"); 

const AllStarAgent = () => {
  const [state, setState] = useState('idle'); 

  const startCall = () => {
    if (state === 'idle') {
      setState('calling');
      vapi.start(assistantOptions);
    } else if (state === 'on-call') {
      endCall();
    } else {
      endCall();
      setState('idle');
    }
  };

  const endCall = () => {
    vapi.stop();
  };

  useEffect(() => {
    vapi.on('call-start', () => {
      setState('connecting');
    });

    vapi.on('call-end', () => {
      setState('idle');
    });

    vapi.on('error', (error) => {
      console.error(error);
      endCall();
      setState('idle');
    });
    vapi.on('call-connected', () => {
      setState('on-call');
    });

    return () => {
      vapi.removeAllListeners(); // Clean up event listeners on component unmount
    };
  }, []);

 
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

  return (
    <div className="cursor-pointer group" onClick={startCall}>
      <div className={`inset-0 rounded-full ${getButtonColor().replace('bg-', 'bg-')}/30`}>
        {(state === 'calling' || state === 'connecting') && (
          <>
            <div className="inset-[-10px] rounded-full bg-white/10 animate-ping-slow"></div>
            <div className="inset-[-5px] rounded-full bg-white/20 animate-ping-slow animation-delay-300"></div>
          </>
        )}
      </div>
      <div className={`flex items-center justify-center rounded-full ${getButtonColor()} w-32 h-32 shadow-lg transition-all duration-300 group-hover:scale-95`}>
        <div className="rounded-full bg-gray-900 w-24 h-24 flex items-center justify-center">
          {getButtonIcon()}
        </div>
      </div>
    </div>
  );
};


const assistantOptions = {
  name: "The Beauty Sanctuary",
  firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a voice assistant for Vappy’s Pizzeria, a pizza shop located on the Internet. Your job is to take the order of customers calling in. ...`, // shortened for brevity
      },
    ],
  },
};

export default AllStarAgent;