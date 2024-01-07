import Link from 'next/link';
import style from './style.module.css';
import { getWeather } from '@/utils/getWeather';

export default async function Home() {
  const data = await getWeather('seoul');
  console.log(data);

  return (
    <>
      <h1>main</h1>
      <ul className={style.list}>
        <li>
          <Link href='/seoul'>서울</Link>
        </li>
        <li>
          <Link href='/newyork'>뉴욕</Link>
        </li>
        <li>
          <Link href='/london'>런던</Link>
        </li>
      </ul>
    </>
  );
}
