"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductDetails } from "@/components/marketplace/product-details"
import Image from "next/image"

interface ProductCardProps {
  image: string
  title: string
  description: string
  points: number
  category: string
  icon: React.ReactNode
}

export function ProductCard({ image, title, description, points, category, icon }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <Card className="overflow-hidden flex flex-col h-full">
        <div className="relative h-48 bg-muted">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <Badge className="absolute top-2 right-2 bg-primary">{points} pontos</Badge>
        </div>
        <CardHeader className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="mt-2">
            <Badge variant="outline" className="flex items-center gap-1 w-fit">
              {icon}
              {category}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button variant="outline" className="w-1/2" onClick={() => setShowDetails(true)}>
            Detalhes
          </Button>
          <Button className="w-1/2 bg-primary hover:bg-primary/90">Resgatar</Button>
        </CardFooter>
      </Card>

      {showDetails && (
        <ProductDetails
          image={image}
          title={title}
          description={description}
          points={points}
          category={category}
          icon={icon}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  )
}
