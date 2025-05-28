import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Users, BookOpen, Settings, Home, Star, Clock } from "lucide-react"

interface DashboardSidebarProps {
  className?: string
}

export function DashboardSidebar({ className = "" }: DashboardSidebarProps) {
  return (
    <aside className={`space-y-6 ${className}`}>
      <nav className="flex flex-col space-y-1">
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/dashboard">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/dashboard/schedule">
            <Calendar className="mr-2 h-4 w-4" />
            Agendamentos
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/dashboard/mentors">
            <Users className="mr-2 h-4 w-4" />
            Monitores
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/dashboard/messages">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mensagens
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/dashboard/subjects">
            <BookOpen className="mr-2 h-4 w-4" />
            Disciplinas
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Link>
        </Button>
      </nav>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Disciplinas favoritas</h3>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Star className="mr-2 h-3 w-3 text-accent" />
            Matemática
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Star className="mr-2 h-3 w-3 text-accent" />
            Física
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Star className="mr-2 h-3 w-3 text-accent" />
            Programação
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Sessões recentes</h3>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Clock className="mr-2 h-3 w-3" />
            Cálculo com Ana P.
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Clock className="mr-2 h-3 w-3" />
            Física com Carlos M.
          </Button>
        </div>
      </div>
    </aside>
  )
}
