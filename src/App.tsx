import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  BookOpen, 
  MessageCircle, 
  Gamepad2, 
  Phone,
  Home,
  Plus,
  User,
  Settings,
  Clock,
  Star,
  Send,
  Map,
  Play,
  Brain,
  Smile,
  Shield,
  TrendingUp,
  Award,
  Edit,
  ChevronRight,
  Baby,
  Activity,
  Target,
  Palette,
  Music,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription } from './components/ui/alert';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { Separator } from './components/ui/separator';
import { Progress } from './components/ui/progress';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const timelineEvents = [];

const dailyRoutine = [
  { time: "7:00", activity: "Despertar com música suave 🎵", status: "scheduled", tip: "Use sempre a mesma música" },
  { time: "7:30", activity: "Café da manhã visual 🍎", status: "scheduled", tip: "Monte pratos coloridos e organizados" },
  { time: "9:00", activity: "Atividade de pintura 🎨", status: "scheduled", tip: "Deixe explorar as cores livremente" },
  { time: "10:30", activity: "Tempo de brincar no jardim 🌱", status: "scheduled", tip: "Contato com natureza é relaxante" },
  { time: "12:00", activity: "Almoço estruturado 🥗", status: "scheduled", tip: "Mantenha horário fixo" },
  { time: "14:00", activity: "Descanso com história 📚", status: "scheduled", tip: "Ambiente escuro e silencioso" },
  { time: "16:00", activity: "Lanche e brincadeira livre 🧩", status: "scheduled", tip: "Permita escolhas dentro de opções" }
];

const quickActions = [
  { icon: MessageCircle, label: "Chat", color: "bg-blue-100 text-blue-600", screen: "chat" },
  { icon: Gamepad2, label: "Jogos", color: "bg-green-100 text-green-600", screen: "jogos" },
  { icon: MapPin, label: "Terapias", color: "bg-purple-100 text-purple-600", screen: "terapias" },
  { icon: BookOpen, label: "Guias", color: "bg-pink-100 text-pink-600", screen: "guias" },
];

const featuredGames = [
  { 
    name: "Cores e Formas", 
    icon: "🎨", 
    difficulty: "Fácil", 
    age: "2-5 anos",
    color: "bg-gradient-to-br from-pink-100 to-pink-200"
  },
  { 
    name: "Sons e Letras", 
    icon: "🎵", 
    difficulty: "Médio", 
    age: "4-8 anos",
    color: "bg-gradient-to-br from-blue-100 to-blue-200"
  },
  { 
    name: "Coordenação", 
    icon: "🤹", 
    difficulty: "Fácil", 
    age: "3-7 anos",
    color: "bg-gradient-to-br from-green-100 to-green-200"
  }
];

const communityPosts = [];

const offlineActivities = [
  {
    title: "Pintura Sensorial",
    description: "Use tintas atóxicas misturadas com gel ou espuma de barbear",
    icon: "🎨",
    ageGroup: "2-8 anos",
    difficulty: "Fácil",
    duration: "30-45 min",
    benefits: ["Coordenação motora", "Criatividade", "Relaxamento"],
    materials: ["Tinta atóxica", "Papel grande", "Aventais", "Pincéis grossos"]
  },
  {
    title: "Caixa Sensorial",
    description: "Caixa com diferentes texturas para explorar com as mãos",
    icon: "📦",
    ageGroup: "1-6 anos", 
    difficulty: "Fácil",
    duration: "20-30 min",
    benefits: ["Integração sensorial", "Concentração", "Vocabulário"],
    materials: ["Caixa grande", "Arroz colorido", "Objetos variados", "Pás pequenas"]
  },
  {
    title: "Teatro de Sombras",
    description: "Histórias contadas com sombras na parede usando lanternas",
    icon: "🎭",
    ageGroup: "3-10 anos",
    difficulty: "Médio", 
    duration: "45 min",
    benefits: ["Imaginação", "Comunicação", "Vínculos familiares"],
    materials: ["Lanterna", "Lençol branco", "Objetos para sombra"]
  },
  {
    title: "Jardinagem Adaptada", 
    description: "Plantar sementes em vasos pequenos e acompanhar crescimento",
    icon: "🌱",
    ageGroup: "3-12 anos",
    difficulty: "Fácil",
    duration: "30 min/dia",
    benefits: ["Responsabilidade", "Ciências naturais", "Paciência"],
    materials: ["Vasos pequenos", "Terra", "Sementes", "Regador infantil"]
  },
  {
    title: "Cozinha Divertida",
    description: "Receitas simples que a criança pode ajudar a preparar",
    icon: "👨‍🍳",
    ageGroup: "4-12 anos",
    difficulty: "Médio",
    duration: "60 min", 
    benefits: ["Autonomia", "Sequências lógicas", "Nutrição"],
    materials: ["Ingredientes simples", "Utensílios seguros", "Aventais"]
  }
];

const userProfile = {
  development: {
    currentGoals: [],
    milestones: []
  }
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [emergencyVisible, setEmergencyVisible] = useState(false);

  const EmergencyFloatingButton = () => (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        onClick={() => setEmergencyVisible(!emergencyVisible)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full h-16 w-16 shadow-lg animate-pulse"
        size="icon"
      >
        <Phone className="h-8 w-8" />
      </Button>
      
      {emergencyVisible && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border-2 border-red-200 p-4">
          <div className="text-center mb-4">
            <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg text-red-700 mb-2">Suporte 24h</h3>
            <p className="text-sm text-gray-600">Estamos sempre aqui para você</p>
          </div>
          
          <div className="space-y-3">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl h-12">
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora: (61) 9999-0000
            </Button>
            <Button variant="outline" className="w-full rounded-xl h-12">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat de Emergência
            </Button>
            <div className="text-xs text-center text-gray-500 pt-2 border-t">
              Para emergências médicas: 192 (SAMU)
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const MobileHeader = () => (
    <header className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 pt-12 pb-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-white text-2xl">PARENTY</h1>
            <p className="text-white/80 text-sm">Crescendo juntos com amor</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
          <User className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">0</div>
          <div className="text-xs text-white/80">Dias seguidos</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">0</div>
          <div className="text-xs text-white/80">Atividades</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">0</div>
          <div className="text-xs text-white/80">Marcos alcançados</div>
        </div>
      </div>
    </header>
  );

  const HomeScreen = () => (
    <div className="pb-20">
      <MobileHeader />
      
      <div className="px-4 -mt-4">
        {/* Welcome Message with Photo */}
        <Card className="bg-white rounded-2xl shadow-lg border-0 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1599418175086-598d948cd6ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMGhhcHB5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzU1MjAyNDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Família feliz"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-800">Olá, família! 👋</h3>
                <p className="text-sm text-gray-600">Como está sendo o dia de hoje?</p>
              </div>
            </div>
            <Alert className="bg-blue-50 border-blue-200">
              <Heart className="h-4 w-4 text-blue-500" />
              <AlertDescription className="text-blue-800">
                💙 Dica do dia: Cada criança tem seu próprio ritmo e isso é perfeitamente normal!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white rounded-2xl shadow-lg border-0 mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg mb-4 text-gray-800">Acesso Rápido</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={() => setActiveScreen(action.screen)}
                  variant="ghost"
                  className="h-20 flex-col space-y-2 hover:scale-105 transition-transform"
                >
                  <div className={`${action.color} rounded-2xl p-3`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-gray-700">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Tips from Community */}
        <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-lg border-0 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Zap className="h-5 w-5 text-orange-500" />
              <span>Dicas Práticas da Comunidade</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="bg-white/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-orange-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Aqui você encontrará dicas práticas compartilhadas por outras famílias
              </p>
              <Button
                onClick={() => setActiveScreen('chat')}
                variant="outline"
                className="rounded-xl"
              >
                Explorar Comunidade
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Offline Activities Preview */}
        <Card className="bg-white rounded-2xl shadow-lg border-0 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Palette className="h-5 w-5 text-purple-500" />
              <span>Atividades para Fazer em Casa</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {offlineActivities.slice(0, 2).map((activity, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-gray-800">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>👶 {activity.ageGroup}</span>
                    <span>⏱️ {activity.duration}</span>
                    <span>📊 {activity.difficulty}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={() => setActiveScreen('atividades')}
              variant="outline"
              className="w-full rounded-xl mt-4"
            >
              Ver todas as atividades
            </Button>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="bg-white rounded-2xl shadow-lg border-0 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Timeline de Hoje</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-8">
              <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Adicione compromissos e acompanhe sua rotina
              </p>
              <Button
                onClick={() => setActiveScreen('agenda')}
                variant="outline"
                className="rounded-xl"
              >
                Criar Agenda
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Games with Progress */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Play className="h-5 w-5 text-green-500" />
              <span>Jogos Recomendados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {featuredGames.map((game, index) => (
                <div
                  key={index}
                  className={`${game.color} rounded-xl p-4 flex items-center space-x-4`}
                >
                  <div className="text-3xl">{game.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 mb-1">{game.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{game.difficulty}</Badge>
                      <span className="text-xs text-gray-600">{game.age}</span>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const GamesScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-green-400 to-blue-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Jogos Educacionais</h1>
        <p className="text-white/80 text-sm">Desenvolvidos por especialistas</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Development Progress Overview */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Progresso do Desenvolvimento</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Defina metas de desenvolvimento e acompanhe o progresso
              </p>
              <Button variant="outline" className="rounded-xl">
                Adicionar Metas
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-gray-800 text-lg mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-yellow-600" />
              Conquistas Recentes
            </h3>
            <div className="text-center py-4">
              <p className="text-gray-600 text-sm">
                Registre os marcos alcançados e celebre cada conquista
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Educational Games */}
        {[
          { 
            name: "Comunicação Visual", 
            desc: "Atividades com símbolos e figuras", 
            icon: "👁️", 
            difficulty: "Fácil", 
            age: "3-8 anos", 
            color: "from-pink-100 to-pink-200"
          },
          { 
            name: "Sequência Lógica", 
            desc: "Exercícios de raciocínio e organização", 
            icon: "🧩", 
            difficulty: "Médio", 
            age: "4-10 anos", 
            color: "from-blue-100 to-blue-200"
          },
          { 
            name: "Interação Social", 
            desc: "Jogos para promover comunicação", 
            icon: "🤝", 
            difficulty: "Médio", 
            age: "5-12 anos", 
            color: "from-purple-100 to-purple-200"
          },
          { 
            name: "Reconhecimento de Emoções", 
            desc: "Identifique e expresse sentimentos", 
            icon: "😊", 
            difficulty: "Fácil", 
            age: "3-15 anos", 
            color: "from-yellow-100 to-yellow-200"
          }
        ].map((game, index) => (
          <Card key={index} className="bg-white rounded-2xl shadow-lg border-0">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-br ${game.color} p-6 rounded-t-2xl`}>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{game.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 text-lg mb-1">{game.name}</h3>
                    <p className="text-gray-600 text-sm">{game.desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant={game.difficulty === 'Fácil' ? 'secondary' : 'default'} className="text-xs">
                    {game.difficulty}
                  </Badge>
                  <span className="text-xs text-gray-600">{game.age}</span>
                </div>
                
                <Button className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Play className="mr-2 h-4 w-4" />
                  Jogar Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Therapy Integration */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1597075958693-75173d1c837f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHRoZXJhcHklMjBzZXNzaW9ufGVufDF8fHx8MTc1NTIwMjQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sessão de terapia"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-800 text-lg">Integração com Terapias</h3>
                <p className="text-gray-600 text-sm">Jogos alinhados com objetivos terapêuticos</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-xl">
              Ver Recomendações da Terapeuta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ProfileScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-indigo-400 to-purple-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Meu Perfil</h1>
        <p className="text-white/80 text-sm">Configurações e preferências</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Profile Summary */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardContent className="p-6 text-center">
            <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <User className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-gray-800 text-lg mb-2">Família PARENTY</h3>
            <p className="text-gray-600 text-sm mb-4">Bem-vindo(a)!</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-1">0</div>
                <div className="text-xs text-gray-600">Dias ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">0</div>
                <div className="text-xs text-gray-600">Atividades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">0</div>
                <div className="text-xs text-gray-600">Marcos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Goals */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Target className="h-5 w-5 text-green-500" />
              <span>Metas de Desenvolvimento</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Defina metas personalizadas para acompanhar o desenvolvimento
              </p>
              <Button variant="outline" className="rounded-xl">
                Adicionar Meta
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Award className="h-5 w-5 text-yellow-600" />
              <span>Marcos Alcançados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-gray-600 text-sm">
                Registre as conquistas e celebre cada marco importante
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Settings className="h-5 w-5 text-gray-500" />
              <span>Preferências</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-between h-12">
              <span>Notificações</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between h-12">
              <span>Lembretes de Rotina</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between h-12">
              <span>Privacidade</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between h-12">
              <span>Backup de Dados</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Separator className="my-3" />
            <Button variant="ghost" className="w-full justify-between h-12 text-red-600">
              <span>Sair da Conta</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-blue-400 to-purple-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Chat da Comunidade</h1>
        <p className="text-white/80 text-sm">Conecte-se com outras famílias</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Community Header */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1620442771341-4e157b3b6cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXB8ZW58MXx8fHwxNzU1MTU3MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Grupo de apoio"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-800 text-lg">Comunidade PARENTY</h3>
                <p className="text-gray-600 text-sm">Conecte-se com outras famílias</p>
              </div>
            </div>
            
            <div className="text-center py-4">
              <p className="text-gray-600 text-sm">
                Compartilhe experiências e receba apoio de quem entende sua jornada
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active Chats */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-800">Grupos Disponíveis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Chat Geral", desc: "Converse com toda a comunidade", color: "bg-blue-100", icon: "💬" },
              { name: "Pais TEA", desc: "Apoio para famílias com autismo", color: "bg-green-100", icon: "🧩" },
              { name: "Pais com TDAH", desc: "Estratégias e suporte para TDAH", color: "bg-yellow-100", icon: "⚡" },
              { name: "Síndrome de Down", desc: "Compartilhe experiências", color: "bg-purple-100", icon: "💙" },
              { name: "Paralisia Cerebral", desc: "Dicas de terapias e cuidados", color: "bg-pink-100", icon: "🏊" },
              { name: "Dicas Práticas", desc: "Orientações para o dia a dia", color: "bg-orange-100", icon: "💡" },
            ].map((chat, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                <div className={`${chat.color} rounded-full p-3 flex items-center justify-center text-lg`}>
                  {chat.icon}
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-900 block mb-1">{chat.name}</span>
                  <p className="text-xs text-gray-600">{chat.desc}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Featured Tips */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-800">Dicas em Destaque</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                As melhores dicas compartilhadas pela comunidade aparecerão aqui
              </p>
              <Button variant="outline" className="rounded-xl">
                Explorar Dicas
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Support */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-gray-800 text-lg mb-2">Precisa de Apoio?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Nossa equipe especializada está sempre disponível para ajudar
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Conversar com Especialista
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const AgendaScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Agenda & Rotina</h1>
        <p className="text-white/80 text-sm">Organize o dia com carinho e estrutura</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Today's Events */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-gray-800">
              <span>Compromissos - Hoje</span>
              <Button size="sm" className="rounded-full bg-purple-500 hover:bg-purple-600">
                <Plus className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="bg-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Adicione compromissos como terapias e consultas
              </p>
              <Button variant="outline" className="rounded-xl">
                Adicionar Compromisso
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Daily Routine for Autism */}
        <Card className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Music className="h-5 w-5 text-blue-500" />
              <span>Rotina Estruturada & Divertida</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center mb-4 p-3 bg-white rounded-xl">
              <h3 className="text-lg mb-2">🌈 Hoje é um dia especial!</h3>
              <p className="text-sm text-gray-600">Vamos seguir nossa rotina com amor e paciência</p>
            </div>
            
            {dailyRoutine.map((routine, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                <div className={`w-4 h-4 rounded-full ${
                  routine.status === 'completed' ? 'bg-green-500' :
                  routine.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-900">{routine.activity}</span>
                    <span className="text-xs text-purple-600">{routine.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">💡 {routine.tip}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {routine.status === 'completed' ? '✅' : 
                   routine.status === 'pending' ? '⏳' : '📅'}
                </Badge>
              </div>
            ))}
            
            <div className="mt-4 p-4 bg-yellow-50 rounded-xl">
              <h4 className="text-gray-800 mb-2 flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Dicas para uma Rotina de Sucesso
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Use apoios visuais como pictogramas</li>
                <li>• Celebre cada atividade concluída</li>
                <li>• Mantenha flexibilidade quando necessário</li>
                <li>• Crie momentos de transição suaves</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Progress */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-gray-800 text-lg mb-4">Progresso da Semana</h3>
            <div className="text-center py-4">
              <p className="text-gray-600 text-sm">
                Acompanhe o progresso semanal em rotinas, terapias e atividades
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Award className="h-5 w-5 text-yellow-500" />
              <span>Conquistas da Semana</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <p className="text-gray-600 text-sm">
                Celebre as pequenas vitórias do dia a dia
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const OfflineActivitiesScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-orange-400 to-pink-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Atividades em Casa</h1>
        <p className="text-white/80 text-sm">Desenvolvimento através de brincadeiras</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Categories */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Sensorial", icon: "👐", color: "bg-blue-100 text-blue-700", count: "8 atividades" },
                { name: "Criativa", icon: "🎨", color: "bg-green-100 text-green-700", count: "12 atividades" },
                { name: "Motora", icon: "🤸", color: "bg-purple-100 text-purple-700", count: "6 atividades" },
                { name: "Social", icon: "👥", color: "bg-pink-100 text-pink-700", count: "9 atividades" },
              ].map((category, index) => (
                <div key={index} className={`${category.color} rounded-xl p-4 text-center`}>
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <span className="text-sm block">{category.name}</span>
                  <span className="text-xs opacity-70">{category.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Activities */}
        {offlineActivities.map((activity, index) => (
          <Card key={index} className="bg-white rounded-2xl shadow-lg border-0">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-6 rounded-t-2xl">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 text-lg mb-1">{activity.title}</h3>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-4 text-center text-xs">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-purple-600 mb-1">👶</div>
                    <span className="text-gray-600">{activity.ageGroup}</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-blue-600 mb-1">⏱️</div>
                    <span className="text-gray-600">{activity.duration}</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-green-600 mb-1">📊</div>
                    <span className="text-gray-600">{activity.difficulty}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-gray-800 text-sm mb-2">🎯 Benefícios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.benefits.map((benefit, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-gray-800 text-sm mb-2">🛍️ Materiais:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {activity.materials.map((material, i) => (
                      <li key={i}>• {material}</li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  <Play className="mr-2 h-4 w-4" />
                  Ver Passo a Passo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Tips Section */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-gray-800 text-lg mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-purple-500" />
              Dicas para Atividades em Casa
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="text-purple-600">💡</span> Sempre supervisione as atividades e adapte conforme necessário
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="text-blue-600">🎯</span> Foque no processo, não apenas no resultado final
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="text-green-600">⏰</span> Respeite o tempo da criança e faça pausas quando necessário
                </p>
              </div>
              <div className="p-3 bg-white rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="text-pink-600">📸</span> Documente os momentos especiais para acompanhar o progresso
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const TerapiasScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-green-400 to-teal-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Locais de Terapia</h1>
        <p className="text-white/80 text-sm">Encontre centros especializados no DF</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Filters */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Badge className="whitespace-nowrap bg-blue-100 text-blue-700">Todos</Badge>
              <Badge variant="outline" className="whitespace-nowrap">Fisioterapia</Badge>
              <Badge variant="outline" className="whitespace-nowrap">Fonoaudiologia</Badge>
              <Badge variant="outline" className="whitespace-nowrap">T. Ocupacional</Badge>
              <Badge variant="outline" className="whitespace-nowrap">Psicologia</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Therapy Locations */}
        {[
          { 
            name: "Centro de Reabilitação do Hospital de Base", 
            address: "SMHS Área Especial Q 101 - Asa Sul", 
            phone: "(61) 3315-1234", 
            specialty: "Fisioterapia, Fonoaudiologia",
            distance: "2.5 km"
          },
          { 
            name: "CRER - Centro de Reabilitação", 
            address: "SQN 312 Bloco A - Asa Norte", 
            phone: "(61) 3274-5678", 
            specialty: "Terapia Ocupacional, Psicologia",
            distance: "3.2 km"
          },
          { 
            name: "APAE-DF", 
            address: "SGAS 613 - Asa Sul", 
            phone: "(61) 3445-3045", 
            specialty: "Atendimento Multidisciplinar",
            distance: "4.1 km"
          }
        ].map((location, index) => (
          <Card key={index} className="bg-white rounded-2xl shadow-lg border-0">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-gray-800 text-lg mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>📍 {location.distance}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-1"><strong>Especialidades:</strong></p>
                <p className="text-sm text-gray-600">{location.specialty}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button className="rounded-xl bg-blue-500 hover:bg-blue-600">
                  <Map className="mr-2 h-4 w-4" />
                  Localizar
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl shadow-lg border-0">
          <CardContent className="p-6 text-center">
            <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-gray-800 text-lg mb-2">Emergência Médica</h3>
            <p className="text-gray-600 text-sm mb-4">
              Para situações de emergência, entre em contato com:
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-xl w-full mb-2">
              192 - SAMU
            </Button>
            <Button variant="outline" className="rounded-xl w-full">
              193 - Bombeiros
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const GuiasScreen = () => (
    <div className="pb-20">
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 pt-12 pb-6 px-4">
        <h1 className="text-white text-2xl mb-2">Guias Educacionais</h1>
        <p className="text-white/80 text-sm">Conhecimento prático para o dia a dia</p>
      </div>

      <div className="px-4 -mt-4 space-y-4">
        {/* Categories */}
        <Card className="bg-white rounded-2xl shadow-lg border-0">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Como Desfraldar", icon: "🚽", color: "bg-blue-100 text-blue-700" },
                { name: "Primeiros Passos", icon: "👶", color: "bg-green-100 text-green-700" },
                { name: "Interação Social", icon: "🤝", color: "bg-purple-100 text-purple-700" },
                { name: "Comunicação", icon: "💬", color: "bg-pink-100 text-pink-700" },
              ].map((category, index) => (
                <div key={index} className={`${category.color} rounded-xl p-4 text-center`}>
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <span className="text-sm">{category.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Guides */}
        {[
          { 
            title: "Guia Completo: Como Desfraldar", 
            desc: "Passo a passo para transição das fraldas com paciência e amor",
            icon: "🚽",
            pages: "32 páginas",
            color: "from-blue-100 to-blue-200"
          },
          { 
            title: "Estimulando os Primeiros Passos", 
            desc: "Atividades e dicas para fortalecer os músculos e coordenação",
            icon: "👶",
            pages: "28 páginas",
            color: "from-green-100 to-green-200"
          },
          { 
            title: "Desenvolvendo Habilidades Sociais", 
            desc: "Como ajudar seu filho a interagir e fazer amizades",
            icon: "🤝",
            pages: "24 páginas",
            color: "from-purple-100 to-purple-200"
          },
          { 
            title: "Comunicação Alternativa", 
            desc: "Ferramentas e técnicas de comunicação não-verbal",
            icon: "💬",
            pages: "36 páginas",
            color: "from-pink-100 to-pink-200"
          },
          { 
            title: "Rotinas que Funcionam", 
            desc: "Como criar rotinas estruturadas e flexíveis",
            icon: "⏰",
            pages: "20 páginas",
            color: "from-yellow-100 to-yellow-200"
          },
          { 
            title: "Autonomia e Independência", 
            desc: "Desenvolvendo habilidades para a vida diária",
            icon: "🌟",
            pages: "26 páginas",
            color: "from-indigo-100 to-indigo-200"
          }
        ].map((guide, index) => (
          <Card key={index} className="bg-white rounded-2xl shadow-lg border-0">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-br ${guide.color} p-6 rounded-t-2xl`}>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{guide.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 text-lg mb-1">{guide.title}</h3>
                    <p className="text-gray-600 text-sm">{guide.desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4 text-sm text-gray-600">
                  <span>📄 {guide.pages}</span>
                </div>
                <Button className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Baixar PDF Gratuito
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Video Tutorials */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-gray-800 text-lg mb-4 flex items-center">
              <Play className="mr-2 h-5 w-5 text-purple-500" />
              Vídeo Tutoriais
            </h3>
            <div className="space-y-3">
              {[
                { title: "Técnicas para estimular a fala", duration: "12:30" },
                { title: "Desfralde sem traumas", duration: "15:45" },
                { title: "Brincadeiras para coordenação motora", duration: "9:20" },
                { title: "Como ensinar habilidades sociais", duration: "18:15" },
              ].map((video, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                  <div className="bg-purple-100 rounded-lg p-3 flex items-center justify-center">
                    <Play className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-800 text-sm">{video.title}</h4>
                    <p className="text-xs text-gray-600">⏱️ {video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="flex items-center justify-around">
        {[
          { screen: 'home', icon: Home, label: 'Início', color: 'text-purple-500' },
          { screen: 'jogos', icon: Gamepad2, label: 'Jogos', color: 'text-green-500' },
          { screen: 'chat', icon: MessageCircle, label: 'Chat', color: 'text-blue-500' },
          { screen: 'agenda', icon: Calendar, label: 'Agenda', color: 'text-pink-500' },
          { screen: 'perfil', icon: User, label: 'Perfil', color: 'text-gray-500' },
        ].map((item) => (
          <Button
            key={item.screen}
            variant="ghost"
            onClick={() => setActiveScreen(item.screen)}
            className={`flex-col h-16 w-16 p-1 ${
              activeScreen === item.screen ? item.color : 'text-gray-400'
            }`}
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen />;
      case 'jogos': return <GamesScreen />;
      case 'chat': return <ChatScreen />;
      case 'agenda': return <AgendaScreen />;
      case 'terapias': return <TerapiasScreen />;
      case 'guias': return <GuiasScreen />;
      case 'perfil': return <ProfileScreen />;
      case 'atividades': return <OfflineActivitiesScreen />;
      case 'comunidade': return <ChatScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      <BottomNav />
      <EmergencyFloatingButton />
    </div>
  );
}