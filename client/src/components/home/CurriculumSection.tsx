import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Network,
  Settings,
  GitBranch,
  Image,
  Shield,
  Globe,
} from "lucide-react";

const curriculumItems = [
  {
    icon: Network,
    title: "웹 서비스 구조 이해하기",
    description:
      "프론트엔드, 백엔드, 데이터베이스의 역할과 상호작용. 전체적인 웹 서비스 아키텍처를 이해하고 리플릿에서 어떻게 구현되는지 배웁니다.",
    duration: "20분",
  },
  {
    icon: Settings,
    title: "비용 절감을 위한 리플릿 초기 세팅",
    description:
      "리플릿 계정 가입부터 프럼프트 노하우 공유까지, 개발 비용을 최소화하면서 리플렛으로 개발하는 노하우를 전수합니다.",
    duration: "40분",
  },
  {
    icon: Image,
    title: "리플렛 개발시 필요한 개념 숙지",
    description:
      "이미지 관리하는 법, 데이터 베이스 관리하고 보는 법, 로그인 관리하는 법",
    duration: "20분",
  },
  {
    icon: GitBranch,
    title: "깃 관리하기",
    description:
      "리플릿 환경에서의 Git 활용법. 버전 관리부터 협업까지, 리플릿과 깃허브를 연동한 효율적인 개발 워크플로우를 배웁니다.",
    duration: "30분",
  },
  {
    icon: Globe,
    title: "내 노트북에서 실행하기",
    description:
      "리플렛에서 가져온 코드를 가지고 내 노트북에서 실행시켜봅니다. 환경변수, 포트 개념 이해해봅니다.",
    duration: "40분",
  },
  {
    icon: Shield,
    title: "애프터 리플렛",
    description: "리플렛으로 만든 서비스 고도화하기, 기획자의 커서 이용법",
    duration: "30분",
  },
];

export function CurriculumSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            강의 커리큘럼
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            6개의 핵심 모듈로 구성된 체계적인 커리큘럼으로 리플릿을 시작하세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {item.duration}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
