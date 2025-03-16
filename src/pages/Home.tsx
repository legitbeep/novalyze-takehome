"use client";

import type React from "react";

import { useState } from "react";
import { Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import samplePdf from "../resources/sample.pdf";
import Layout from "@/components/layout/app-layout";

// Dummy import for the PDF file
// In a real app, you would use the correct path to your PDF
const samplePdfPath = "../resources/sample.pdf";

type Message = {
  id: number;
  content: string;
  isBot: boolean;
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I help you with your document today?",
      isBot: true,
    },
    { id: 2, content: "Can you summarize this PDF for me?", isBot: false },
    {
      id: 3,
      content: "Of course! This document appears to be about...",
      isBot: true,
    },
    {
      id: 4,
      content: "Can you explain the main concept in section 2?",
      isBot: false,
    },
    {
      id: 5,
      content: "Section 2 discusses the fundamental principles of...",
      isBot: true,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, content: input, isBot: false },
      ]);
      setInput("");
    }
  };

  return (
    <Layout>
      <div className="grid min-h-[100dvh] grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col rounded-lg border bg-card shadow-sm">
          <div className="flex items-center gap-2 border-b p-4">
            <Bot className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Document Assistant</h2>
          </div>

          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-4 p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex min-w-0 flex-col rounded-lg px-4 py-2 text-sm",
                    message.isBot
                      ? "mr-auto max-w-[85%] bg-muted text-muted-foreground"
                      : "ml-auto max-w-[85%] bg-primary text-primary-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {message.isBot ? (
                      <Bot className="h-4 w-4 shrink-0" />
                    ) : (
                      <User className="h-4 w-4 shrink-0" />
                    )}
                    <span className="font-medium">
                      {message.isBot ? "Assistant" : "You"}
                    </span>
                  </div>
                  <p className="mt-1 break-words">{message.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about the document..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </div>
        <div className="col-span-1 rounded-lg border bg-card shadow-sm md:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 border-b p-4">
            <h2 className="text-lg font-semibold">Document Viewer</h2>
          </div>
          <div className="h-[calc(100%-4rem)] w-full">
            <object
              data={samplePdf}
              type="application/pdf"
              className="h-full w-full rounded-b-lg"
            >
              <p className="flex h-full items-center justify-center text-muted-foreground">
                Your browser does not support PDFs. Please download the PDF to
                view it:
                <a
                  href={samplePdfPath}
                  className="ml-1 text-primary hover:underline"
                >
                  Download PDF
                </a>
              </p>
            </object>
          </div>
        </div>
      </div>
    </Layout>
  );
}
