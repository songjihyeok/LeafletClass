import { Briefcase, Users, Star, Code } from "lucide-react";

export function InstructorSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
              강사 소개
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-navy-dark mb-2">
                  송지혁 개발자
                </h3>
                <p className="text-replit-orange font-semibold mb-4">
                  시니어 풀스택 개발자 | 바이브 코딩 핼퍼 운영
                </p>
                <p className="text-slate-600 leading-relaxed">
                  7년간 스타트업과 대기업에서 다양한 프로젝트를 진행해왔으며,
                  빠른 프로토타이핑과 배포 전문가로 활동하고 있습니다.
                  개발자들의 생산성 향상에 관심이 많으며, 실무에서 바로 활용
                  가능한 실용적인 지식을 전달하는 것을 목표로 합니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-replit-orange" />
                  <span className="text-slate-700">7년+ 개발 경력</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-replit-orange" />
                  <span className="text-slate-700">30+ 스터디 운영</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-replit-orange" />
                  <span className="text-slate-700">
                    4.5/5 외주 플랫폼 평점
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-replit-orange" />
                  <span className="text-slate-700">리플릿 개발 전문</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/profile.jpeg"
              alt="Professional instructor"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-replit-orange">
                  4.5★
                </div>
                <div className="text-sm text-slate-600">
                  외주 플랫폼 개발 평점
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}