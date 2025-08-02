import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Users, Clock, Tag, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onScrollToRegistration: () => void;
}

export function PricingSection({ onScrollToRegistration }: PricingSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            수강료 및 모집 정보
          </h2>
          <p className="text-xl text-slate-600">
            소수 정예로 진행되는 오프라인 강의
          </p>
        </div>

        <Card className="bg-gradient-to-br from-replit-orange to-orange-600 border-0 text-white overflow-hidden relative">
          <CardContent className="p-8 md:p-12 text-center relative z-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <Badge className="inline-flex items-center bg-white/20 text-white px-4 py-2 mb-6">
              <Flame className="w-4 h-4 mr-2" />
              Early Bird 특가
            </Badge>

            <div className="mb-8">
              <div className="text-lg text-orange-100 mb-2">
                💰 평생 360만원 절약하는
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                30,000원
              </div>
              <div className="text-xl opacity-90">ROI 12,000% 보장 투자</div>
              <div className="text-sm opacity-75">
                월 30만원씩 나가는 돈을 아끼세요
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-2xl" />
                </div>
                <div className="font-semibold">소수 정예</div>
                <div className="text-sm opacity-75">단 10명만 모집</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-2xl" />
                </div>
                <div className="font-semibold">4시간 집중</div>
                <div className="text-sm opacity-75">알찬 커리큘럼</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="text-2xl" />
                </div>
                <div className="font-semibold">수료시</div>
                <div className="text-sm opacity-75">
                  바이브 코딩 헬퍼 사용시 할인
                </div>
              </div>
            </div>

            <Button
              onClick={onScrollToRegistration}
              className="bg-white text-replit-orange hover:bg-slate-100 text-lg px-10 py-4"
              size="lg"
            >
              지금 신청하기
            </Button>

            <div className="mt-6 text-sm opacity-75">
              <ShieldCheck className="w-4 h-4 inline mr-2" />
              100% 환불 보장 (강의 3일 전까지)
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}