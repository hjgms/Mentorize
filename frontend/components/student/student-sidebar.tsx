import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Calendar,
  BookOpen,
  Clock,
  Star,
  Settings,
  UserCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface StudentSidebarProps {
  className?: string
}

export function StudentSidebar({ className = "" }: StudentSidebarProps) {
  return (
    <aside className={`space-y-6 ${className}`}>
      <div className="flex flex-col items-center space-y-2 py-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg?height=80&width=80&text=JS" alt="João Silva" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="font-bold">João Silva</h2>
          <p className="text-sm text-muted-foreground">Engenharia Civil • USP</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">3º Semestre</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progresso do Semestre</span>
          <span className="font-medium">65%</span>
        </div>
        <Progress value={65} className="h-2" />
      </div>

      <nav className="flex flex-col space-y-1">
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/mentors">
            <Users className="mr-2 h-4 w-4" />
            Encontrar Mentores
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/sessions">
            <Calendar className="mr-2 h-4 w-4" />
            Minhas Sessões
            <Badge className="ml-auto bg-primary text-xs">2</Badge>
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/messages">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mensagens
            <Badge className="ml-auto bg-secondary text-xs">3</Badge>
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/subjects">
            <BookOpen className="mr-2 h-4 w-4" />
            Disciplinas
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/points">
            <Star className="mr-2 h-4 w-4" />
            Meus Pontos
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/history">
            <Clock className="mr-2 h-4 w-4" />
            Histórico
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/profile">
            <UserCircle className="mr-2 h-4 w-4" />
            Perfil
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/student/settings">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Link>
        </Button>
      </nav>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Mentores favoritos</h3>
        <div className="space-y-3">
          {[
            { name: "Ana Paula", subject: "Cálculo I" },
            { name: "Carlos Mendes", subject: "Física" },
            { name: "Juliana Silva", subject: "Programação" },
          ].map((mentor, i) => (
            <div key={i} className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={`/placeholder.svg?height=32&width=32&text=${mentor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}`}
                  alt={mentor.name}
                />
                <AvatarFallback>
                  {mentor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{mentor.name}</p>
                <p className="text-xs text-muted-foreground">{mentor.subject}</p>
              </div>
              <Star className="h-3 w-3 ml-auto text-yellow-500 fill-yellow-500" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
