/**
 * [실행 순서 5단계: 버튼 UI 구성 컴포넌트 정의 (components/ui/card.tsx -> components/ui/button.tsx)]
 * 다양한 스타일 테마와 크기를 체계적으로 다룰 수 있는 범용 버튼 컴포넌트입니다.
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority" // 컴포넌트의 스타일 변형(Variants)을 쉽게 빌드하게 돕는 라이브러리
import { Slot } from "radix-ui" // Radix UI의 컴포넌트로, 자식 요소를 병합(asChild 패턴)하여 유연하게 태그를 렌더링하기 위해 사용

import { cn } from "@/lib/utils" // 3단계에서 작성한 클래스 병합 유틸리티 가져오기

/**
 * 5.1: buttonVariants 정의 (cva 함수)
 * 첫 번째 인자: 공통으로 적용될 기본 Tailwind 클래스 문자열
 * 두 번째 인자: variant(테마)와 size(크기)에 따른 조건부 클래스 조합 정의
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      // 다양한 디자인 종류 정의
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // 크기 종류 정의
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    // 속성이 지정되지 않았을 때 적용할 기본값
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * 5.2: Button 컴포넌트
 * 
 * - React.ComponentProps<"button">: <button> 엘리먼트의 표준 속성(type, onClick, disabled 등)을 상속받습니다.
 * - VariantProps<typeof buttonVariants>: cva로 지정된 variant, size 옵션 타입을 상속받습니다.
 * - asChild: true일 경우, 자신이 <button> 태그를 생성하지 않고 전달받은 직계 자식 엘리먼트에 자신의 스타일(클래스)과 이벤트를 그대로 입혀 렌더링하는 다형성 패턴을 지원합니다.
 */
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  // asChild 옵션에 따라 Slot.Root 또는 실제 button 태그를 컴포넌트로 동적 할당
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      // buttonVariants 함수에 variant, size를 인자로 넘겨 생성된 클래스 문자열과 사용자가 넘겨준 className을 cn 함수로 병합
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

