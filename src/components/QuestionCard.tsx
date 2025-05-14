
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  votes: number;
  answers: number;
  tags: string[];
  createdAt: string;
  isAnswered?: boolean;
}

export function QuestionCard({
  id,
  title,
  content,
  author,
  votes,
  answers,
  tags,
  createdAt,
  isAnswered = false,
}: QuestionCardProps) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleVote = (direction: "up" | "down") => {
    if (userVote === direction) {
      // Cancel vote
      setUserVote(null);
      setCurrentVotes(direction === "up" ? currentVotes - 1 : currentVotes + 1);
    } else {
      // Change vote or vote for first time
      const voteChange = 
        userVote === null ? 1 : 2; // Either +1 for new vote or +2 for changing direction
      
      setUserVote(direction);
      setCurrentVotes(
        direction === "up" 
          ? currentVotes + voteChange 
          : currentVotes - voteChange
      );
    }
  };

  return (
    <div className="learnstack-card p-4 md:p-6 hover-scale">
      <div className="flex items-start gap-4">
        {/* Voting */}
        <div className="flex flex-col items-center space-y-1">
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "h-8 w-8 rounded-full p-0",
              userVote === "up" && "text-green-600"
            )}
            onClick={() => handleVote("up")}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <span className={cn(
            "text-sm font-medium",
            currentVotes > votes && "text-green-600",
            currentVotes < votes && "text-red-600"
          )}>
            {currentVotes}
          </span>
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "h-8 w-8 rounded-full p-0",
              userVote === "down" && "text-red-600"
            )}
            onClick={() => handleVote("down")}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="space-y-1">
            <Link to={`/question/${id}`} className="inline-block">
              <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:text-learnstack-700">
                {title}
              </h3>
            </Link>
            <p className="text-gray-600 line-clamp-2">
              {content}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-learnstack-50 text-learnstack-700 hover:bg-learnstack-100">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link
                to={`/question/${id}`}
                className="flex items-center hover:text-gray-900"
              >
                <MessageSquare className="mr-1 h-4 w-4" />
                <span className="font-medium">{answers}</span>
                <span className="ml-1 hidden sm:inline">
                  {answers === 1 ? "answer" : "answers"}
                </span>
              </Link>
              {isAnswered && (
                <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                  Answered
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <Avatar className="h-5 w-5 mr-2">
                <img src={author.avatar} alt={author.name} />
              </Avatar>
              <span>{author.name}</span>
            </div>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
