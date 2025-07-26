import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertRegistrationSchema, type InsertRegistration } from "@shared/schema";
import { 
  Code, 
  Users, 
  Clock, 
  Calendar, 
  MapPin, 
  Laptop, 
  Settings, 
  GitBranch, 
  Image, 
  Shield, 
  Star, 
  Briefcase, 
  CheckCircle,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  Flame,
  CalendarPlus,
  Coffee,
  TrainFront,
  Car,
  Tag,
  ShieldCheck,
  NotebookPen,
  Globe,
  Network
} from "lucide-react";

export default function Home() {
  const { toast } = useToast();
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  
  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
      motivation: "",
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "수강 신청 완료!",
        description: "곧 담당자가 연락드리겠습니다.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "신청 실패",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    registrationMutation.mutate(data);
  };

  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start" 
    });
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "프로그래밍 초보자도 수강할 수 있나요?",
      answer: "네, 가능합니다. 이 강의는 리플릿 활용에 중점을 두고 있어 기본적인 웹 개발 지식만 있으면 충분히 따라오실 수 있습니다. 강의 중에도 이해가 어려운 부분은 개별적으로 도움을 드립니다."
    },
    {
      question: "강의 자료는 제공되나요?",
      answer: "강의에서 사용한 모든 예제 코드와 PPT 자료를 제공합니다. 또한 추가 학습을 위한 참고 자료 링크도 함께 드립니다."
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "강의 시작 3일 전까지는 100% 환불이 가능합니다. 그 이후에는 준비된 자료 비용을 제외하고 50% 환불해드립니다."
    },
    {
      question: "강의 후 지원은 어떻게 받을 수 있나요?",
      answer: "강의 후 1개월간 이메일과 슬랙 채널을 통해 질문을 받습니다. 또한 월 1회 온라인 Q&A 세션도 진행합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-replit-orange rounded-lg flex items-center justify-center">
                <Code className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold text-navy-dark">리플릿 마스터 클래스</h1>
            </div>
            <Button 
              onClick={scrollToRegistration}
              className="bg-replit-orange hover:bg-orange-600 text-white"
            >
              지금 신청하기
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="inline-flex items-center bg-replit-orange/20 text-orange-200 px-4 py-2 mb-6">
                <Flame className="w-4 h-4 mr-2" />
                단 10명 한정 모집
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                리플릿으로 시작하는<br />
                <span className="text-replit-orange">실무 개발 환경</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                비용 절감부터 실무 활용까지, 리플릿의 모든 것을 3시간 만에 완전 정복하세요. 
                오프라인 강의로 직접 실습하며 배워보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToRegistration}
                  size="lg"
                  className="bg-replit-orange hover:bg-orange-600 text-white"
                >
                  <CalendarPlus className="w-5 h-5 mr-2" />
                  수강 신청하기
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-replit-orange">3시간</div>
                  <div className="text-sm text-slate-400">집중 교육</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-replit-orange">10명</div>
                  <div className="text-sm text-slate-400">소수 정예</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-replit-orange">3만원</div>
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
                  <span className="text-slate-900 font-medium">실시간 코딩 실습</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              💸 이런 실수로 돈 날리고 계시나요?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              대부분의 개발자들이 모르고 하는 리플릿 사용 실수들
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-200">
                <h3 className="text-2xl font-bold text-red-600 mb-6">❌ 잘못된 사용법</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">무료 티어 한계 모르고 사용</div>
                      <div className="text-slate-600">월 15만원 추가 요금</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">비효율적인 프로젝트 구조</div>
                      <div className="text-slate-600">월 10만원 추가 요금</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">불필요한 유료 기능 사용</div>
                      <div className="text-slate-600">월 5만원 추가 요금</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-red-100">
                  <div className="text-2xl font-bold text-red-600">월 30만원+ 손실</div>
                  <div className="text-slate-600">연간 360만원 이상</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-600 mb-6">✅ 올바른 사용법</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">무료 티어 최대 활용법</div>
                      <div className="text-slate-600">월 15만원 절약</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">효율적인 프로젝트 관리</div>
                      <div className="text-slate-600">월 10만원 절약</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">필수 기능만 선별 사용</div>
                      <div className="text-slate-600">월 5만원 절약</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-green-100">
                  <div className="text-2xl font-bold text-green-600">월 30만원+ 절약</div>
                  <div className="text-slate-600">연간 360만원 이상</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-replit-orange to-orange-600 p-8 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">3만원 투자로 연간 360만원 절약</h3>
              <p className="text-xl text-orange-100 mb-6">
                ROI 12,000% - 1년간 120배의 가치를 돌려받으세요
              </p>
              <Button 
                onClick={scrollToRegistration}
                size="lg"
                className="bg-white text-replit-orange hover:bg-orange-50"
              >
                <CalendarPlus className="w-5 h-5 mr-2" />
                지금 신청해서 돈 아끼기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">강의 커리큘럼</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              6개의 핵심 모듈로 구성된 체계적인 커리큘럼으로 리플릿을 완전히 마스터하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Network className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">웹 서비스 구조 이해하기</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      프론트엔드, 백엔드, 데이터베이스의 역할과 상호작용. 전체적인 웹 서비스 
                      아키텍처를 이해하고 리플릿에서 어떻게 구현되는지 배웁니다.
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      20분
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">비용 절감을 위한 리플릿 초기 세팅</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      리플릿 계정 설정부터 무료 티어 최대 활용법까지. 개발 비용을 최소화하면서 
                      최적의 개발 환경을 구축하는 노하우를 전수합니다.
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      40분
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <GitBranch className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">깃 관리하기</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      리플릿 환경에서의 Git 활용법. 버전 관리부터 협업까지, 
                      리플릿과 깃허브를 연동한 효율적인 개발 워크플로우를 배웁니다.
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      30분
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">이미지 관리하기</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      정적 파일 호스팅부터 이미지 최적화까지. 리플릿에서 미디어 파일을 
                      효율적으로 관리하고 배포하는 전문적인 방법을 익힙니다.
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      30분
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">로그인 관리하기</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      사용자 인증 시스템 구축과 보안 설정. OAuth부터 세션 관리까지, 
                      안전하고 사용자 친화적인 로그인 시스템을 완성합니다.
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      50분
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark mb-3">도메인 연결하기</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      커스텀 도메인 설정과 DNS 관리. 리플릿 프로젝트에 개인 도메인을 
                      연결하여 전문적인 웹사이트를 완성하는 방법을 배웁니다.
                    </p>
                    <div className="flex items-center text-replit-orange font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      10분
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">강사 소개</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-dark mb-2">김개발 개발자</h3>
                  <p className="text-replit-orange font-semibold mb-4">시니어 풀스택 개발자 | 리플릿 에반젤리스트</p>
                  <p className="text-slate-600 leading-relaxed">
                    5년간 스타트업과 대기업에서 다양한 프로젝트를 진행하며, 
                    리플릿을 활용한 빠른 프로토타이핑과 배포 전문가로 활동하고 있습니다. 
                    개발자들의 생산성 향상에 관심이 많으며, 실무에서 바로 활용 가능한 
                    실용적인 지식을 전달하는 것을 목표로 합니다.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-replit-orange" />
                    <span className="text-slate-700">5년+ 개발 경력</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-replit-orange" />
                    <span className="text-slate-700">500+ 수강생 지도</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-replit-orange" />
                    <span className="text-slate-700">4.9/5 강의 평점</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="text-replit-orange" />
                    <span className="text-slate-700">리플릿 인증 강사</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional instructor" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-replit-orange">4.9★</div>
                  <div className="text-sm text-slate-600">수강생 평점</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">수강료 및 모집 정보</h2>
            <p className="text-xl text-slate-600">
              소수 정예로 진행되는 프리미엄 오프라인 강의
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
                <div className="text-lg text-orange-100 mb-2">💰 평생 360만원 절약하는</div>
                <div className="text-5xl md:text-6xl font-bold mb-2">30,000원</div>
                <div className="text-xl opacity-90">ROI 12,000% 보장 투자</div>
                <div className="text-sm opacity-75">월 30만원씩 나가는 돈을 아끼세요</div>
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
                  <div className="font-semibold">수료증</div>
                  <div className="text-sm opacity-75">완주 시 발급</div>
                </div>
              </div>

              <Button 
                onClick={scrollToRegistration}
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

      {/* Registration Form */}
      <section id="registration" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">수강 신청</h2>
            <p className="text-xl text-slate-600">
              아래 정보를 입력하고 리플릿 마스터가 되어보세요
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-dark font-semibold">이름 *</FormLabel>
                          <FormControl>
                            <Input placeholder="홍길동" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-dark font-semibold">연락처 *</FormLabel>
                          <FormControl>
                            <Input placeholder="010-1234-5678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-dark font-semibold">이메일 *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="hello@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-dark font-semibold">개발 경험</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="경험 수준을 선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">입문자 (6개월 미만)</SelectItem>
                            <SelectItem value="novice">초급자 (6개월 - 1년)</SelectItem>
                            <SelectItem value="intermediate">중급자 (1년 - 3년)</SelectItem>
                            <SelectItem value="advanced">고급자 (3년 이상)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-dark font-semibold">수강 동기 및 기대사항</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="이 강의를 통해 얻고 싶은 것이나 궁금한 점을 자유롭게 작성해주세요" 
                            rows={4}
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-start space-x-3">
                    <Checkbox id="privacy" required />
                    <label htmlFor="privacy" className="text-slate-600 leading-relaxed text-sm">
                      개인정보 수집 및 이용에 동의합니다. 수집된 정보는 강의 운영 목적으로만 사용됩니다.
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-replit-orange hover:bg-orange-600 text-white py-4 text-lg"
                    size="lg"
                    disabled={registrationMutation.isPending}
                  >
                    <NotebookPen className="w-5 h-5 mr-2" />
                    {registrationMutation.isPending ? "신청 중..." : "수강 신청 완료하기"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">강의 일정 및 장소</h2>
            <p className="text-xl text-slate-600">
              편리한 접근성과 최적의 학습 환경을 제공합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center">
                      <Calendar className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-dark mb-2">강의 일정</h3>
                      <div className="space-y-2 text-slate-600">
                        <div className="flex items-center">
                          <Calendar className="mr-3 text-replit-orange w-5 h-5" />
                          <span>2024년 3월 23일 (토)</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-3 text-replit-orange w-5 h-5" />
                          <span>오전 10시 - 오후 2시 (4시간)</span>
                        </div>
                        <div className="flex items-center">
                          <Coffee className="mr-3 text-replit-orange w-5 h-5" />
                          <span>점심시간 포함 (12시-1시)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center">
                      <MapPin className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-dark mb-2">강의 장소</h3>
                      <div className="space-y-2 text-slate-600">
                        <div className="font-semibold text-navy-dark">스마트워크센터 강남점</div>
                        <div>서울시 강남구 테헤란로 427, 위워크타워 8층</div>
                        <div className="flex items-center">
                          <TrainFront className="mr-3 text-replit-orange w-5 h-5" />
                          <span>2호선 강남역 11번 출구 도보 3분</span>
                        </div>
                        <div className="flex items-center">
                          <Car className="mr-3 text-replit-orange w-5 h-5" />
                          <span>건물 내 주차 가능 (2시간 무료)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-replit-orange rounded-xl flex items-center justify-center">
                      <Laptop className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-dark mb-2">준비물</h3>
                      <div className="space-y-2 text-slate-600">
                        <div>• 노트북 (Windows/Mac 모두 가능)</div>
                        <div>• 인터넷 연결 가능한 환경</div>
                        <div>• 리플릿 계정 (강의 중 생성 도움)</div>
                        <div>• 필기도구 및 노트</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900" 
                  alt="Modern training classroom" 
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-center">
                    <div className="text-navy-dark font-bold mb-1">최신 시설 완비</div>
                    <div className="text-sm text-slate-600">쾌적한 학습 환경에서 집중해보세요</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-slate-600">
              궁금한 점이 있으시면 확인해보세요
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button 
                  className="w-full p-6 text-left hover:bg-slate-50 transition-colors flex items-center justify-between group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-navy-dark group-hover:text-replit-orange transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 group-hover:text-replit-orange transition-all duration-200 ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">문의하기</h2>
          <p className="text-xl text-slate-600 mb-12">
            추가 궁금한 점이 있으시면 언제든 연락해주세요
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-replit-orange text-xl" />
              </div>
              <h3 className="font-bold text-navy-dark mb-2">이메일</h3>
              <p className="text-slate-600">contact@replitclass.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-replit-orange text-xl" />
              </div>
              <h3 className="font-bold text-navy-dark mb-2">전화</h3>
              <p className="text-slate-600">02-1234-5678</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-replit-orange text-xl" />
              </div>
              <h3 className="font-bold text-navy-dark mb-2">디스코드</h3>
              <p className="text-slate-600">ReplitClass#1234</p>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-replit-orange to-orange-600 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">지금 바로 시작하세요!</h3>
              <p className="text-xl mb-6 opacity-90">단 10명만 모집하는 특별한 기회를 놓치지 마세요</p>
              <Button 
                onClick={scrollToRegistration}
                className="bg-white text-replit-orange hover:bg-slate-100 text-lg px-8 py-4"
                size="lg"
              >
                수강 신청하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-replit-orange rounded-lg flex items-center justify-center">
                <Code className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold">리플릿 마스터 클래스</span>
            </div>
            <div className="text-sm text-slate-400">
              © 2024 Replit Master Class. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
