/**
 * [실행 순서 4단계: 카드 UI 구성 컴포넌트 정의 (components/ui/card.tsx)]
 * shadcn/ui 기반으로 작성된 카드 레이아웃 컴포넌트 파일입니다.
 * 웹 브라우저에서 화면을 예쁘게 구획하고 내용을 배치하기 위해 세분화된 React 서브 컴포넌트들을 제공합니다.
 */

import * as React from "react"

import { cn } from "@/lib/utils" // 3단계에서 만든 클래스 병합 유틸리티 함수 가져오기

/**
 * 4.1: Card 컴포넌트
 * 카드의 가장 외곽 틀을 이루는 메인 컨테이너입니다.
 * 
 * - React.ComponentProps<"div">: 기본 <div> 태그가 수용하는 모든 HTML 속성(id, onClick, style 등)과 타입을 상속합니다.
 * - size: "default"와 "sm" 두 가지 크기 옵션을 커스텀 속성(Prop)으로 받습니다.
 * - {...props}: 구조 분해 할당(Destructuring) 후 남은 모든 속성들을 하위 <div>에 그대로 위임(Forwarding)합니다.
 */
function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card" // CSS 스타일링이나 테스트 선택자용 커스텀 데이터 속성
      data-size={size}
      className={cn(
        // group/card: Tailwind v4의 그룹 네임스페이스 기능. 카드 자식 요소가 부모 상태에 반응할 때 사용
        // ring-1 ring-foreground/10: 은은한 카드 테두리 선 구현
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className // 사용자가 컴포넌트 호출 시 주입하는 외부 클래스를 병합
      )}
      {...props}
    />
  )
}

/**
 * 4.2: CardHeader 컴포넌트
 * 카드의 상단 제목과 부제목이 들어갈 헤더 영역입니다.
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

/**
 * 4.3: CardTitle 컴포넌트
 * 카드의 굵고 돋보이는 대표 제목을 렌더링합니다.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * 4.4: CardDescription 컴포넌트
 * 카드의 설명글이나 보조 텍스트용 회색빛 설명 영역입니다.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

/**
 * 4.5: CardAction 컴포넌트
 * 카드 우측 상단 등에 배치되는 부가 액션(예: 더보기 버튼, 아이콘 등)을 담는 슬롯입니다.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * 4.6: CardContent 컴포넌트
 * 카드의 메인 본문 내용을 배치하는 표준 콘텐츠 패딩 영역입니다.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

/**
 * 4.7: CardFooter 컴포넌트
 * 하단 버튼 영역 등을 정렬해 주는 카드의 마지막 꼬리표 영역입니다.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

// 4.8: 서브 컴포넌트들을 각각 명시적 이름으로 내보내어 page.tsx에서 구조 분해 할당으로 꺼내 쓸 수 있게 함
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

