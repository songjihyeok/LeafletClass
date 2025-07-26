import { type Registration, type InsertRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getRegistration(id: string): Promise<Registration | undefined>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
}

export class MemStorage implements IStorage {
  private registrations: Map<string, Registration>;

  constructor() {
    this.registrations = new Map();
  }

  async getRegistration(id: string): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = { 
      ...insertRegistration, 
      id,
      createdAt: new Date()
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }
}

export const storage = new MemStorage();
