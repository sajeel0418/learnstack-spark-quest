
import { UserProfile } from "@/components/UserProfile";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuestionCard } from "@/components/QuestionCard";
import { FileUploader } from "@/components/FileUploader";
import { BookOpen, MessageSquare, File } from "lucide-react";

const profileData = {
  name: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  reputation: 2890,
  badges: [
    { name: "First Answer", type: "bronze", description: "Answered first question" },
    { name: "Good Answer", type: "silver", description: "Answer score of 25+" },
    { name: "Great Answer", type: "gold", description: "Answer score of 100+" },
    { name: "Curious", type: "bronze", description: "Asked 5 questions" },
    { name: "Math Wizard", type: "silver", description: "10+ answers in mathematics" },
    { name: "Helpful", type: "bronze", description: "Answered 10 questions" }
  ],
  questions: 15,
  answers: 43,
  upvotes: 284,
  joined: "May 2023",
  level: 12,
  xp: 2890,
  nextLevel: 3000
};

// Sample questions by user
const userQuestions = [
  {
    id: "q1",
    title: "How do I solve systems of linear equations with matrices?",
    content: "I'm trying to understand how to use matrices to solve systems of linear equations. I've learned about Gaussian elimination but I'm confused about the row operations. Can someone explain the process step by step?",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 12,
    answers: 3,
    tags: ["mathematics", "linear-algebra", "matrices"],
    createdAt: "2 days ago",
    isAnswered: true
  },
  {
    id: "q2",
    title: "What are the key differences between object-oriented and functional programming paradigms?",
    content: "I'm learning both OOP and functional programming, and I'd like to understand the fundamental differences in philosophy, use cases, and advantages of each approach.",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 8,
    answers: 2,
    tags: ["programming", "computer-science", "functional-programming"],
    createdAt: "1 week ago",
    isAnswered: true
  },
  {
    id: "q3",
    title: "How does photosynthesis work in C4 plants compared to C3 plants?",
    content: "I understand the basic process of photosynthesis, but I'm confused about the differences between C3 and C4 pathways. What evolutionary advantages do C4 plants have in certain environments?",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 5,
    answers: 1,
    tags: ["biology", "photosynthesis", "plants"],
    createdAt: "3 weeks ago"
  }
];

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <UserProfile user={profileData} />

        <div className="mt-8">
          <Tabs defaultValue="questions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="questions" className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Questions
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center">
                <File className="w-4 h-4 mr-2" />
                Document Summaries
              </TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="space-y-4">
              {userQuestions.map((question) => (
                <QuestionCard 
                  key={question.id}
                  id={question.id}
                  title={question.title}
                  content={question.content}
                  author={question.author}
                  votes={question.votes}
                  answers={question.answers}
                  tags={question.tags}
                  createdAt={question.createdAt}
                  isAnswered={question.isAnswered}
                />
              ))}
            </TabsContent>

            <TabsContent value="documents">
              <div className="space-y-6">
                <FileUploader />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Profile;
