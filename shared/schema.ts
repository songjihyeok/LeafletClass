import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  experience: text("experience").notNull(),
  motivation: text("motivation"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).pick({
  name: true,
  email: true,
  phone: true,
  experience: true,
  motivation: true,
}).extend({
  name: z.string().min(2, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(10, "올바른 연락처를 입력해주세요"),
  experience: z.string().min(1, "경험 수준을 선택해주세요"),
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
