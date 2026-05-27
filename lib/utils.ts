/**
 * [실행 순서 3단계: 클래스 병합 유틸리티 함수 정의 (lib/utils.ts)]
 * shadcn/ui 컴포넌트가 스타일을 조건부로 조합하고 충돌을 해결하기 위해 사용하는 공통 유틸리티 함수입니다.
 */

import { clsx, type ClassValue } from "clsx" // 조건부 클래스 조합을 위한 유틸리티 패키지
import { twMerge } from "tailwind-merge" // 중복되거나 충돌하는 Tailwind CSS 클래스를 병합해주는 패키지

/**
 * 3.1: cn 함수
 * @param inputs 클래스 목록 (문자열, 객체, 배열 등 다양한 형태로 전달 가능)
 * @returns 최종적으로 정리된 하나의 HTML 클래스 문자열
 * 
 * 동작 방식 예시:
 * cn("px-4 py-2", isLarge && "px-6") 
 *   -> clsx가 처리: "px-4 py-2 px-6" (조건에 맞춰 배열을 단일 문자열로 병합)
 *   -> twMerge가 처리: "py-2 px-6" (px-4와 px-6이 충돌하므로 마지막에 온 px-6만 남김)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

