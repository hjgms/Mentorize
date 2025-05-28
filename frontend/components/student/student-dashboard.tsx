"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentSidebar } from "@/components/student/student-sidebar"
import { StudentStats } from "@/components/student/student-stats"
import { SessoesEstudante } from "@/components/student/sessoes-estudante"
import { MentoresRecomendados } from "@/components/student/mentores-recomendados"
import { BookOpen, Calendar, Search, Users } from "lucide-react"
import Link from "next/link"

export function StudentDashboard() {
  return (
    <div className="flex-1 container grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
      <StudentSidebar className="hidden md:block" />

      <main className="md:col-span-3 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Olá, João!</h1>
            <p className="text-muted-foreground">
              Bem-vindo de volta. Você tem 2 sessões de monitoria agendadas esta semana.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Search className="h-4 w-4" />
              Buscar mentores
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              <Calendar className="h-4 w-4" />
              Agendar sessão
            </Button>
          </div>
        </div>

        <StudentStats />

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Próximas Sessões</TabsTrigger>
            <TabsTrigger value="recommended">Mentores Recomendados</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Sessões Agendadas</h2>
              <Link href="/student/sessions">
                <Button variant="link" className="text-primary">
                  Ver todas
                </Button>
              </Link>
            </div>
            <SessoesEstudante limit={2} />
          </TabsContent>
          <TabsContent value="recommended" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Mentores Recomendados</h2>
              <Link href="/student/mentors">
                <Button variant="link" className="text-primary">
                  Ver todos
                </Button>
              </Link>
            </div>
            <MentoresRecomendados limit={3} />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Disciplinas em Andamento</CardTitle>
              <CardDescription>Disciplinas que você está cursando neste semestre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Cálculo II", progress: 70, difficulty: "Alta" },
                  { name: "Física II", progress: 60, difficulty: "Média" },
                  { name: "Resistência dos Materiais", progress: 45, difficulty: "Alta" },
                ].map((subject, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{subject.name}</p>
                          <p className="text-xs text-muted-foreground">Dificuldade: {subject.difficulty}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium">{subject.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${subject.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver todas as disciplinas
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grupos de Estudo</CardTitle>
              <CardDescription>Grupos de estudo disponíveis para suas disciplinas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Grupo de Cálculo II", members: 8, nextMeeting: "Hoje, 19h" },
                  { name: "Física Aplicada", members: 12, nextMeeting: "Amanhã, 15h" },
                  { name: "Programação em Python", members: 15, nextMeeting: "Sexta, 18h" },
                ].map((group, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-secondary/10 flex items-center justify-center text-secondary">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{group.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {group.members} membros • Próximo: {group.nextMeeting}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Entrar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Explorar grupos
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
