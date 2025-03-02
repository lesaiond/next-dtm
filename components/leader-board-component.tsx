import React, { useState } from "react";
import { Trophy, Medal, Crown, ChevronUp, ChevronDown, User } from "lucide-react";

const LeaderboardItem = ({ rank, name, score, avatar, isCurrentUser }) => {
  // Определяем, является ли позиция призовой
  const isTop3 = rank <= 3;
  
  // Компоненты для призовых мест
  const TopRankIcons = {
    1: <Crown size={24} className="text-yellow-500" />,
    2: <Medal size={24} className="text-gray-400" />,
    3: <Medal size={24} className="text-amber-700" />
  };
  
  // Стили для призовых мест
  const topStyles = {
    1: "bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-400 shadow-yellow-200/50",
    2: "bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 shadow-gray-200/50",
    3: "bg-gradient-to-r from-amber-100 to-amber-200 border-amber-400 shadow-amber-200/50",
  };
  
  // Изменение счета (пример)
  const scoreChange = Math.floor(Math.random() * 3) - 1; // -1, 0, или 1
  
  return (
    <div 
      className={`
        relative flex items-center p-4 mb-3 rounded-lg border transition-all duration-300
        ${isTop3 ? topStyles[rank] : "bg-white/80 border-gray-200"} 
        ${isCurrentUser ? "ring-2 ring-blue-400 ring-offset-2" : ""}
        hover:shadow-lg transform hover:-translate-y-1
      `}
    >
      {/* Ранг */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mr-4">
        {isTop3 ? (
          TopRankIcons[rank]
        ) : (
          <span className="text-gray-700 font-bold">{rank}</span>
        )}
      </div>
      
      {/* Информация о пользователе */}
      <div className="flex items-center flex-1">
        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3 border-2 border-white shadow-md">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full bg-blue-100">
              <User size={20} className="text-blue-500" />
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold text-gray-800 flex items-center">
            {name}
            {isCurrentUser && (
              <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">ВЫ</span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {scoreChange > 0 ? (
              <span className="text-green-500 flex items-center"><ChevronUp size={14} /> Рост</span>
            ) : scoreChange < 0 ? (
              <span className="text-red-500 flex items-center"><ChevronDown size={14} /> Падение</span>
            ) : (
              <span className="text-gray-400">Без изменений</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Очки */}
      <div className="font-bold text-lg">
        {score.toLocaleString()}
        <span className="text-xs text-gray-500 ml-1">pts</span>
      </div>
      
      {/* Декоративный элемент для топ-3 */}
      {isTop3 && (
        <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full border-2 shadow-md"
          style={{ borderColor: rank === 1 ? '#EAB308' : rank === 2 ? '#9CA3AF' : '#B45309' }}>
          <Trophy size={14} className={rank === 1 ? "text-yellow-500" : rank === 2 ? "text-gray-400" : "text-amber-700"} />
        </div>
      )}
    </div>
  );
};

const LeaderboardComponent = () => {
  // Пример данных для лидерборда
  const [users] = useState([
    { id: 1, name: "Александр Петров", score: 9845, avatar: "/api/placeholder/40/40" },
    { id: 2, name: "Мария Иванова", score: 8721, avatar: "/api/placeholder/40/40" },
    { id: 3, name: "Дмитрий Сидоров", score: 7659, avatar: "/api/placeholder/40/40" },
    { id: 4, name: "Елена Смирнова", score: 6543, avatar: "/api/placeholder/40/40" },
    { id: 5, name: "Артём Козлов", score: 5498, avatar: "/api/placeholder/40/40" },
    { id: 6, name: "Ольга Никитина", score: 4322, avatar: "/api/placeholder/40/40" },
    { id: 7, name: "Сергей Морозов", score: 3210, avatar: "/api/placeholder/40/40" },
    { id: 8, name: "Наталья Волкова", score: 2198, avatar: "/api/placeholder/40/40" },
    { id: 9, name: "Игорь Соколов", score: 1876, avatar: "/api/placeholder/40/40" },
    { id: 10, name: "Анна Павлова", score: 965, avatar: "/api/placeholder/40/40" },
  ]);
  
  const currentUserId = 5; // Пример: текущий пользователь
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-indigo-50 rounded-2xl shadow-lg">
      {/* Заголовок */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Таблица лидеров</h2>
          <p className="text-gray-600">Сезон: Февраль 2025</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-sm">
            <span className="font-medium">Обновлено:</span> сегодня
          </div>
        </div>
      </div>
      
      {/* Подиум для топ-3 */}
      <div className="flex items-end justify-center mb-10 mt-6 relative">
        {/* Второе место */}
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-16 rounded-full border-4 border-gray-300 overflow-hidden bg-white">
            <img src={users[1].avatar} alt={users[1].name} className="w-full h-full object-cover" />
          </div>
          <div className="w-20 h-24 bg-gradient-to-t from-gray-300 to-gray-200 mt-2 flex items-center justify-center rounded-t-lg">
            <Medal size={28} className="text-gray-400" />
          </div>
          <div className="absolute -bottom-8 text-center">
            <div className="font-bold">{users[1].name}</div>
            <div className="text-sm text-gray-600">{users[1].score.toLocaleString()} pts</div>
          </div>
        </div>
        
        {/* Первое место */}
        <div className="flex flex-col items-center mx-4 -mt-12 z-20">
          <div className="relative">
            <Crown size={32} className="text-yellow-500 absolute -top-8 left-1/2 transform -translate-x-1/2" />
            <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden bg-white shadow-xl">
              <img src={users[0].avatar} alt={users[0].name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-24 h-32 bg-gradient-to-t from-yellow-300 to-yellow-200 mt-2 flex items-center justify-center rounded-t-lg">
            <Trophy size={32} className="text-yellow-600" />
          </div>
          <div className="absolute -bottom-8 text-center">
            <div className="font-bold">{users[0].name}</div>
            <div className="text-sm text-gray-600">{users[0].score.toLocaleString()} pts</div>
          </div>
        </div>
        
        {/* Третье место */}
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-16 rounded-full border-4 border-amber-600 overflow-hidden bg-white">
            <img src={users[2].avatar} alt={users[2].name} className="w-full h-full object-cover" />
          </div>
          <div className="w-20 h-20 bg-gradient-to-t from-amber-600 to-amber-500 mt-2 flex items-center justify-center rounded-t-lg">
            <Medal size={28} className="text-amber-800" />
          </div>
          <div className="absolute -bottom-8 text-center">
            <div className="font-bold">{users[2].name}</div>
            <div className="text-sm text-gray-600">{users[2].score.toLocaleString()} pts</div>
          </div>
        </div>
      </div>
      
      {/* Остальные пользователи */}
      <div className="mt-16">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Таблица лидеров</h3>
        <div className="space-y-1">
          {users.slice(3).map((user, index) => (
            <LeaderboardItem
              key={user.id}
              rank={index + 4}
              name={user.name}
              score={user.score}
              avatar={user.avatar}
              isCurrentUser={user.id === currentUserId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardComponent;