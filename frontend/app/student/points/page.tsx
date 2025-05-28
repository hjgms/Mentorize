import { StudentHeader } from "@/components/student/student-header"
import { StudentSidebar } from "@/components/student/student-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Calendar, CheckCircle, Clock, Gift, Star, Trophy, Users } from "lucide-react"
import { PointSystemInfo } from "@/components/point-system-info"

export default function PointsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StudentHeader />

      <div className="flex-1 container grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
        <StudentSidebar className="hidden md:block" />

        <main className="md:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">Meus Pontos</h1>
              <PointSystemInfo />
            </div>
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              <Gift className="h-4 w-4" />
              Resgatar Recompensas
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Saldo de Pontos</CardTitle>
              <CardDescription>Seu saldo atual e histórico de pontos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Pontos disponíveis</p>
                  <p className="text-4xl font-bold">750</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Este mês</p>
                    <p className="text-xl font-medium text-accent">+320</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Utilizados</p>
                    <p className="text-xl font-medium text-muted-foreground">1.250</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Próximo nível: Estudante Avançado</span>
                  <span className="font-medium">750/1000</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="earn" className="space-y-4">
            <TabsList>
              <TabsTrigger value="earn">Como Ganhar Pontos</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
            </TabsList>
            <TabsContent value="earn" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <CardTitle className="text-base">Tarefas Diárias</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Participar de uma sessão</span>
                        </div>
                        <span className="text-sm font-medium">+20 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Avaliar um mentor</span>
                        </div>
                        <span className="text-sm font-medium">+10 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Compartilhar material</span>
                        </div>
                        <span className="text-sm font-medium">+20 pontos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Conquistas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">5 sessões em uma semana</span>
                        </div>
                        <span className="text-sm font-medium">+100 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Indicar um amigo</span>
                        </div>
                        <span className="text-sm font-medium">+100 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Melhorar nota em 20%</span>
                        </div>
                        <span className="text-sm font-medium">+200 pontos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Pontos</CardTitle>
                  <CardDescription>Seus ganhos e gastos de pontos recentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      {
                        date: "Hoje, 14:30",
                        description: "Sessão de monitoria com Ana Paula",
                        points: -100,
                        type: "expense",
                      },
                      {
                        date: "Ontem, 18:45",
                        description: "Avaliação de sessão com Carlos Mendes",
                        points: 10,
                        type: "earning",
                      },
                      {
                        date: "15/04/2023",
                        description: "Compartilhamento de material de estudo",
                        points: 20,
                        type: "earning",
                      },
                      {
                        date: "12/04/2023",
                        description: "Conquista: 5 sessões em uma semana",
                        points: 100,
                        type: "earning",
                      },
                      {
                        date: "10/04/2023",
                        description: "Sessão de monitoria com Juliana Silva",
                        points: -150,
                        type: "expense",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center pb-3 border-b last:border-0">
                        <div>
                          <p className="font-medium">{item.description}</p>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                        <span
                          className={`font-medium ${item.type === "earning" ? "text-accent" : "text-muted-foreground"}`}
                        >
                          {item.type === "earning" ? "+" : ""}
                          {item.points} pontos
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver histórico completo
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
