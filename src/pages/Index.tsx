
import Navbar from "@/components/Navbar";
import { QuestionCard } from "@/components/QuestionCard";
import { AIAssistant } from "@/components/AIAssistant";
import { FileUploader } from "@/components/FileUploader";
import { 
  Button
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileUp, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Bot, 
  FileBadge,
  PlusCircle
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for questions
const questionData = [
  {
    id: "q1",
    title: "How do I solve systems of linear equations with matrices?",
    content: "I'm trying to understand how to use matrices to solve systems of linear equations. I've learned about Gaussian elimination but I'm confused about the row operations. Can someone explain the process step by step?",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 24,
    answers: 5,
    tags: ["mathematics", "linear-algebra", "matrices"],
    createdAt: "2 hours ago",
    isAnswered: true
  },
  {
    id: "q2",
    title: "What are the key differences between object-oriented and functional programming paradigms?",
    content: "I'm learning both OOP and functional programming, and I'd like to understand the fundamental differences in philosophy, use cases, and advantages of each approach.",
    author: {
      name: "Sophia Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 18,
    answers: 4,
    tags: ["programming", "computer-science", "functional-programming"],
    createdAt: "5 hours ago",
    isAnswered: true
  },
  {
    id: "q3",
    title: "How does photosynthesis work in C4 plants compared to C3 plants?",
    content: "I understand the basic process of photosynthesis, but I'm confused about the differences between C3 and C4 pathways. What evolutionary advantages do C4 plants have in certain environments?",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 15,
    answers: 3,
    tags: ["biology", "photosynthesis", "plants"],
    createdAt: "1 day ago"
  },
  {
    id: "q4",
    title: "What are the implications of quantum computing for cryptography?",
    content: "I've been reading about quantum computers and their potential to break current encryption methods. Can someone explain how quantum algorithms like Shor's might affect cryptography, and what post-quantum cryptography solutions exist?",
    author: {
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 32,
    answers: 7,
    tags: ["quantum-computing", "cryptography", "computer-science"],
    createdAt: "3 days ago",
    isAnswered: true
  },
  {
    id: "q5",
    title: "Deriving the equations for projectile motion with air resistance",
    content: "I'm trying to understand how to derive the equations of motion for a projectile when air resistance is proportional to velocity. What's the approach to solving these differential equations?",
    author: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 12,
    answers: 2,
    tags: ["physics", "differential-equations", "mechanics"],
    createdAt: "4 days ago"
  }
];

const recentQuestions = [
  {
    id: "rq1",
    title: "How do you find the domain and range of composite functions?",
    content: "I'm struggling with determining the domain and range when functions are composed together. Are there any systematic approaches or rules to follow?",
    author: {
      name: "Jamie Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 3,
    answers: 0,
    tags: ["mathematics", "calculus", "functions"],
    createdAt: "15 minutes ago",
    isAnswered: false
  },
  {
    id: "rq2",
    title: "What's the difference between DNA and RNA transcription?",
    content: "I'm confused about the differences between DNA and RNA transcription processes. What are the key enzymes involved and how do they differ?",
    author: {
      name: "Jordan Lee",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 5,
    answers: 1,
    tags: ["biology", "molecular-biology", "genetics"],
    createdAt: "45 minutes ago",
    isAnswered: false
  },
  {
    id: "rq3",
    title: "How do atomic orbitals hybridize in organic chemistry?",
    content: "I'm studying organic chemistry and struggling to understand hybridization of atomic orbitals. How exactly do sp, sp2, and sp3 hybridizations work?",
    author: {
      name: "Taylor Smith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    votes: 7,
    answers: 2,
    tags: ["chemistry", "organic-chemistry", "molecular-structure"],
    createdAt: "1 hour ago",
    isAnswered: false
  }
];

// Update questionData to ensure all items have the isAnswered property
for (const question of questionData) {
  if (question.isAnswered === undefined) {
    question.isAnswered = false;
  }
}

// Update recentQuestions to ensure all items have the isAnswered property
for (const question of recentQuestions) {
  if (question.isAnswered === undefined) {
    question.isAnswered = false;
  }
}

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-learnstack-50">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Learn Together,<br />
                <span className="text-learnstack-700">Grow Together</span>
              </h1>
              <p className="text-xl text-gray-600">
                LearnStack connects students with answers, summaries, and a supportive community to enhance your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/ask">
                  <Button size="lg" className="bg-learnstack-600 hover:bg-learnstack-700">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Ask a Question
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button size="lg" variant="outline">
                    Explore Community
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-md hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-learnstack-600" />
                    Q&A Forum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ask questions, get answers, and help others with their academic problems.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="shadow-md hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-learnstack-600" />
                    AI Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get instant answers to your questions through our AI learning assistant.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="shadow-md hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <FileBadge className="w-5 h-5 mr-2 text-learnstack-600" />
                    Document Summarizer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Upload lecture PDFs and slides to get AI-generated summaries.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="shadow-md hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-learnstack-600" />
                    Learn & Earn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Earn points, badges, and climb the leaderboard as you learn and contribute.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Questions Feed */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Questions</h2>
              <Link to="/ask">
                <Button className="bg-learnstack-600 hover:bg-learnstack-700">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Ask Question
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="trending">
              <TabsList className="mb-4">
                <TabsTrigger value="trending" className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="recent" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="trending" className="space-y-4">
                {questionData.map((question) => (
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
              
              <TabsContent value="recent" className="space-y-4">
                {recentQuestions.map((question) => (
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
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <AIAssistant />
            
            <Card className="shadow-md border-learnstack-100">
              <CardHeader className="bg-learnstack-50 rounded-t-lg">
                <CardTitle className="text-lg flex items-center text-learnstack-800">
                  <FileUp className="mr-2 h-5 w-5 text-learnstack-600" />
                  Summarize Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="mb-4 text-sm text-gray-600">
                  Upload lecture PDFs or slides to get instant AI-generated summaries.
                </p>
                <Link to="/profile">
                  <Button className="w-full bg-learnstack-600 hover:bg-learnstack-700">
                    <FileBadge className="mr-2 h-4 w-4" />
                    Open Summarizer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
