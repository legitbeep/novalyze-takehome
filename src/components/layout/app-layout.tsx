import { ModeToggle } from "../theme-toggle";
import type { ReactNode } from "react";
import { Mountain, PersonStanding, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Button } from "../ui/button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col px-10">
      <header className="sticky top-0 z-10 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="h-6 w-auto" />
          </Link>
          <div className="flex gap-1 items-center">
            <ModeToggle />
            <Link to="/login" className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-background py-6">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Novalyze. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
