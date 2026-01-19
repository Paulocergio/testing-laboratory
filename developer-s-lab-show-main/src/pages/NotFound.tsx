import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient-primary mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Página não encontrada
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
