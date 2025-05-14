
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Send, ThumbsUp, ThumbsDown, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Please enter a question",
        description: "You need to ask something first!",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    setAnswer("");
    
    // Simulate API call to AI service
    setTimeout(() => {
      // Mock AI response based on the question
      let aiResponse = "";
      if (question.toLowerCase().includes("math") || question.toLowerCase().includes("equation")) {
        aiResponse = "To solve this math problem, you should first identify what type of equation you're dealing with. For algebraic equations, isolate the variable by performing the same operations on both sides. For calculus problems, remember the fundamental rules of differentiation and integration.";
      } else if (question.toLowerCase().includes("history")) {
        aiResponse = "When approaching historical questions, consider the context of the time period, relevant political and social factors, and primary sources that might provide insight. Historical analysis often requires examining multiple perspectives and understanding cause and effect relationships.";
      } else if (question.toLowerCase().includes("programming") || question.toLowerCase().includes("code")) {
        aiResponse = "For programming problems, start by breaking down the task into smaller, manageable steps. Pseudocode can help structure your approach before writing actual code. Remember to consider edge cases and test your solution with different inputs.";
      } else {
        aiResponse = "That's an interesting question! To approach this problem methodically, first identify the key concepts involved. Then gather relevant information from your notes or textbooks. Try to connect this new topic with concepts you already understand, as building these connections helps with learning retention.";
      }
      
      setAnswer(aiResponse);
      setIsLoading(false);
      setShowFeedback(true);
    }, 2000);
  };

  const handleFeedback = (isPositive: boolean) => {
    toast({
      title: isPositive ? "Thank you for your feedback!" : "We'll improve our answers",
      description: isPositive 
        ? "We're glad our AI assistant was helpful." 
        : "We've recorded your feedback to improve our responses.",
    });
    setShowFeedback(false);
  };

  return (
    <Card className="shadow-md border-learnstack-100">
      <CardHeader className="bg-learnstack-50 rounded-t-lg">
        <CardTitle className="text-lg flex items-center text-learnstack-800">
          <Bot className="mr-2 h-5 w-5 text-learnstack-600" />
          AI Learning Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Textarea
              placeholder="Ask any academic question in English or Roman Urdu..."
              className="min-h-[100px] resize-y"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-learnstack-600 hover:bg-learnstack-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Thinking...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Get Answer
                </>
              )}
            </Button>
          </div>
        </form>

        {answer && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100 animate-fade-in">
            <div className="flex items-start gap-3">
              <Bot className="h-5 w-5 text-learnstack-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-gray-800 whitespace-pre-line">{answer}</p>
                
                {showFeedback && (
                  <div className="mt-3 flex items-center justify-end gap-2">
                    <span className="text-sm text-gray-500 mr-2">Was this helpful?</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleFeedback(true)}
                      className="h-8 px-3"
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Yes
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleFeedback(false)}
                      className="h-8 px-3"
                    >
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      No
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default AIAssistant;
