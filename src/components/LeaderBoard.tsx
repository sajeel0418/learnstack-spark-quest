
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Medal, 
  Trophy, 
  Users, 
  Calendar, 
  ThumbsUp, 
  Award,
  ChevronUp,
  ChevronDown
} from "lucide-react";

// Sample data for the leaderboard
const leaderboardData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 2890,
    badges: 15,
    answers: 43,
    upvotes: 284,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 2710,
    badges: 12,
    answers: 38,
    upvotes: 245,
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 2580,
    badges: 14,
    answers: 36,
    upvotes: 231,
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 2340,
    badges: 10,
    answers: 29,
    upvotes: 187,
  },
  {
    id: 5,
    name: "Olivia Martinez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 2120,
    badges: 8,
    answers: 26,
    upvotes: 174,
  },
  {
    id: 6,
    name: "Daniel Lee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 1980,
    badges: 7,
    answers: 24,
    upvotes: 158,
  },
  {
    id: 7,
    name: "Emma Taylor",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 1870,
    badges: 6,
    answers: 21,
    upvotes: 143,
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 1760,
    badges: 5,
    answers: 19,
    upvotes: 136,
  },
  {
    id: 9,
    name: "Sofia Rodriguez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 1650,
    badges: 5,
    answers: 17,
    upvotes: 124,
  },
  {
    id: 10,
    name: "Lucas Kim",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 1520,
    badges: 4,
    answers: 16,
    upvotes: 112,
  }
];

// Weekly leaders data (simplified version of main data)
const weeklyLeaders = [
  {
    id: 3,
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 450,
    badges: 3,
    answers: 8,
    upvotes: 54,
  },
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 380,
    badges: 2,
    answers: 6,
    upvotes: 42,
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    points: 370,
    badges: 2,
    answers: 5,
    upvotes: 38,
  },
  // ... continued
];

type SortField = "points" | "badges" | "answers" | "upvotes";

export function LeaderBoard() {
  const [sortBy, setSortBy] = useState<SortField>("points");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  
  const toggleSort = (field: SortField) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("desc");
    }
  };
  
  const getSortIcon = (field: SortField) => {
    if (sortBy !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  const sortedLeaderboard = (data: typeof leaderboardData) => {
    return [...data].sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      return sortDirection === "asc" ? valA - valB : valB - valA;
    });
  };

  const renderLeaderboard = (data: typeof leaderboardData, showRank: boolean = true) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 text-xs uppercase tracking-wider">
          <tr>
            {showRank && <th className="px-4 py-3 text-left">Rank</th>}
            <th className="px-4 py-3 text-left">User</th>
            <th className="px-4 py-3 text-right">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-semibold flex items-center"
                onClick={() => toggleSort("points")}
              >
                XP {getSortIcon("points")}
              </Button>
            </th>
            <th className="px-4 py-3 text-right hidden md:table-cell">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-semibold flex items-center"
                onClick={() => toggleSort("badges")}
              >
                Badges {getSortIcon("badges")}
              </Button>
            </th>
            <th className="px-4 py-3 text-right hidden md:table-cell">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-semibold flex items-center"
                onClick={() => toggleSort("answers")}
              >
                Answers {getSortIcon("answers")}
              </Button>
            </th>
            <th className="px-4 py-3 text-right hidden md:table-cell">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs font-semibold flex items-center"
                onClick={() => toggleSort("upvotes")}
              >
                Upvotes {getSortIcon("upvotes")}
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard(data).map((user, index) => (
            <tr 
              key={user.id}
              className={`border-b hover:bg-gray-50 ${index < 3 ? "bg-learnstack-50" : ""}`}
            >
              {showRank && (
                <td className="px-4 py-3">
                  {index === 0 ? (
                    <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-800">
                      <Trophy className="h-3.5 w-3.5" />
                    </div>
                  ) : index === 1 ? (
                    <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-gray-800">
                      <Trophy className="h-3.5 w-3.5" />
                    </div>
                  ) : index === 2 ? (
                    <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-800">
                      <Trophy className="h-3.5 w-3.5" />
                    </div>
                  ) : (
                    <span className="font-medium text-gray-600">{index + 1}</span>
                  )}
                </td>
              )}
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-3">
                    <img src={user.avatar} alt={user.name} />
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <Badge className="bg-learnstack-100 text-learnstack-800">
                  {user.points} XP
                </Badge>
              </td>
              <td className="px-4 py-3 text-right hidden md:table-cell">
                <div className="flex items-center justify-end">
                  <Award className="w-4 h-4 text-amber-600 mr-1" />
                  {user.badges}
                </div>
              </td>
              <td className="px-4 py-3 text-right hidden md:table-cell">
                {user.answers}
              </td>
              <td className="px-4 py-3 text-right hidden md:table-cell">
                {user.upvotes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <Medal className="w-6 h-6 mr-2 text-learnstack-600" />
          Leaderboard
        </h2>
      </div>

      <Tabs defaultValue="all-time" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="all-time" className="flex items-center">
            <Trophy className="w-4 h-4 mr-2" />
            All-Time Leaders
          </TabsTrigger>
          <TabsTrigger value="weekly" className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Weekly Leaders
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all-time" className="learnstack-card p-0 overflow-hidden">
          {renderLeaderboard(leaderboardData)}
        </TabsContent>
        
        <TabsContent value="weekly" className="learnstack-card p-0 overflow-hidden">
          {renderLeaderboard(weeklyLeaders)}
        </TabsContent>
      </Tabs>

      <div className="p-4 bg-learnstack-50 rounded-lg border border-learnstack-100">
        <h3 className="font-semibold mb-2 flex items-center">
          <Users className="w-5 h-5 mr-1.5 text-learnstack-600" />
          How to Earn Points
        </h3>
        <ul className="space-y-1.5 text-sm">
          <li className="flex items-center">
            <ThumbsUp className="h-3.5 w-3.5 mr-1.5 text-learnstack-600" />
            <span>Answer upvoted: +10 XP</span>
          </li>
          <li className="flex items-center">
            <Award className="h-3.5 w-3.5 mr-1.5 text-learnstack-600" />
            <span>Answer accepted: +15 XP</span>
          </li>
          <li className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-learnstack-600" />
            <span>Daily login streak: +5 XP</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeaderBoard;
