"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HelpCircle } from "lucide-react"

export function PointSystemInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Informações sobre o sistema de pontos</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Sistema de Pontos do Mentorize</DialogTitle>
          <DialogDescription>
            Entenda como funciona nosso sistema de pontos para agendamento de monitorias.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <h4 className="font-medium">Como funciona?</h4>
          <p className="text-sm text-muted-foreground">
            No Mentorize, utilizamos um sistema de pontos para valorizar o conhecimento compartilhado, em vez de
            transações monetárias diretas.
          </p>

          <div className="space-y-2">
            <h5 className="font-medium text-sm">Para Alunos:</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Ganhe pontos ao participar ativamente da plataforma</li>
              <li>Complete seu perfil: +50 pontos</li>
              <li>Avalie sessões de monitoria: +10 pontos por avaliação</li>
              <li>Compartilhe materiais úteis: +20 pontos por material aprovado</li>
              <li>Indique amigos: +100 pontos por indicação que se tornar membro</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-sm">Para Mentores:</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Receba pontos ao ministrar monitorias: 100 pontos por hora</li>
              <li>Boas avaliações: bônus de até 50% nos pontos</li>
              <li>Crie materiais didáticos: +50 pontos por material aprovado</li>
              <li>Participe de programas de mentoria contínua: +200 pontos por mês</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-medium text-sm">Troca de Pontos:</h5>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Mentores podem trocar pontos por produtos físicos no marketplace</li>
              <li>Descontos em mensalidades de faculdades parceiras</li>
              <li>Materiais didáticos e livros acadêmicos</li>
              <li>Equipamentos eletrônicos e acessórios para estudo</li>
              <li>Cursos de capacitação e certificações profissionais</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button>Entendi</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
