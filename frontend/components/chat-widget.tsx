"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, X, Video, Phone, Paperclip } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const messages = [
    {
      id: 1,
      sender: "Ana Paula",
      avatar: "/placeholder.svg?height=40&width=40&text=AP",
      content: "Olá! Como posso ajudar com o seu estudo de Cálculo hoje?",
      time: "14:30",
      isMe: false,
    },
    {
      id: 2,
      sender: "Você",
      content: "Oi Ana! Estou com dificuldade em entender derivadas parciais. Você poderia me ajudar?",
      time: "14:32",
      isMe: true,
    },
    {
      id: 3,
      sender: "Ana Paula",
      avatar: "/placeholder.svg?height=40&width=40&text=AP",
      content:
        "Claro! Derivadas parciais são usadas quando temos funções de várias variáveis. Vamos marcar uma sessão para explicar melhor?",
      time: "14:35",
      isMe: false,
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // Aqui você adicionaria a mensagem ao estado
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 bg-background border rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="p-3 border-b bg-primary text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=40&width=40&text=AP" alt="Ana Paula" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">Ana Paula</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground">
                <Video className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] ${msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-2 px-3`}
                >
                  {!msg.isMe && (
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={msg.avatar || "/placeholder.svg"} alt={msg.sender} />
                        <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium">{msg.sender}</span>
                    </div>
                  )}
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs opacity-70 mt-1 block text-right">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button size="icon" className="h-8 w-8" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
