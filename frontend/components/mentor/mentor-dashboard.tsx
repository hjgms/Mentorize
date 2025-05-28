"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MentorSidebar } from "@/components/mentor/mentor-sidebar"
import { PropostasMentor } from "@/components/mentor/propostas-mentor"
import { SessoesMentor } from "@/components/mentor/sessoes-mentor"
import { MentorStats } from "@/components/mentor/mentor-stats"
import { CalendarIcon, ClockIcon, Users } from "lucide-react"
import Link from "next/link"

export function MentorDashboard() {
  return (
    <div className="flex-1 container grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
      <MentorSidebar className="hidden md:block" />

      <main className="md:col-span-3 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard do Mentor</h1>
            <p className="text-muted-foreground">
              Bem-vindo(a) de volta, Ana. Você tem 5 novas propostas de monitoria.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <ClockIcon className="h-4 w-4" />
              Definir disponibilidade
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              <CalendarIcon className="h-4 w-4" />
              Ver agenda
            </Button>
          </div>
        </div>

        <MentorStats />

        <Tabs defaultValue="proposals" className="space-y-4">
          <TabsList>
            <TabsTrigger value="proposals">Propostas Recentes</TabsTrigger>
            <TabsTrigger value="upcoming">Próximas Sessões</TabsTrigger>
          </TabsList>
          <TabsContent value="proposals" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Propostas de Monitoria</h2>
              <Link href="/mentor/proposals">
                <Button variant="link" className="text-primary">
                  Ver todas
                </Button>
              </Link>
            </div>
            <PropostasMentor limit={3} />
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Próximas Sessões</h2>
              <Link href="/mentor/sessions">
                <Button variant="link" className="text-primary">
                  Ver todas
                </Button>
              </Link>
            </div>
            <SessoesMentor limit={3} />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Alunos Frequentes</CardTitle>
              <CardDescription>Alunos que mais agendaram sessões com você</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted overflow-hidden border-2 border-background">
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=S${i}`}
                        alt={`Aluno ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{["João Silva", "Maria Oliveira", "Pedro Santos"][i - 1]}</p>
                      <p className="text-sm text-muted-foreground">
                        {[8, 6, 5][i - 1]} sessões • Última: {["ontem", "há 3 dias", "semana passada"][i - 1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Ver todos os alunos
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disciplinas Populares</CardTitle>
              <CardDescription>Disciplinas mais solicitadas pelos alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Cálculo I", count: 24, growth: "+12%" },
                  { name: "Álgebra Linear", count: 18, growth: "+8%" },
                  { name: "Cálculo II", count: 15, growth: "+5%" },
                ].map((subject, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-medium">{subject.name}</p>
                        <p className="text-sm text-muted-foreground">{subject.count} sessões</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-accent">{subject.growth}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver análise completa
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
