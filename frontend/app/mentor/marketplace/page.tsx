import { MentorHeader } from "@/components/mentor/mentor-header"
import { MentorSidebar } from "@/components/mentor/mentor-sidebar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, ShoppingBag, BookOpen, Laptop, GraduationCap, Gift } from "lucide-react"
import { PointSystemInfo } from "@/components/point-system-info"
import { ProductCard } from "@/components/marketplace/product-card"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MentorHeader />

      <div className="flex-1 container grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
        <MentorSidebar className="hidden md:block" />

        <main className="md:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">Marketplace</h1>
              <PointSystemInfo />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-md flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <div>
                  <p className="text-xs">Seus pontos</p>
                  <p className="font-bold">2.450</p>
                </div>
              </div>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Gift className="h-4 w-4" />
                Meus Resgates
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar produtos e descontos..." className="pl-9 w-full" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Todos os produtos
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Até 1000 pontos
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="discounts">Descontos em Faculdades</TabsTrigger>
              <TabsTrigger value="books">Livros e Materiais</TabsTrigger>
              <TabsTrigger value="tech">Tecnologia</TabsTrigger>
              <TabsTrigger value="courses">Cursos</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Desconto"
                  title="Desconto de 20% na Mensalidade"
                  description="Desconto válido por um semestre em faculdades parceiras"
                  points={2000}
                  category="Educação"
                  icon={<GraduationCap className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Livro"
                  title="Livro: Cálculo Avançado"
                  description="Livro de referência para estudantes de engenharia e matemática"
                  points={800}
                  category="Livros"
                  icon={<BookOpen className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Fones"
                  title="Fones de Ouvido com Cancelamento de Ruído"
                  description="Perfeito para estudar em ambientes barulhentos"
                  points={1500}
                  category="Tecnologia"
                  icon={<Laptop className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Curso"
                  title="Curso de Didática para Mentores"
                  description="Aprimore suas habilidades de ensino com este curso online"
                  points={1200}
                  category="Cursos"
                  icon={<GraduationCap className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Tablet"
                  title="Tablet para Anotações"
                  description="Ideal para fazer anotações digitais durante as aulas"
                  points={2500}
                  category="Tecnologia"
                  icon={<Laptop className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Desconto"
                  title="Desconto em Pós-Graduação"
                  description="15% de desconto em programas de pós-graduação parceiros"
                  points={3000}
                  category="Educação"
                  icon={<GraduationCap className="h-4 w-4" />}
                />
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Carregar mais produtos</Button>
              </div>
            </TabsContent>

            <TabsContent value="discounts" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Desconto"
                  title="Desconto de 20% na Mensalidade"
                  description="Desconto válido por um semestre em faculdades parceiras"
                  points={2000}
                  category="Educação"
                  icon={<GraduationCap className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Desconto"
                  title="Desconto em Pós-Graduação"
                  description="15% de desconto em programas de pós-graduação parceiros"
                  points={3000}
                  category="Educação"
                  icon={<GraduationCap className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Desconto"
                  title="Isenção de Matrícula"
                  description="Isenção da taxa de matrícula em cursos de extensão"
                  points={1000}
                  category="Educação"
                  icon={<GraduationCap className="h-4 w-4" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="books" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Livro"
                  title="Livro: Cálculo Avançado"
                  description="Livro de referência para estudantes de engenharia e matemática"
                  points={800}
                  category="Livros"
                  icon={<BookOpen className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Livro"
                  title="Kit de Livros Didáticos"
                  description="Conjunto de livros para apoio ao ensino"
                  points={1200}
                  category="Livros"
                  icon={<BookOpen className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Livro"
                  title="Assinatura de Biblioteca Digital"
                  description="Acesso por 6 meses a uma biblioteca digital completa"
                  points={1500}
                  category="Livros"
                  icon={<BookOpen className="h-4 w-4" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="tech" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Fones"
                  title="Fones de Ouvido com Cancelamento de Ruído"
                  description="Perfeito para estudar em ambientes barulhentos"
                  points={1500}
                  category="Tecnologia"
                  icon={<Laptop className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Tablet"
                  title="Tablet para Anotações"
                  description="Ideal para fazer anotações digitais durante as aulas"
                  points={2500}
                  category="Tecnologia"
                  icon={<Laptop className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Mouse"
                  title="Mouse Ergonômico"
                  description="Mouse ergonômico para longas horas de estudo"
                  points={500}
                  category="Tecnologia"
                  icon={<Laptop className="h-4 w-4" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="courses" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Curso"
                  title="Curso de Didática para Mentores"
                  description="Aprimore suas habilidades de ensino com este curso online"
                  points={1200}
                  category="Cursos"
                  icon={<GraduationCap className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Curso"
                  title="Certificação em Metodologias Ativas"
                  description="Aprenda técnicas modernas de ensino e aprendizagem"
                  points={1800}
                  category="Cursos"
                  icon={<GraduationCap className="h-4 w-4" />}
                />

                <ProductCard
                  image="/placeholder.svg?height=200&width=200&text=Curso"
                  title="Workshop de Comunicação Efetiva"
                  description="Melhore sua comunicação para sessões de monitoria mais eficazes"
                  points={900}
                  category="Cursos"
                  icon={<GraduationCap className="h-4 w-4" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
