import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-replit-orange rounded-lg flex items-center justify-center">
              <Code className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold">레플릿 시작 클래스</span>
          </div>
          <div className="text-sm text-slate-400">
            © 2025 Replit Start Class. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
