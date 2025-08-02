import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

interface HeaderProps {
  onScrollToRegistration: () => void;
}

export function Header({ onScrollToRegistration }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-replit-orange rounded-lg flex items-center justify-center">
              <Code className="text-white text-sm" />
            </div>
            <h1 className="text-xl font-bold text-navy-dark">
              리플릿 시작하기 클래스
            </h1>
          </div>
          <Button
            onClick={onScrollToRegistration}
            className="bg-replit-orange hover:bg-orange-600 text-white"
          >
            지금 신청하기
          </Button>
        </div>
      </div>
    </header>
  );
}