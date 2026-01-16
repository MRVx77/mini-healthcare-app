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
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    const lowerQuestion = question.toLowerCase();

    // 1️⃣ Rule-based match
    const matchedFaq = faqs.find((faq) =>
      faq.keywords.some((word) => lowerQuestion.includes(word))
    );

    if (matchedFaq) {
      setTimeout(() => {
        setResponse(matchedFaq.answer);
        setLoading(false);
      }, 600); // small delay for AI feel
      return;
    }

    // 2️⃣ AI fallback
    try {
      const res = await fetch("http://localhost:5000/api/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setResponse(data.answer || "AI could not generate a response.");
    } catch (error) {
      console.log(error);

      setResponse(
        "Thank you for your question. Our team will respond shortly."
      );
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-600 text-xl">🤖</span>
        <h2 className="text-xl font-semibold text-gray-800">
          AI Healthcare Assistant
        </h2>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Ask about healthcare support, emergencies, cost..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Button */}
      <button
        onClick={handleAsk}
        disabled={!question.trim() || loading}
        className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? "AI is thinking..." : "Ask AI"}
      </button>

      {/* Response */}
      {response && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
          <p className="text-sm text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIFaq;
