'use server';

import { db } from '@/lib/db';
import { Token } from '@prisma/client';

export async function getTokens(): Promise<Token[]> {
  try {
    const tokens = await db.token.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return tokens;
  } catch (error) {
    console.log('Error fetching tokens: ', error);

    return [];
  }
}
