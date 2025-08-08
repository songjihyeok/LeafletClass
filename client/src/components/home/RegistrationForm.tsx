import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  insertRegistrationSchema,
  type InsertRegistration,
} from "@shared/schema";
import { NotebookPen } from "lucide-react";

export function RegistrationForm() {
  const { toast } = useToast();

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

  return (
    <section id="registration" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            수강 신청
          </h2>
          <p className="text-xl text-slate-600">
            아래 정보를 입력하고 레플릿 마스터가 되어보세요
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-dark font-semibold">
                          이름 *
                        </FormLabel>
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
                        <FormLabel className="text-navy-dark font-semibold">
                          연락처 *
                        </FormLabel>
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
                      <FormLabel className="text-navy-dark font-semibold">
                        이메일 *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="hello@example.com"
                          {...field}
                        />
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
                      <FormLabel className="text-navy-dark font-semibold">
                        리플렛 개발 경험
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="경험 수준을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">입문자</SelectItem>
                          <SelectItem value="novice">
                            초급자 (6개월 - 1년)
                          </SelectItem>
                          <SelectItem value="intermediate">
                            중급자 (1년 - )
                          </SelectItem>
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
                      <FormLabel className="text-navy-dark font-semibold">
                        수강 동기 및 기대사항
                      </FormLabel>
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
                  <label
                    htmlFor="privacy"
                    className="text-slate-600 leading-relaxed text-sm"
                  >
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 강의 운영
                    목적으로만 사용됩니다.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-replit-orange hover:bg-orange-600 text-white py-4 text-lg"
                  size="lg"
                  disabled={registrationMutation.isPending}
                >
                  <NotebookPen className="w-5 h-5 mr-2" />
                  {registrationMutation.isPending
                    ? "신청 중..."
                    : "수강 신청 완료하기"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
