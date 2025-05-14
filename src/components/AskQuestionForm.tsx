
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  BookOpen,
  SquarePen,
  Tag,
  HelpCircle,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SUBJECTS = [
  { value: "mathematics", label: "Mathematics" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" },
  { value: "computer-science", label: "Computer Science" },
  { value: "history", label: "History" },
  { value: "geography", label: "Geography" },
  { value: "literature", label: "Literature" }
];

export function AskQuestionForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !subject) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Question submitted!",
        description: "Your question has been posted successfully."
      });
      
      // Reset form
      setTitle("");
      setContent("");
      setSubject("");
      setTags("");
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="learnstack-card p-5">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <HelpCircle className="w-6 h-6 mr-2 text-learnstack-600" />
        Ask a Question
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center">
            <SquarePen className="w-4 h-4 mr-1" />
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Be specific and clear with your question"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            Subject <span className="text-red-500">*</span>
          </label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((subject) => (
                <SelectItem key={subject.value} value={subject.value}>
                  {subject.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium flex items-center">
            <Tag className="w-4 h-4 mr-1" />
            Tags
          </label>
          <Input
            placeholder="Add tags separated by commas (e.g., calculus, algebra)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Tags help others find your question
          </p>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Question Details <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Describe your question in detail. Include any steps you've tried or specific areas where you need help."
            className="min-h-[150px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="bg-learnstack-600 hover:bg-learnstack-700"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Submitting..." : "Submit Question"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AskQuestionForm;
