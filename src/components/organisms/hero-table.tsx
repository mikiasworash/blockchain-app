import { DataTable } from './data-table';
import { tokenColumns } from './token-columns';
import { Token } from '@prisma/client';

interface HeroTableProps {
  tokens: Token[];
}

export default function HeroTable({ tokens }: HeroTableProps) {
  return <DataTable data={tokens} columns={tokenColumns} />;
}
