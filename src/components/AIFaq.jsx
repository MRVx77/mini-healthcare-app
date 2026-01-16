import { useState } from "react";

const faqs = [
  {
    keywords: ["help", "support"],
    answer: "You can submit a healthcare support request using the form above.",
  },
  {
    keywords: ["free", "cost", "price"],
    answer: "Yes, this NGO provides healthcare assistance free of cost.",
  },
  {
    keywords: ["emergency", "urgent"],
    answer:
      "For medical emergencies, please contact the nearest hospital immediately.",
  },
  {
    keywords: ["doctor", "appointment"],
    answer:
      "Our volunteers will help you connect with a healthcare professional.",
  },
];

const AIFaq = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    const lowerQuestion = question.toLowerCase();
    const matchedFaq = faqs.find((faq) =>
      faq.keywords.some((word) => lowerQuestion.includes(word))
    );

    if (matchedFaq) {
      setResponse(matchedFaq.answer);
    } else {
      setResponse(
        "Thank you for your question. Our team will get back to you shortly."
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">
        AI Healthcare FAQ Assistant
      </h2>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border rounded-md mb-3"
      />

      <button
        onClick={handleAsk}
        disabled={!question.trim()}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
      >
        Ask AI
      </button>

      {response && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p className="text-sm">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIFaq;
