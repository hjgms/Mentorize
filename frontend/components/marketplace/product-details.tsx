"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Check } from "lucide-react"
import Image from "next/image"

interface ProductDetailsProps {
  image: string
  title: string
  description: string
  points: number
  category: string
  icon: React.ReactNode
  onClose: () => void
}

export function ProductDetails({ image, title, description, points, category, icon, onClose }: ProductDetailsProps) {
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [isRedeemed, setIsRedeemed] = useState(false)

  const handleRedeem = () => {
    setIsRedeeming(true)

    // Simulação de resgate
    setTimeout(() => {
      setIsRedeeming(false)
      setIsRedeemed(true)

      // Após mostrar a confirmação, fechar o diálogo
      setTimeout(() => {
        onClose()
      }, 2000)
    }, 1500)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Detalhes do produto e informações para resgate</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="relative h-60 bg-muted rounded-md overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Descrição</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            <div>
              <h3 className="font-medium">Categoria</h3>
              <Badge variant="outline" className="flex items-center gap-1 w-fit mt-1">
                {icon}
                {category}
              </Badge>
            </div>

            <div>
              <h3 className="font-medium">Pontos necessários</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-primary">{points} pontos</Badge>
                <span className="text-sm text-muted-foreground">(Você tem: 2.450 pontos)</span>
              </div>
            </div>

            {category === "Educação" && (
              <div>
                <h3 className="font-medium">Faculdades participantes</h3>
                <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                  <li>Universidade de São Paulo (USP)</li>
                  <li>Universidade Estadual de Campinas (UNICAMP)</li>
                  <li>Universidade Federal do Rio de Janeiro (UFRJ)</li>
                  <li>E outras instituições parceiras</li>
                </ul>
              </div>
            )}

            {category === "Tecnologia" && (
              <div>
                <h3 className="font-medium">Especificações</h3>
                <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                  <li>Produto original com garantia</li>
                  <li>Entrega em todo o Brasil</li>
                  <li>Prazo de entrega: 7-15 dias úteis</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="flex justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Seus pontos: 2.450</span>
          </div>

          {isRedeemed ? (
            <Button className="bg-green-600 hover:bg-green-700">
              <Check className="mr-2 h-4 w-4" />
              Resgate confirmado!
            </Button>
          ) : (
            <Button
              onClick={handleRedeem}
              disabled={isRedeeming || points > 2450}
              className="bg-primary hover:bg-primary/90"
            >
              {isRedeeming ? "Processando..." : "Resgatar produto"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
