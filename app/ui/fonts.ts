import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

// 구글폰트에서 변수방식 지원하는 경우 굵기입력 안 함.
export const montserrat = Montserrat({
  subsets: ['latin'], // 영문
  // 브라우저의 폰트 표현방식을 swap으로 하여 시스템 폰트로 보여준 후,
  // 웹폰트 다운로드 되면 웹폰트로 보여짐.
  // 보여준 후, 치환.
  display: 'swap',
});

// 변수방식 아닌 경우, weight 지정해야 함.
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// 구글폰트에 없는 로컬폰트
export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
