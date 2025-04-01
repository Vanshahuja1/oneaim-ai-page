function Cards() {
  const cards = [
    {
      title: "Data-Driven Insights",
      icon: (
        <svg className="h-10 w-10 text-red-700 transition-transform duration-300 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6M5 20h14a2 2 0 002-2V7a2 2 0 00-.586-1.414l-5-5A2 2 0 0014 0H5a2 2 0 00-2 2v16a2 2 0 002 2z" />
        </svg>
      ),
      bg: "bg-rose-50",
    },
    {
      title: "Adaptive Intelligence",
      icon: (
        <svg className="h-10 w-10 text-red-700 transition-transform duration-300 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M10 20l-4-4 4-4m-4 4v4m0-8v4" />
        </svg>
      ),
      bg: "bg-indigo-50",
    },
    {
      title: "Hyper-Personalization",
      icon: (
        <svg className="h-10 w-10 text-red-700 transition-transform duration-300 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-rose-50",
    },
    {
      title: "Intelligent Automation",
      icon: (
        <svg className="h-10 w-10 text-red-700 transition-transform duration-300 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0m2-2V5a2 2 0 10-4 0v10a2 2 0 114 0m2 4h.01M13 9a2 2 0 104 0V5a2 2 0 10-4 0v4z" />
        </svg>
      ),
      bg: "bg-indigo-50",
    },
    {
      title: "Enhanced Efficiency",
      icon: (
        <svg className="h-10 w-10 text-red-700 transition-transform duration-300 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-rose-50",
    },
    {
      title: "Competitive Edge",
      icon: (
        <svg className="h-10 w-10 text-red-700 transition-transform duration-300 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4H9l4-4 4 4h-3zM4 4h16v2H4zm0 14h16v2H4z" />
        </svg>
      ),
      bg: "bg-indigo-50",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Why AI & Data Matter?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
          The smartest way to work with AI is to approach it with a lot of questions - a lot of questions around where can I apply it and how to get maximum values out of it? Our AI Software Development and AI Consulting Services do exactly the same. And this is why it matters.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-lg p-6 text-center flex flex-col items-center justify-center transition duration-300 hover:shadow-lg`}
          >
            {card.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
