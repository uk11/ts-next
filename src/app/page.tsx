import Link from 'next/link';
import style from './style.module.css';
import { getWeather } from '@/utils/getWeather';
import { getTime } from '@/utils/getTime';
import RevalidateButton from '@/components/RevalidateButton';

export default async function Home() {
  const res = await getWeather('seoul');
  const time = await getTime(res.location.tz_id);

  return (
    <>
      <h1>날씨 앱</h1>
      <div>{time.dateTime}</div>
      <ul className={style.list}>
        <li>
          <Link href='/seoul?name=서울'>서울</Link>
          <span>{res.current.condition.text}</span>
        </li>
        <li>
          <Link href='/NYC?name=뉴욕'>뉴욕</Link>
        </li>
        <li>
          <Link href='/london?name=런던'>런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={'time'} />
    </>
  );
}
