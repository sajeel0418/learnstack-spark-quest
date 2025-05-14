
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Award, 
  MessageSquare, 
  ThumbsUp, 
  Star,
  Book,
  Users,
  Medal,
  Clock
} from "lucide-react";

interface UserProfileProps {
  user: {
    name: string;
    avatar: string;
    reputation: number;
    badges: {
      name: string;
      type: "bronze" | "silver" | "gold";
      icon?: React.ReactNode;
      description?: string;
    }[];
    questions: number;
    answers: number;
    upvotes: number;
    joined: string;
    level: number;
    xp: number;
    nextLevel: number;
  };
}

export function UserProfile({ user }: UserProfileProps) {
  const getBadgeClass = (type: string) => {
    switch (type) {
      case "bronze":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "silver":
        return "bg-gray-200 text-gray-800 border-gray-300";
      case "gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-learnstack-100 text-learnstack-800";
    }
  };

  const progressToNextLevel = (user.xp / user.nextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* User Header */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Avatar className="h-20 w-20">
          <img src={user.avatar} alt={user.name} />
        </Avatar>
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
            <Badge variant="outline" className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              Joined {user.joined}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <Users className="mr-1 h-3.5 w-3.5" />
              Level {user.level}
            </Badge>
            <Badge className="bg-learnstack-100 text-learnstack-800 flex items-center">
              <Star className="mr-1 h-3.5 w-3.5" />
              {user.reputation} reputation
            </Badge>
          </div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Level {user.level}</span>
          <span className="text-sm text-gray-500">{user.xp}/{user.nextLevel} XP</span>
        </div>
        <Progress value={progressToNextLevel} className="h-2" />
        <p className="text-xs text-gray-500 mt-2">
          {Math.round(user.nextLevel - user.xp)} XP needed for next level
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
          <MessageSquare className="h-6 w-6 mx-auto mb-2 text-learnstack-600" />
          <h3 className="text-xl font-bold">{user.questions}</h3>
          <p className="text-gray-500 text-sm">Questions</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
          <Book className="h-6 w-6 mx-auto mb-2 text-learnstack-600" />
          <h3 className="text-xl font-bold">{user.answers}</h3>
          <p className="text-gray-500 text-sm">Answers</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
          <ThumbsUp className="h-6 w-6 mx-auto mb-2 text-learnstack-600" />
          <h3 className="text-xl font-bold">{user.upvotes}</h3>
          <p className="text-gray-500 text-sm">Upvotes</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
          <Award className="h-6 w-6 mx-auto mb-2 text-learnstack-600" />
          <h3 className="text-xl font-bold">{user.badges.length}</h3>
          <p className="text-gray-500 text-sm">Badges</p>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="font-semibold text-lg mb-3 flex items-center">
          <Medal className="mr-2 h-5 w-5 text-learnstack-600" />
          Badges Earned
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {user.badges.map((badge, index) => (
            <div 
              key={index}
              className={`flex items-center p-3 rounded-lg border ${getBadgeClass(badge.type)}`}
            >
              {badge.icon || <Award className="h-4 w-4 mr-1.5" />}
              <div>
                <p className="text-sm font-medium">{badge.name}</p>
                {badge.description && (
                  <p className="text-xs opacity-75">{badge.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
