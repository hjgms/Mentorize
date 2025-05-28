import { MentorHeader } from "@/components/mentor/mentor-header"
import { MentorSidebar } from "@/components/mentor/mentor-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, CheckCircle, Clock, GraduationCap, ShoppingBag, Star, Trophy, Users } from "lucide-react"
import { PointSystemInfo } from "@/components/point-system-info"
import Link from "next/link"

export default function MentorPointsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MentorHeader />

      <div className="flex-1 container grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
        <MentorSidebar className="hidden md:block" />

        <main className="md:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">Meus Pontos</h1>
              <PointSystemInfo />
            </div>
            <Link href="/mentor/marketplace">
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <ShoppingBag className="h-4 w-4" />
                Ir para o Marketplace
              </Button>
            </Link>
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
                  <p className="text-4xl font-bold">2.450</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Este mês</p>
                    <p className="text-xl font-medium text-accent">+1.200</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Resgatados</p>
                    <p className="text-xl font-medium text-muted-foreground">500</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Próximo nível: Mentor Especialista</span>
                  <span className="font-medium">2450/3000</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="earn" className="space-y-4">
            <TabsList>
              <TabsTrigger value="earn">Como Ganhar Pontos</TabsTrigger>
              <TabsTrigger value="redeem">Produtos Populares</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
            </TabsList>
            <TabsContent value="earn" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <CardTitle className="text-base">Atividades de Mentoria</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Realizar uma sessão (1h)</span>
                        </div>
                        <span className="text-sm font-medium">+100 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Receber avaliação 5 estrelas</span>
                        </div>
                        <span className="text-sm font-medium">+50 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Criar material didático</span>
                        </div>
                        <span className="text-sm font-medium">+50 pontos</span>
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
                          <span className="text-sm">10 sessões em um mês</span>
                        </div>
                        <span className="text-sm font-medium">+200 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Indicar outro mentor</span>
                        </div>
                        <span className="text-sm font-medium">+150 pontos</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Participar de capacitação</span>
                        </div>
                        <span className="text-sm font-medium">+100 pontos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="redeem" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Desconto em Mensalidade</CardTitle>
                    <CardDescription>20% de desconto por um semestre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <p className="text-3xl font-bold text-primary">2.000</p>
                      <p className="text-sm text-muted-foreground">pontos</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/mentor/marketplace" className="w-full">
                      <Button className="w-full">Ver no Marketplace</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fones de Ouvido</CardTitle>
                    <CardDescription>Com cancelamento de ruído</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <p className="text-3xl font-bold text-primary">1.500</p>
                      <p className="text-sm text-muted-foreground">pontos</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/mentor/marketplace" className="w-full">
                      <Button className="w-full">Ver no Marketplace</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Livro: Cálculo Avançado</CardTitle>
                    <CardDescription>Livro de referência acadêmica</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <p className="text-3xl font-bold text-primary">800</p>
                      <p className="text-sm text-muted-foreground">pontos</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/mentor/marketplace" className="w-full">
                      <Button className="w-full">Ver no Marketplace</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Link href="/mentor/marketplace">
                  <Button variant="outline">Ver todos os produtos</Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Pontos</CardTitle>
                  <CardDescription>Seus ganhos e resgates de pontos recentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      {
                        date: "Hoje, 14:30",
                        description: "Sessão de monitoria com João Silva",
                        points: 100,
                        type: "earning",
                      },
                      {
                        date: "Ontem, 18:45",
                        description: "Bônus por avaliação 5 estrelas",
                        points: 50,
                        type: "earning",
                      },
                      {
                        date: "15/04/2023",
                        description: "Resgate: Fones de Ouvido",
                        points: -500,
                        type: "expense",
                      },
                      {
                        date: "12/04/2023",
                        description: "Conquista: 10 sessões em um mês",
                        points: 200,
                        type: "earning",
                      },
                      {
                        date: "10/04/2023",
                        description: "Sessão de monitoria com Maria Oliveira",
                        points: 150,
                        type: "earning",
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
