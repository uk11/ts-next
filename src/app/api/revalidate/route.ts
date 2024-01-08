import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag');
  if (!tag) throw new Error('태그는 필수입니다.');

  // tag가 달려있는 fetch 요청을 재검증(캐시 풀기)
  revalidateTag(tag);
  return NextResponse.json({ message: '재검증에 성공했습니다.', tag });
}
