import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    title: "이커머스 플랫폼",
    description: "React와 Node.js로 구축한 풀스택 온라인 쇼핑몰. 결제 시스템과 재고 관리 기능 포함.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "실시간 대시보드",
    description: "WebSocket을 활용한 실시간 데이터 시각화 대시보드. 차트와 그래프로 데이터 인사이트 제공.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["Vue.js", "Socket.io", "D3.js"]
  },
  {
    title: "소셜 미디어 앱",
    description: "사용자 인증, 실시간 채팅, 피드 기능을 갖춘 소셜 네트워킹 서비스.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["Next.js", "Firebase", "Tailwind"]
  },
  {
    title: "업무 관리 시스템",
    description: "칸반 보드와 타임라인을 활용한 프로젝트 관리 도구. 팀 협업 기능 포함.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["Angular", "Express", "MongoDB"]
  },
  {
    title: "온라인 학습 플랫폼",
    description: "동영상 스트리밍과 퀴즈 기능을 갖춘 교육 플랫폼. 학습 진도 추적 시스템 구현.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["React", "Python", "Redis"]
  },
  {
    title: "예약 관리 시스템",
    description: "캘린더 기반 예약 시스템과 자동 알림 기능. 결제 연동 및 대기자 관리 기능 포함.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    tech: ["Vue.js", "Laravel", "MySQL"]
  }
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
            리플릿으로 구현한 다양한 프로젝트들을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group overflow-hidden">
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
                <p className="text-slate-600 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-slate-100 text-slate-700">
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
                이 모든 프로젝트가 리플릿으로 제작되었습니다
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