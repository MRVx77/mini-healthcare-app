import SupportForm from "./components/SupportForm";
import AIFaq from "./components/AIFaq";

const App = () => {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Mini Healthcare Support
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Helping NGOs respond faster with smart automation
          </p>
        </div>

        <SupportForm />

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500 font-medium">
            AI Assistant
          </span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <AIFaq />
      </div>
    </div>
  );
};

export default App;
