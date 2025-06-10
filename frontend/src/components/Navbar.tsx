
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div 
          className="flex items-center font-bold text-xl text-primary mr-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="hidden md:inline">FinTrader</span>
          <span className="inline md:hidden">FT</span>
        </div>
        
        <nav className="flex items-center gap-2 text-sm font-medium mr-4 flex-1 justify-start">
          <Button 
            variant={isActive("/") ? "default" : "ghost"} 
            size="sm" 
            className="hidden md:flex"
            onClick={() => navigate("/")}
          >
            Dashboard
          </Button>
          <Button 
            variant={isActive("/trading") ? "default" : "ghost"} 
            size="sm" 
            className="hidden md:flex"
            onClick={() => navigate("/trading")}
          >
            Negociar
          </Button>
          <Button 
            variant={isActive("/analysis") ? "default" : "ghost"} 
            size="sm" 
            className="hidden md:flex"
            onClick={() => navigate("/analysis")}
          >
            Análises
          </Button>
          <Button 
            variant={isActive("/education") ? "default" : "ghost"} 
            size="sm" 
            className="hidden md:flex"
            onClick={() => navigate("/education")}
          >
            Educação
          </Button>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button size="sm">Criar Conta</Button>
        </div>
      </div>
    </header>
  );
};
