import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// For prisma to not be affected by hot reload from nextjs
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
