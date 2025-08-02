import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  onScrollToRegistration: () => void;
}

export function ContactSection({ onScrollToRegistration }: ContactSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          문의하기
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          추가 궁금한 점이 있으시면 언제든 연락해주세요
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-replit-orange text-xl" />
            </div>
            <h3 className="font-bold text-navy-dark mb-2">이메일</h3>
            <p className="text-slate-600">greyzerocompany@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-replit-orange text-xl" />
            </div>
            <h3 className="font-bold text-navy-dark mb-2">서비스 홈페이지</h3>
            <p className="text-slate-600">https://vibecodinghelpers.com</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-replit-orange text-xl" />
            </div>
            <h3 className="font-bold text-navy-dark mb-2">오픈 카톡방</h3>
            <p className="text-slate-600">
              https://open.kakao.com/o/goZELXrh
            </p>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-replit-orange to-orange-600 border-0 text-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">지금 바로 시작하세요!</h3>
            <p className="text-xl mb-6 opacity-90">
              단 10명만 모집하는 특별한 기회를 놓치지 마세요
            </p>
            <Button
              onClick={onScrollToRegistration}
              className="bg-white text-replit-orange hover:bg-slate-100 text-lg px-8 py-4"
              size="lg"
            >
              수강 신청하기
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}