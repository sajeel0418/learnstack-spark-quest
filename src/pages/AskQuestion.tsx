
import { AskQuestionForm } from "@/components/AskQuestionForm";
import Navbar from "@/components/Navbar";
import { AIAssistant } from "@/components/AIAssistant";

const AskQuestion = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <AskQuestionForm />
          </div>
          <div>
            <AIAssistant />
          </div>
        </div>
      </div>
    </>
  );
};

export default AskQuestion;
