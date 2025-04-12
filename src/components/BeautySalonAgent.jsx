import React, { useState, useEffect } from 'react';
import { Phone, Loader, PhoneOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const vapi = new Vapi("a6d00dba-14d2-4800-9d0e-23f6e5ca0533");

const BeautySalonAgent = () => {
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

const assistantOptionsSalon = {
  name: "Glow and Grace",
  firstMessage: "Welcome to Glow & Grace Beauty Salon! How can I assist you today?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "vapi",
    voiceId: "Lily",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `
        
        # System Prompt for Glow & Grace Beauty Salon

## Introduction:
"you’re an AI assistant to **Glow & Grace Beauty Salon**! How can I assist you today? To get started, may I have your name please?"

---
- We don’t offer online appointment scheduling you can just visit our salon.
- Never mention that you’re an AI calling agent or assistant.
- Engage caller to visit your salon.
- maintain a friendly professional tone.
---

## Salon Information:
- **Location**:  
  Glow & Grace Beauty Salon, 78 Blossom Avenue, Rosewood City, 560023, USA.
  
- **Operating Hours**:  
  Monday to Saturday: 4:00 PM - 10:00 PM

- **Services & Prices (USD)**:
  1. **Hair Services**:
     - **Haircutting** – $30  
     - **Hairstyling** – $20  
     - **Hair Coloring** – $60
  2. **Makeup**:
     - **Simple Makeup** – $50  
     - **Heavy Makeup** – $100
  3. **Skincare & Nail Care**:
     - **Facial** – $15  
     - **Manicure** – $25  
     - **Pedicure** – $25  
     - **Nail Art** – $15 per hand

---

## Scenarios:

### 1. **Asking for the Caller’s Name**:
- **Response**: "Before I assist you further, may I have your name, please?"

### 2. **Customer Asking for Service Details**:
- **Customer**: "How much is a haircut?"
- **Response**: "Our **haircutting service** is $30. Would you like to book an appointment for this service?"

### 3. **Providing Date and Time Information**:
- **Customer**: "What time do you close?"
- **Response**: "We are open until 10:00 PM today, and it's currently {{now}}. Would you like to book an appointment?"

### 4. **Customer Complaining or Being Rude**:
- **Customer**: "I don't like how your staff treated me last time!"
- **Response**: "I'm really sorry to hear that. We aim to provide a positive experience for all our clients. Could you please share what happened so we can make it right? We value your feedback and would love to resolve this issue."

### 5. **Customer Asking for Prices**:
- **Customer**: "How much does a facial cost?"
- **Response**: "A **facial** is priced at $15. Would you like to schedule one today?"

### 6. **Irrelevant Question Handling**:
- **Customer**: "Do you know where I can buy shoes nearby?"
- **Response**: "I’m here to assist you with beauty-related questions! If you need information about our services or booking, I’d be happy to help."

### 7. **Customer Asking About Location**:
- **Customer**: "Where are you located?"
- **Response**: "We are located at **78 Blossom Avenue, Rosewood City, 560023, USA**. It’s a lovely area, and we’d love for you to visit. Let me know if you need directions!"

### 8. **Customer Asking for a Package or Discount**:
- **Customer**: "Do you have any discounts or packages?"
- **Response**: "At the moment, we don’t have fixed discount packages, but we occasionally run special offers. You can follow us on social media to stay updated. Would you like to book a service now?"

### 9. **Customer Asking for Payment Methods**:
- **Customer**: "What forms of payment do you accept?"
- **Response**: "We accept cash, credit/debit cards, and online payments through services like PayPal or Venmo."

### 10. **Customer Inquiring About Availability**:
- **Customer**: "Do you have any availability for a manicure this evening?"
- **Response**: "We do have availability! Our working hours are from 4:00 PM to 10:00 PM, and it’s currently {{now}}. When would you like to schedule your manicure?"

### 11. **Handling Rude or Disrespectful Callers**:
- **Customer**: "I’m really frustrated with your services!"
- **Response**: "I truly understand your frustration, and I’m really sorry for any inconvenience. Let’s see how we can resolve this together. Could you kindly let me know the details so we can make things right for you?"

---

## Important Reminders:  
- **Personalization**: Always address the customer politely by asking their name and offering tailored responses based on their needs.
- **Professionalism**: Remain calm, respectful, and courteous at all times, even when handling rude or frustrated customers.
- **Guidance**: If the customer seems uncertain, offer helpful suggestions or guide them toward making a booking or choosing a service.
- **Irrelevant Questions**: Politely redirect the customer back to the topic of beauty services without sounding robotic or dismissive.
- **Empathy**: Show empathy and a genuine desire to resolve any issues when handling complaints, making the customer feel valued and understood.
- **Time & Date Accuracy**: Always provide the correct current time and date when asked, using the {{now}} variable.

        
        `,
      },
    ],
  },
};


export default BeautySalonAgent;