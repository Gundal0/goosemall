/**
 * [실행 순서 6단계: 개별 페이지 컴포넌트 렌더링 (app/page.tsx)]
 * 사용자가 사이트 홈('/')에 접속했을 때 보여주는 페이지 컴포넌트 파일입니다.
 * 2단계(layout.tsx)의 {children} 영역으로 들어가 화면에 렌더링됩니다.
 */

// 6.1: 다른 위치에서 정의된 공통 UI 컴포넌트 가져오기
// - `@/`는 tsconfig.json에 정의된 절대 경로 단축키(Path Alias)로, 프로젝트 루트 디렉터리를 가리킵니다.
import { Button } from "@/components/ui/button" // 5단계에서 정의한 Button 컴포넌트 가져오기
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card" // 4단계에서 정의한 Card 패밀리 컴포넌트들 가져오기

/**
 * 6.2: Home 컴포넌트
 * Next.js App Router에서는 폴더별 page.tsx에서 'export default'로 내보낸 컴포넌트가 해당 경로의 페이지가 됩니다.
 */
export default function Home() {
  return (
    // 6.3: JSX (JavaScript XML) 반환
    // HTML 태그와 유사하게 작성되지만 Javascript 코드로 변환되어 동작합니다.
    // - flex, min-h-screen, items-center, justify-center 등의 Tailwind CSS 클래스를 사용하여 화면 중앙 정렬 레이아웃을 잡습니다.
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      
      {/* 4단계에서 배운 Card 컴포넌트를 사용하고 너비를 350px로 강제 지정 */}
      <Card className="w-[350px]">
        {/* 카드 헤더 영역 */}
        <CardHeader>
          <CardTitle>새로운 웹사이트</CardTitle>
          <CardDescription>Next.js와 shadcn/ui로 구축 중입니다.</CardDescription>
        </CardHeader>
        
        {/* 카드 본문 영역 */}
        <CardContent>
          <p className="text-sm text-slate-600">
            여기에 블로그 글이나 상품 정보를 매력적으로 배치할 수 있습니다.
          </p>
        </CardContent>
        
        {/* 카드 하단 버튼 영역 */}
        <CardFooter className="flex justify-between">
          {/* 5단계에서 배운 Button 컴포넌트에 각각의 스타일 변형(variant) 적용 */}
          <Button variant="outline">취소</Button>
          <Button>자세히 보기</Button>
        </CardFooter>
      </Card>
      
    </main>
  )
}

