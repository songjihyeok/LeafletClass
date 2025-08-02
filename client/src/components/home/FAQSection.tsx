import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "프로그래밍 초보자도 수강할 수 있나요?",
    answer:
      "네, 가능합니다. 이 강의는 리플릿 활용에 중점을 두고 있어 아예 모르는 분도 충분히 따라오실 수 있습니다. 강의 중에도 이해가 어려운 부분은 개별적으로 도움을 드립니다.",
  },
  {
    question: "강의 자료는 제공되나요?",
    answer: "강의에서 사용한 모든 예제 코드와 PPT 자료를 제공합니다.",
  },
  {
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "강의 시작 3일 전까지는 100% 환불이 가능합니다. 그 이후에는 환불이 불가합니다.",
  },
  {
    question: "강의 후 지원은 어떻게 받을 수 있나요?",
    answer:
      "강의 후에는 vibecodinghelpers.com 을 통해서 유료로 도움을 받을 수 있습니다.",
  },
];

export function FAQSection() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            자주 묻는 질문
          </h2>
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
                    faqOpen === index ? "rotate-180" : ""
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
  );
}