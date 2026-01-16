import React from "react";
import SupportForm from "./components/SupportForm";
import AIFaq from "./components/AIFaq";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Mini Healthcare Support App
        </h1>

        <SupportForm />
        <AIFaq />
      </div>
    </div>
  );
};

export default App;
