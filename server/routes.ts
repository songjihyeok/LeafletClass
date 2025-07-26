import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // 수강 신청 등록
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      res.json({ success: true, data: registration });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "입력 데이터가 올바르지 않습니다", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "서버 오류가 발생했습니다" 
        });
      }
    }
  });

  // 등록 현황 조회 (관리자용)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json({ success: true, data: registrations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "서버 오류가 발생했습니다" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
