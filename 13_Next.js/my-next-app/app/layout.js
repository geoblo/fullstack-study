import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 상단바를 레이아웃으로 만들고 재사용하기
          모든 페이지에 공통으로 보일 UI는 layout.js에 작성 => 하위 페이지에 적용
          
          동작원리:
          1) layout.js가 있으면 그걸로 page.js를 담아서 보여줌
          2) 상위 폴더에 layout.js가 있으면 그걸로 하위 레이아웃 담아서 보여줌
        */}
        <nav className='navbar'>
          <Link href="/">홈</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
        </nav>

        {/* children: page.js를 받아옴 */}
        {children}
      </body>
    </html>
  )
}
