import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { generatePortfolioPdf } from "@/lib/generatePortfolioPdf";

interface DownloadPortfolioButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
}

export const DownloadPortfolioButton = ({
  className = "",
  variant = "default",
  size = "sm",
}: DownloadPortfolioButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await generatePortfolioPdf();
      toast.success("Portfolio PDF downloaded");
    } catch (error) {
      console.error("PDF generation failed", error);
      toast.error("Could not generate the PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={isLoading}
      className={`gap-2 ${className}`}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      {isLoading ? "Preparing…" : "Download Portfolio"}
    </Button>
  );
};
