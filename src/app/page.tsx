import { Hero, HeroTable, Swap as SwapComponent } from '@/components/organisms';
import { Token } from '@prisma/client';
import { getTokens } from '../actions/getTokens';

export default async function Home() {
  const tokens: Token[] = await getTokens();

  return (
    <main className="p-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <Hero />
        <HeroTable tokens={tokens} />
        <SwapComponent />
      </div>
    </main>
  );
}
