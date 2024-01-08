import HomeButton from '../../components/HomeButton';
import { getForecast } from '@/utils/getForecast';

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨 정보를 알려드립니다.`,
  };
}

// async/await는 서버 컴포넌트에서만 사용
// 클라이언트 컴포넌트에서는 useEffect 내부에서 API 요청을 하고 응답받은 데이터를 상태로 관리
export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;

  const res = await getForecast(params.location);
  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
