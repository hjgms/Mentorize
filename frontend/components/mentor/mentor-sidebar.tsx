import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Calendar,
  Clock,
  FileText,
  Settings,
  UserCircle,
  Star,
  ShoppingBag,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface MentorSidebarProps {
  className?: string
}

export function MentorSidebar({ className = "" }: MentorSidebarProps) {
  return (
    <aside className={`space-y-6 ${className}`}>
      <div className="flex flex-col items-center space-y-2 py-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80&text=AP" alt="Ana Paula" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="font-bold">Ana Paula</h2>
          <p className="text-sm text-muted-foreground">Matemática • USP</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">4.9 ★</Badge>
          <Badge variant="outline">124 avaliações</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Nível de Mentor</span>
          <span className="font-medium">Avançado</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>

      <nav className="flex flex-col space-y-1">
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/proposals">
            <FileText className="mr-2 h-4 w-4" />
            Propostas
            <Badge className="ml-auto bg-primary text-xs">5</Badge>
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/sessions">
            <Calendar className="mr-2 h-4 w-4" />
            Sessões
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/messages">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mensagens
            <Badge className="ml-auto bg-secondary text-xs">3</Badge>
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/students">
            <Users className="mr-2 h-4 w-4" />
            Alunos
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/points">
            <Star className="mr-2 h-4 w-4" />
            Meus Pontos
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/marketplace">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Marketplace
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/availability">
            <Clock className="mr-2 h-4 w-4" />
            Disponibilidade
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/profile">
            <UserCircle className="mr-2 h-4 w-4" />
            Perfil
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/mentor/settings">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Link>
        </Button>
      </nav>

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-medium mb-2">Resumo do mês</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sessões realizadas:</span>
            <span className="font-medium">18</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Horas de monitoria:</span>
            <span className="font-medium">24h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pontos acumulados:</span>
            <span className="font-medium">2.400</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
