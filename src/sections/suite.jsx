"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Suite = () => {
  const items = [
    "Business Alignment",
    "Data Readiness",
    "Drift Mitigation",
    "Scalability",
    "Security & Compliance",
    "Ethical AI",
    "Performance Optimization",
    "Integration Readiness",
    "Explainability & Transparency",
    "Failsafe Mechanisms",
    "Human Oversight",
    "Cost Efficiency",
  ];

  const cards = [
    { 
      title: "Custom AI Development", 
      description: "We build tailored AI solutions to meet your business needs, leveraging advanced algorithms and deep learning techniques.",
      points: ["Bespoke AI models", "Seamless system integration", "Optimized for performance"],
      imageUrl: "/assest/download.jpeg" 
    },
    { 
      title: "AI Game Development", 
      description: "Transform gaming with AI-powered NPCs, procedural content generation, and adaptive gameplay mechanics.",
      points: ["AI-driven NPC behaviors", "Enhanced player experiences", "Real-time adaptive AI"],
      imageUrl: "/assest/deepL.jpeg" 
    },
    { 
      title: "AI Chatbot Development", 
      description: "Enhance customer interactions with AI-driven chatbots that understand and respond intelligently.",
      points: ["Conversational AI", "Multi-channel integration", "Personalized responses"],
      imageUrl: "/assest/download.jpeg" 
    },
    { 
      title: "Custom ML Development", 
      description: "Tailored machine learning solutions for data-driven decision-making and predictive analytics.",
      points: ["Scalable ML models", "Data-driven automation", "Continuous learning capabilities"],
      imageUrl: "/assest/deepL.jpeg" 
    },
    { 
      title: "AI Software Development", 
      description: "Develop AI-powered software solutions that streamline operations and boost efficiency.",
      points: ["Custom AI applications", "Seamless workflow automation", "Cloud-based AI solutions"],
      imageUrl: "/next.svg" 
    },
    { 
      title: "Predictive Analytics", 
      description: "Utilize AI to forecast trends, optimize strategies, and drive smarter business decisions.",
      points: ["Data pattern recognition", "Market trend analysis", "Proactive decision-making"],
      imageUrl: "/assest/deepL.jpeg" 
    },
    { 
      title: "Deep Learning Services", 
      description: "Implement cutting-edge deep learning solutions for image recognition, NLP, and AI automation.",
      points: ["Advanced neural networks", "AI-driven insights", "Automated feature extraction"],
      imageUrl: "/assest/download.jpeg" 
    },
    { 
      title: "AI Consultancy Services", 
      description: "Expert AI consulting to help businesses integrate and scale AI-powered solutions effectively.",
      points: ["Strategic AI planning", "Enterprise AI adoption", "Ongoing support & optimization"],
      imageUrl: "/assest/deepL.jpeg" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div>
    <div className="relative flex flex-col items-center h-screen bg-rose-50 overflow-hidden py-10">
      <h2 className="text-black text-3xl font-bold mb-6">Our AI Service Suite</h2>
      <div className="relative w-full max-w-3xl h-[480px] flex justify-center items-center">
        {cards.map((card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length;
          let scale = offset === 0 ? 1 : 0.85;
          let opacity = Math.abs(offset) > 2 ? 0 : 1;
          let xTranslate = (offset - (offset > cards.length / 2 ? cards.length : 0)) * 120;

          return (
            <motion.div
              key={index}
              className="absolute w-80 h-[420px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ x: xTranslate, scale, opacity }}
              animate={{ x: xTranslate, scale, opacity }}
              transition={{ duration: 0.5 }}
              style={{ zIndex: offset === 0 ? 10 : 5 }}
            >
              <img src={card.imageUrl} alt={card.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
              <ul className="mt-3 text-xs text-gray-600 text-left list-disc pl-5">
                {card.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <button onClick={goToPrevious} className="absolute left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
        ◀
      </button>
      <button onClick={goToNext} className="absolute right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
        ▶
      </button>
    </div>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6 text-black" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
    <h2 className="text-4xl md:text-5xl font-bold text-center">
      Ensuring <span className="text-red-500">AI Excellence</span>
    </h2>
    <p className="text-lg md:text-xl text-center mt-2 text-red-400">
      With Our Comprehensive Checklist
    </p>
    
    <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-3xl">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-800/80 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <span className="text-red-500 text-lg mr-2">✔</span> {item}
        </div>
      ))}
    </div>
  </div>

  <div class="bg-indigo-50 p-8">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">High-Impact Use Cases of Our AI Software Development Services</h2>
    <p class="text-lg text-gray-600 mb-8">
      Explore how our AI software development services are transforming industries and everyday life. From autonomous systems to AI-driven decision-making, our solutions drive innovation, efficiency, and groundbreaking discoveries at scale.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">1. AI-Augmented Decision-Making</h3>
        <p class="text-gray-600">
          Empower businesses, governments, and individuals with AI-driven insights that enhance complex decision-making in areas like finance, human resources, healthcare, and policy-making.
        </p>
      </div>

      <div class="bg-rose-50 rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">2. Autonomous & Self-Learning Systems</h3>
        <p class="text-gray-600">
          Enable AI-driven automation in critical sectors, from self-healing IT infrastructures to autonomous vehicles and robotics, revolutionizing how we work and live.
        </p>
      </div>

      <div class="bg-rose-50 rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">3. Agentic AI for Autonomous Problem-Solving</h3>
        <p class="text-gray-600">
          Deploy AI agents that independently analyze data, make decisions, and take real-time actions, enabling adaptability in dynamic environments like cybersecurity, operations, and customer service.
        </p>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">4. AI for Scientific Discovery & Innovation</h3>
        <p class="text-gray-600">
          Accelerate breakthroughs in drug discovery, climate modeling, and space exploration by leveraging AI to analyze massive datasets and uncover hidden patterns.
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default Suite;