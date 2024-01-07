import HomeButton from '../../components/HomeButton';
import { getForecast } from '@/utils/getForecast';

type Props = {
  params: {
    location: string;
  };
};

// async/await는 서버 컴포넌트에서만 사용
// 클라이언트 컴포넌트에서는 useEffect 내부에서 API 요청을 하고 응답받은 데이터를 상태로 관리
export default async function Detail({ params }: Props) {
  const name = params.location === 'seoul' ? '서울' : '';

  const data = await getForecast('seoul');
  return (
    <>
      <h1>{params.location}의 3일 예보</h1>
      <HomeButton />
    </>
  );
}
