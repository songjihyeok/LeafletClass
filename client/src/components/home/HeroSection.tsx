import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, CalendarPlus } from "lucide-react";

interface HeroSectionProps {
  onScrollToRegistration: () => void;
}

export function HeroSection({ onScrollToRegistration }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="inline-flex items-center bg-replit-orange/20 text-orange-200 px-4 py-2 mb-6">
              <Flame className="w-4 h-4 mr-2" />단 10명 한정 모집
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              리플릿으로 시작하는
              <br />
              <span className="text-replit-orange">
                누구나 만드는 웹서비스
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              비용 절감부터 실무 활용까지, 리플릿의 모든 것을 3시간 만에
              정복하세요. 오프라인 강의로 직접 실습하며 배워보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={onScrollToRegistration}
                size="lg"
                className="bg-replit-orange hover:bg-orange-600 text-white"
              >
                <CalendarPlus className="w-5 h-5 mr-2" />
                수강 신청하기
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-replit-orange">
                  3시간
                </div>
                <div className="text-sm text-slate-400">집중 교육</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-replit-orange">
                  10명
                </div>
                <div className="text-sm text-slate-400">소수 정예</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-replit-orange">
                  3만원
                </div>
                <div className="text-sm text-slate-400">합리적 가격</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern coding workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-900 font-medium">
                  실시간 코딩 실습
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}