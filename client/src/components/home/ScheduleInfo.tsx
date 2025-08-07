import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Coffee,
  MapPin,
  TrainFront,
  Car,
  Laptop,
} from "lucide-react";

export function ScheduleInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            강의 일정 및 장소
          </h2>
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
                    <h3 className="text-xl font-bold text-navy-dark mb-2">
                      강의 일정
                    </h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="mr-3 text-replit-orange w-5 h-5" />
                        <span>2025년 8월 23일 (토)</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-3 text-replit-orange w-5 h-5" />
                        <span>오후 1시 - 오후 4시 (3시간)</span>
                      </div>
                      <div className="flex items-center">
                        <Coffee className="mr-3 text-replit-orange w-5 h-5" />
                        <span>커피 제공</span>
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
                    <h3 className="text-xl font-bold text-navy-dark mb-2">
                      강의 장소
                    </h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="font-semibold text-navy-dark">
                        스파크 플러스 신논현점
                      </div>
                      <div>서울 강남구 봉은사로 125 리스트빌딩 B2, B1, 2층</div>
                      <div className="flex items-center">
                        <TrainFront className="mr-3 text-replit-orange w-5 h-5" />
                        <span>신논현역 3번 출구에서 322m</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="mr-3 text-replit-orange w-5 h-5" />
                        <span>주차 불가</span>
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
                    <h3 className="text-xl font-bold text-navy-dark mb-2">
                      준비물
                    </h3>
                    <div className="space-y-2 text-slate-600">
                      <div>• 노트북 (Windows/Mac 모두 가능)</div>
                      <div>• 인터넷 연결 가능한 환경</div>
                      <div>• 리플릿 계정 (유료 필수)</div>
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
                  <div className="text-navy-dark font-bold mb-1">
                    커피, 화장실 등 시설 완비
                  </div>
                  <div className="text-sm text-slate-600">
                    쾌적한 학습 환경에서 집중해보세요
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
