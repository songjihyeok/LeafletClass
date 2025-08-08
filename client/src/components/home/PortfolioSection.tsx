import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    title: "CVS 트레커",
    description:
      "개발을 1도 모르는 사람이 만든 CVS 관리 시스템. 강사를 통해 버그 해결, 기능 추가, UI 개선을 받아 현재 운영중입니다",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["React", "Node.js", "Replit"],
  },
  {
    title: "같아 가요",
    description:
      "인증된 사용자들이 모임을 만들고 참여할 수 있는 플랫폼. 모임 생성, 참여, 관리 기능을 제공합니다. 강사를 통해 UI/UX 개선과 기능 추가 받아 MVP 테스팅 진행중입니다",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["React", "Node.js", "Replit", "cursor"],
  },
  {
    title: "AI 트레이너 서비스",
    description:
      "인공지능 기반의 개인 트레이너 서비스. 운동 루틴 제공, 관리 서비스.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["React.js", "Node.js", "Tailwind"],
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            포트폴리오
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            레플릿으로 구현한 다양한 프로젝트들을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow group overflow-hidden"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-replit-orange to-orange-600 border-0 text-white inline-block">
            <CardContent className="p-6">
              <p className="text-lg mb-2">
                이 프로젝트들은 레플릿으로 제작되었습니다
              </p>
              <p className="text-sm opacity-90">
                강의를 통해 여러분도 이런 프로젝트를 만들 수 있습니다
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
