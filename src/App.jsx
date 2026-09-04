import { useState } from 'react'
import './App.css'

const categories = [
  {
    icon: '💰',
    title: '돈 · 세금',
    desc: '월급과 세금이 궁금하다면',
  },
  {
    icon: '🏠',
    title: '주거',
    desc: '자취와 집에 관한 모든 것',
  },
  {
    icon: '🧾',
    title: '공과금',
    desc: '전기·가스·수도 관리',
  },
  {
    icon: '🏥',
    title: '보험',
    desc: '4대보험부터 민간보험까지',
  },
  {
    icon: '🏛️',
    title: '행정',
    desc: '전입신고·각종 민원',
  },
  {
    icon: '💼',
    title: '직장생활',
    desc: '입사 후 꼭 알아야 할 것',
  },
]

// =====================================================
// 맞춤 할 일 생성
// =====================================================

function generateTasks(profile) {
  const newTasks = []

  // -------------------------
  // 직장인
  // -------------------------

  if (profile.job === '직장인') {
    newTasks.push(
      {
        id: 'worker-insurance',
        title: '4대보험 가입 확인',
        category: '직장생활',
        urgent: true,
        done: false,
      },
      {
        id: 'worker-pay',
        title: '급여명세서 확인',
        category: '돈 · 세금',
        urgent: true,
        done: false,
      },
      {
        id: 'worker-tax',
        title: '월급에서 빠지는 세금 알아보기',
        category: '돈 · 세금',
        urgent: false,
        done: false,
      }
    )
  }

  // -------------------------
  // 학생
  // -------------------------

  if (profile.job === '학생') {
    if (profile.hasIncome === '있음') {
      if (profile.incomeType === '아르바이트') {
        newTasks.push(
          {
            id: 'student-contract',
            title: '아르바이트 근로계약서 확인',
            category: '직장생활',
            urgent: true,
            done: false,
          },
          {
            id: 'student-wage',
            title: '알바 급여명세서 확인',
            category: '돈 · 세금',
            urgent: false,
            done: false,
          },
          {
            id: 'student-weekly',
            title: '주휴수당 알아보기',
            category: '직장생활',
            urgent: false,
            done: false,
          },
          {
            id: 'student-tax',
            title: '알바 소득과 세금 알아보기',
            category: '돈 · 세금',
            urgent: false,
            done: false,
          }
        )
      }

      if (profile.incomeType === '지원금 · 장학금') {
        newTasks.push(
          {
            id: 'student-support',
            title: '받고 있는 지원금·장학금 확인',
            category: '돈 · 세금',
            urgent: true,
            done: false,
          },
          {
            id: 'student-support-date',
            title: '지원금 신청 및 지급 일정 확인',
            category: '행정',
            urgent: false,
            done: false,
          }
        )
      }

      if (profile.incomeType === '부모님 지원') {
        newTasks.push({
          id: 'student-family-support',
          title: '부모님 지원금 관리하기',
          category: '돈 · 세금',
          urgent: false,
          done: false,
        })
      }

      if (profile.incomeType === '기타') {
        newTasks.push({
          id: 'student-other-income',
          title: '내 수입의 종류와 관리 방법 알아보기',
          category: '돈 · 세금',
          urgent: false,
          done: false,
        })
      }
    }

    if (profile.hasIncome === '없음') {
      newTasks.push(
        {
          id: 'student-no-income',
          title: '받을 수 있는 청년 지원제도 확인',
          category: '행정',
          urgent: false,
          done: false,
        },
        {
          id: 'student-support-search',
          title: '장학금·지원금 찾아보기',
          category: '돈 · 세금',
          urgent: false,
          done: false,
        }
      )
    }
  }

  // -------------------------
  // 취업준비생
  // -------------------------

  if (profile.job === '취업 준비생') {
    if (profile.hasIncome === '있음') {
      if (profile.incomeType === '아르바이트') {
        newTasks.push(
          {
            id: 'job-contract',
            title: '아르바이트 근로계약서 확인',
            category: '직장생활',
            urgent: true,
            done: false,
          },
          {
            id: 'job-wage',
            title: '알바 급여명세서 확인',
            category: '돈 · 세금',
            urgent: false,
            done: false,
          },
          {
            id: 'job-weekly',
            title: '주휴수당 알아보기',
            category: '직장생활',
            urgent: false,
            done: false,
          },
          {
            id: 'job-tax',
            title: '알바 소득과 세금 알아보기',
            category: '돈 · 세금',
            urgent: false,
            done: false,
          }
        )
      }

      if (profile.incomeType === '지원금 · 장학금') {
        newTasks.push(
          {
            id: 'job-support',
            title: '현재 받고 있는 지원금 확인',
            category: '행정',
            urgent: true,
            done: false,
          },
          {
            id: 'job-support-date',
            title: '지원금 지급 일정 확인',
            category: '행정',
            urgent: false,
            done: false,
          }
        )
      }

      if (profile.incomeType === '부모님 지원') {
        newTasks.push({
          id: 'job-family-support',
          title: '생활비 관리 계획 세우기',
          category: '돈 · 세금',
          urgent: false,
          done: false,
        })
      }

      if (profile.incomeType === '기타') {
        newTasks.push({
          id: 'job-other-income',
          title: '현재 수입 관리 방법 알아보기',
          category: '돈 · 세금',
          urgent: false,
          done: false,
        })
      }
    }

    if (profile.hasIncome === '없음') {
      newTasks.push(
        {
          id: 'job-support-search',
          title: '청년 지원제도 확인하기',
          category: '행정',
          urgent: true,
          done: false,
        },
        {
          id: 'job-employment-support',
          title: '취업지원 프로그램 알아보기',
          category: '직장생활',
          urgent: false,
          done: false,
        }
      )
    }
  }

  // -------------------------
  // 자취
  // -------------------------

  if (profile.housing === '자취') {
    newTasks.push({
      id: 'housing-move',
      title: '전입신고 확인',
      category: '행정',
      urgent: true,
      done: false,
    })

    if (profile.rent === '월세') {
      newTasks.push({
        id: 'housing-rent',
        title: '월세 관련 혜택 알아보기',
        category: '주거',
        urgent: false,
        done: false,
      })
    }

    if (profile.rent === '전세') {
      newTasks.push({
        id: 'housing-jeonse',
        title: '전세 계약 관련 확인사항 알아보기',
        category: '주거',
        urgent: true,
        done: false,
      })
    }

    newTasks.push(
      {
        id: 'utility-electric',
        title: '전기요금 납부 방법 확인',
        category: '공과금',
        urgent: false,
        done: false,
      },
      {
        id: 'utility-gas',
        title: '도시가스 납부 방법 확인',
        category: '공과금',
        urgent: false,
        done: false,
      }
    )
  }

  // -------------------------
  // 자동차
  // -------------------------

  if (profile.car === '있음') {
    newTasks.push(
      {
        id: 'car-insurance',
        title: '자동차 보험 확인',
        category: '보험',
        urgent: true,
        done: false,
      },
      {
        id: 'car-maintenance',
        title: '자동차 정기 관리 일정 확인',
        category: '생활',
        urgent: false,
        done: false,
      }
    )
  }

  // 최대 5개만 먼저 보여주기
  return newTasks.slice(0, 5)
}

// =====================================================
// 가이드 데이터
// =====================================================

const taskGuides = {
  // -------------------------
  // 직장인
  // -------------------------

  'worker-insurance': {
    title: '4대보험 가입 확인',
    category: '직장생활',
    description:
      '직장에 처음 들어갔다면 내가 4대보험에 가입되어 있는지 확인해보세요.',
    why:
      '4대보험은 직장생활을 하면서 꼭 알아두어야 하는 기본적인 사회보험이에요.',
    checklist: [
      '국민연금 가입 여부 확인',
      '건강보험 가입 여부 확인',
      '고용보험 가입 여부 확인',
      '산재보험 적용 여부 확인',
    ],
  },

  'worker-pay': {
    title: '급여명세서 확인',
    category: '돈 · 세금',
    description:
      '월급을 받았다면 급여명세서를 확인하는 습관을 만들어보세요.',
    why:
      '내가 계약한 급여와 실제로 받은 금액이 맞는지 확인할 수 있어요.',
    checklist: [
      '기본급 확인',
      '수당 확인',
      '소득세 확인',
      '4대보험 공제 금액 확인',
      '실제 입금액 확인',
    ],
  },

  'worker-tax': {
    title: '월급에서 빠지는 세금 알아보기',
    category: '돈 · 세금',
    description:
      '월급을 받으면 왜 계약한 금액보다 적게 들어오는지 알아볼까요?',
    why:
      '월급에서는 세금과 사회보험료 등이 공제되기 때문에 실제 받는 금액이 달라질 수 있어요.',
    checklist: [
      '소득세가 무엇인지 알아보기',
      '지방소득세가 무엇인지 알아보기',
      '국민연금 확인하기',
      '건강보험 확인하기',
      '고용보험 확인하기',
    ],
  },

  // -------------------------
  // 학생
  // -------------------------

  'student-contract': {
    title: '아르바이트 근로계약서 확인',
    category: '직장생활',
    description:
      '알바를 시작했다면 근로계약서에 어떤 내용이 적혀 있는지 확인해보세요.',
    why:
      '근무조건과 임금 등을 명확하게 확인하기 위해 중요한 문서예요.',
    checklist: [
      '시급 확인',
      '근무시간 확인',
      '휴게시간 확인',
      '급여 지급일 확인',
      '근무기간 확인',
    ],
  },

  'student-wage': {
    title: '알바 급여명세서 확인',
    category: '돈 · 세금',
    description:
      '알바비를 받았다면 내가 일한 시간과 실제 지급된 금액을 확인해보세요.',
    why:
      '내가 받아야 할 급여가 제대로 지급되었는지 확인하는 데 도움이 돼요.',
    checklist: [
      '근무시간 확인',
      '시급 확인',
      '지급액 확인',
      '공제액 확인',
      '실제 입금액 확인',
    ],
  },

  'student-weekly': {
    title: '주휴수당 알아보기',
    category: '직장생활',
    description:
      '알바를 한다면 주휴수당이라는 말을 한 번쯤 들어봤을 거예요.',
    why:
      '근무 조건에 따라 주휴수당이 발생할 수 있기 때문에 내가 해당되는지 확인해볼 필요가 있어요.',
    checklist: [
      '내 근무시간 확인',
      '주휴수당의 의미 알아보기',
      '근로계약서 확인',
      '급여명세서 확인',
    ],
  },

  'student-tax': {
    title: '알바 소득과 세금 알아보기',
    category: '돈 · 세금',
    description:
      '알바비에도 세금이 발생할 수 있다는 사실 알고 있었나요?',
    why:
      '알바를 처음 시작하면 급여에서 세금이 빠지는 이유를 몰라 당황할 수 있어요.',
    checklist: [
      '내 급여에서 공제된 금액 확인',
      '소득세 확인',
      '지방소득세 확인',
      '급여명세서 확인',
    ],
  },

  'student-support': {
    title: '받고 있는 지원금·장학금 확인',
    category: '돈 · 세금',
    description:
      '현재 받고 있는 지원금이나 장학금이 있다면 지급 일정과 조건을 확인해보세요.',
    why:
      '지원금마다 신청기간과 지급조건이 다를 수 있어요.',
    checklist: [
      '지원금 이름 확인',
      '지급일 확인',
      '지원기간 확인',
      '자격조건 확인',
    ],
  },

  'student-support-date': {
    title: '지원금 신청 및 지급 일정 확인',
    category: '행정',
    description:
      '현재 받고 있거나 신청한 지원금의 일정을 확인해보세요.',
    why:
      '신청기간이나 지급일을 놓치지 않도록 미리 확인하는 것이 좋아요.',
    checklist: [
      '지원금 신청기간 확인',
      '신청 완료 여부 확인',
      '지급 예정일 확인',
      '추가 제출서류 확인',
    ],
  },

  'student-family-support': {
    title: '부모님 지원금 관리하기',
    category: '돈 · 세금',
    description:
      '부모님에게 생활비나 용돈을 받고 있다면 나의 월 지출을 함께 관리해보세요.',
    why:
      '정기적으로 들어오는 생활비를 파악하면 한 달 예산을 세우는 데 도움이 돼요.',
    checklist: [
      '한 달 지원금액 확인',
      '고정지출 확인',
      '생활비 예산 세우기',
      '남은 금액 확인',
    ],
  },

  'student-other-income': {
    title: '내 수입의 종류와 관리 방법 알아보기',
    category: '돈 · 세금',
    description:
      '정기적이지 않은 수입도 종류와 금액을 정리해두면 관리하기 쉬워요.',
    why:
      '내가 어디에서 돈을 받고 어디에 쓰는지 파악하면 생활비를 계획하는 데 도움이 돼요.',
    checklist: [
      '수입 종류 확인',
      '월 평균 수입 확인',
      '고정지출 확인',
      '저축할 금액 정하기',
    ],
  },

  'student-no-income': {
    title: '받을 수 있는 청년 지원제도 확인',
    category: '행정',
    description:
      '현재 소득이 없다면 내가 받을 수 있는 지원제도가 있는지 확인해보세요.',
    why:
      '청년을 대상으로 하는 다양한 지원제도가 있기 때문에 본인에게 해당되는 제도를 찾아보는 것이 좋아요.',
    checklist: [
      '현재 거주지역 확인',
      '나이 조건 확인',
      '소득 조건 확인',
      '지원기간 확인',
    ],
  },

  'student-support-search': {
    title: '장학금·지원금 찾아보기',
    category: '돈 · 세금',
    description:
      '현재 받을 수 있는 장학금이나 지원금이 있는지 찾아보세요.',
    why:
      '학생을 대상으로 하는 다양한 장학금과 지원제도가 있을 수 있어요.',
    checklist: [
      '학교 장학금 확인',
      '지역 장학금 확인',
      '청년 지원제도 확인',
      '신청기간 확인',
    ],
  },

  // -------------------------
  // 취업준비생
  // -------------------------

  'job-contract': {
    title: '아르바이트 근로계약서 확인',
    category: '직장생활',
    description:
      '알바를 하고 있다면 근로계약서의 내용을 다시 한번 확인해보세요.',
    why:
      '근무조건과 임금 등을 명확하게 확인하기 위해 중요한 문서예요.',
    checklist: [
      '시급 확인',
      '근무시간 확인',
      '휴게시간 확인',
      '급여 지급일 확인',
      '근무기간 확인',
    ],
  },

  'job-wage': {
    title: '알바 급여명세서 확인',
    category: '돈 · 세금',
    description:
      '알바비가 제대로 지급되었는지 급여명세서를 확인해보세요.',
    why:
      '실제 근무한 시간과 지급받은 금액을 비교하는 데 도움이 돼요.',
    checklist: [
      '근무시간 확인',
      '시급 확인',
      '지급액 확인',
      '공제액 확인',
      '실제 입금액 확인',
    ],
  },

  'job-weekly': {
    title: '주휴수당 알아보기',
    category: '직장생활',
    description:
      '알바를 하고 있다면 주휴수당이 발생하는 조건을 확인해보세요.',
    why:
      '근무 조건에 따라 주휴수당이 발생할 수 있어요.',
    checklist: [
      '내 근무시간 확인',
      '주휴수당 의미 알아보기',
      '근로계약서 확인',
      '급여명세서 확인',
    ],
  },

  'job-tax': {
    title: '알바 소득과 세금 알아보기',
    category: '돈 · 세금',
    description:
      '알바비를 받을 때 세금이 어떻게 적용되는지 알아보세요.',
    why:
      '급여에서 공제되는 금액이 무엇인지 알아두면 실제 수령액을 이해하기 쉬워요.',
    checklist: [
      '소득세 확인',
      '지방소득세 확인',
      '공제금액 확인',
      '급여명세서 확인',
    ],
  },

  'job-support': {
    title: '현재 받고 있는 지원금 확인',
    category: '행정',
    description:
      '현재 받고 있는 지원금의 종류와 조건을 확인해보세요.',
    why:
      '지원금마다 지급 조건과 기간이 다를 수 있어요.',
    checklist: [
      '지원금 이름 확인',
      '지급조건 확인',
      '지원기간 확인',
      '지급일 확인',
    ],
  },

  'job-support-date': {
    title: '지원금 지급 일정 확인',
    category: '행정',
    description:
      '현재 신청한 지원금이나 받고 있는 지원금의 지급 일정을 확인해보세요.',
    why:
      '지급일과 신청기간을 알고 있으면 중요한 일정을 놓치지 않을 수 있어요.',
    checklist: [
      '신청기간 확인',
      '신청 완료 여부 확인',
      '지급 예정일 확인',
      '추가 서류 확인',
    ],
  },

  'job-family-support': {
    title: '생활비 관리 계획 세우기',
    category: '돈 · 세금',
    description:
      '부모님에게 지원받는 생활비를 기준으로 한 달 예산을 세워보세요.',
    why:
      '취업 준비 기간에는 생활비를 계획적으로 관리하는 것이 중요해요.',
    checklist: [
      '월 지원금액 확인',
      '고정지출 확인',
      '생활비 예산 설정',
      '저축 가능 금액 확인',
    ],
  },

  'job-other-income': {
    title: '현재 수입 관리 방법 알아보기',
    category: '돈 · 세금',
    description:
      '현재 발생하는 수입을 정리하고 한 달 지출 계획을 세워보세요.',
    why:
      '수입과 지출을 함께 파악하면 생활비를 관리하기 쉬워져요.',
    checklist: [
      '수입 종류 확인',
      '월 평균 수입 확인',
      '고정지출 확인',
      '저축할 금액 정하기',
    ],
  },

  'job-support-search': {
    title: '청년 지원제도 확인하기',
    category: '행정',
    description:
      '현재 받을 수 있는 청년 지원제도가 있는지 확인해보세요.',
    why:
      '취업 준비 중인 청년을 대상으로 하는 다양한 지원제도가 있을 수 있어요.',
    checklist: [
      '거주지역 확인',
      '나이 조건 확인',
      '소득 조건 확인',
      '지원기간 확인',
    ],
  },

  'job-employment-support': {
    title: '취업지원 프로그램 알아보기',
    category: '직장생활',
    description:
      '취업 준비에 도움을 받을 수 있는 프로그램을 찾아보세요.',
    why:
      '취업 준비 과정에서 상담이나 교육 등의 지원을 받을 수 있는 프로그램이 있을 수 있어요.',
    checklist: [
      '취업지원 프로그램 검색',
      '신청 자격 확인',
      '신청기간 확인',
      '제공되는 지원내용 확인',
    ],
  },

  // -------------------------
  // 주거
  // -------------------------

  'housing-move': {
    title: '전입신고 확인',
    category: '행정',
    description:
      '새로운 집으로 이사했다면 전입신고가 필요한지 확인해보세요.',
    why:
      '주소가 변경되었을 때 행정상 주소를 실제 거주지와 일치시키는 중요한 절차예요.',
    checklist: [
      '현재 주소 확인',
      '전입신고 여부 확인',
      '필요한 서류 확인',
      '신고 완료 여부 확인',
    ],
  },

  'housing-rent': {
    title: '월세 관련 혜택 알아보기',
    category: '주거',
    description:
      '월세를 내고 있다면 받을 수 있는 세금 혜택이나 지원제도가 있는지 확인해보세요.',
    why:
      '조건에 따라 주거비 부담을 줄이는 데 도움이 되는 제도가 있을 수 있어요.',
    checklist: [
      '월세 계약서 확인',
      '임대차 계약 조건 확인',
      '내가 받을 수 있는 혜택 확인',
      '신청기간 확인',
    ],
  },

  'housing-jeonse': {
    title: '전세 계약 관련 확인사항 알아보기',
    category: '주거',
    description:
      '전세 계약을 했다면 계약과 관련된 기본적인 확인사항을 살펴보세요.',
    why:
      '전세는 큰 금액이 오가는 계약이기 때문에 계약 내용을 꼼꼼하게 확인하는 것이 중요해요.',
    checklist: [
      '계약서 확인',
      '계약기간 확인',
      '보증금 확인',
      '확정일자 여부 확인',
      '전입신고 여부 확인',
    ],
  },

  // -------------------------
  // 공과금
  // -------------------------

  'utility-electric': {
    title: '전기요금 납부 방법 확인',
    category: '공과금',
    description:
      '자취를 시작하면 전기요금을 직접 납부해야 하는 경우가 있어요.',
    why:
      '공과금은 매달 정해진 기간에 납부해야 하기 때문에 납부 방법을 미리 알아두면 편해요.',
    checklist: [
      '전기요금 고지서 확인',
      '납부일 확인',
      '자동이체 여부 확인',
      '납부 방법 확인',
    ],
  },

  'utility-gas': {
    title: '도시가스 납부 방법 확인',
    category: '공과금',
    description:
      '도시가스를 사용하는 집이라면 매달 가스요금이 발생할 수 있어요.',
    why:
      '지역과 계약 형태에 따라 요금 확인 및 납부 방법이 달라질 수 있어요.',
    checklist: [
      '도시가스 회사 확인',
      '고지서 확인',
      '납부일 확인',
      '자동이체 여부 확인',
    ],
  },

  // -------------------------
  // 보험
  // -------------------------

  'car-insurance': {
    title: '자동차 보험 확인',
    category: '보험',
    description:
      '자동차를 가지고 있다면 자동차 보험 가입 여부와 갱신일을 확인해보세요.',
    why:
      '자동차를 운전한다면 보험 관련 사항을 놓치지 않는 것이 중요해요.',
    checklist: [
      '보험사 확인',
      '보험기간 확인',
      '갱신일 확인',
      '보장내용 확인',
    ],
  },

  'car-maintenance': {
    title: '자동차 정기 관리 일정 확인',
    category: '보험',
    description:
      '자동차를 가지고 있다면 정기적으로 확인해야 하는 관리 일정을 정리해보세요.',
    why:
      '차량의 상태를 꾸준히 확인하면 필요한 관리를 놓치지 않는 데 도움이 돼요.',
    checklist: [
      '자동차 검사 일정 확인',
      '엔진오일 교체 시기 확인',
      '타이어 상태 확인',
      '보험 갱신일 확인',
    ],
  },
}

// =====================================================
// 카테고리별 가이드
// =====================================================

const categoryGuides = {
  '돈 · 세금': [
    'worker-pay',
    'worker-tax',
    'student-wage',
    'student-tax',
    'student-support',
    'student-family-support',
    'student-other-income',
    'student-no-income',
    'student-support-search',
    'job-wage',
    'job-tax',
    'job-support',
    'job-family-support',
    'job-other-income',
  ],

  주거: [
    'housing-rent',
    'housing-jeonse',
  ],

  공과금: [
    'utility-electric',
    'utility-gas',
  ],

  보험: [
    'worker-insurance',
    'car-insurance',
    'car-maintenance',
  ],

  행정: [
    'housing-move',
    'student-support-date',
    'student-no-income',
    'job-support',
    'job-support-date',
    'job-support-search',
  ],

  직장생활: [
    'worker-insurance',
    'worker-pay',
    'student-contract',
    'student-weekly',
    'job-contract',
    'job-weekly',
    'job-employment-support',
  ],
}

// =====================================================
// App
// =====================================================

function App() {
  const [page, setPage] = useState('home')
  const [selectedCategory, setSelectedCategory] =
    useState(null)

  const [profile, setProfile] = useState({
    name: '안소민',
    job: '직장인',
    salary: '280',

    hasIncome: '없음',
    incomeType: '',
    incomeAmount: '',

    housing: '자취',
    rent: '없음',
    car: '없음',
  })

  const [tempProfile, setTempProfile] =
    useState(profile)

  const [tasks, setTasks] = useState(
    generateTasks(profile)
  )

  const [selectedTask, setSelectedTask] =
    useState(null)

  const [guideChecks, setGuideChecks] =
    useState([])

  const [guideCategory, setGuideCategory] =
    useState(null)

  const completedCount = tasks.filter(
    (task) => task.done
  ).length

  // =====================================================
  // 할 일 체크
  // =====================================================

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  // =====================================================
  // 할 일 상세
  // =====================================================

  const openTaskDetail = (task) => {
    const guide = taskGuides[task.id]

    if (!guide) return

    setSelectedTask(task)

    setGuideChecks(
      guide.checklist.map(() => false)
    )

    setPage('task-detail')
  }

  // =====================================================
  // 카테고리 가이드
  // =====================================================

  const openCategoryGuide = (category) => {
    setSelectedCategory(category)
    setGuideCategory(category)
    setPage('guide-list')
  }

  // =====================================================
  // 가이드 체크
  // =====================================================

  const toggleGuideCheck = (index) => {
    setGuideChecks((current) =>
      current.map((checked, i) =>
        i === index ? !checked : checked
      )
    )
  }

  // =====================================================
  // 프로필
  // =====================================================

  const openProfile = () => {
    setTempProfile(profile)
    setPage('profile')
  }

  const saveProfile = () => {
    const newProfile = {
      ...tempProfile,
      hasIncome:
        tempProfile.job === '직장인'
          ? '없음'
          : tempProfile.hasIncome,
    }

    setProfile(newProfile)

    const personalizedTasks =
      generateTasks(newProfile)

    setTasks(personalizedTasks)

    setPage('home')
  }

  const handleProfileChange = (
    field,
    value
  ) => {
    setTempProfile((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleJobChange = (job) => {
    setTempProfile((current) => ({
      ...current,
      job,
      salary:
        job === '직장인'
          ? current.salary || '280'
          : '',
      hasIncome:
        job === '직장인'
          ? '없음'
          : current.hasIncome,
      incomeType:
        job === '직장인'
          ? ''
          : current.incomeType,
      incomeAmount:
        job === '직장인'
          ? ''
          : current.incomeAmount,
    }))
  }

  // =====================================================
  // 프로필 화면
  // =====================================================

  if (page === 'profile') {
    const isWorker =
      tempProfile.job === '직장인'

    const showIncomeQuestion =
      tempProfile.job === '학생' ||
      tempProfile.job === '취업 준비생'

    return (
      <div className="app">
        <header className="header">
          <button
            className="logo logo-button"
            onClick={() => setPage('home')}
          >
            <span className="logo-mark">
              첫
            </span>
            <span>첫걸음</span>
          </button>

          <nav className="nav">
            <button
              className="nav-item"
              onClick={() => setPage('home')}
            >
              홈
            </button>

            <button
              className="nav-item"
              onClick={() => {
                setGuideCategory('돈 · 세금')
                setPage('guide-list')
              }}
            >
              생활 가이드
            </button>

            <button
              className="nav-item active"
              onClick={openProfile}
            >
              내 정보
            </button>
          </nav>

          <button
            className="profile-button"
            onClick={openProfile}
          >
            {profile.name}님
          </button>
        </header>

        <main className="profile-page">
          <button
            className="back-button"
            onClick={() => setPage('home')}
          >
            ← 홈으로 돌아가기
          </button>

          <section className="profile-header">
            <p className="eyebrow">
              MY PROFILE
            </p>

            <h1>
              나에게 맞는 생활 정보를
              <br />
              알려드릴게요.
            </h1>

            <p>
              현재 상황을 알려주시면
              <br />
              필요한 정보와 할 일을 맞춤으로
              보여드려요.
            </p>
          </section>

          <section className="profile-card">
            {/* 이름 */}
            <div className="form-group">
              <label>이름</label>

              <input
                type="text"
                value={tempProfile.name}
                onChange={(e) =>
                  handleProfileChange(
                    'name',
                    e.target.value
                  )
                }
                placeholder="이름을 입력해주세요"
              />
            </div>

            {/* 현재 상태 */}
            <div className="form-group">
              <label>현재 상태</label>

              <div className="option-grid">
                {[
                  '직장인',
                  '취업 준비생',
                  '학생',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      tempProfile.job === item
                        ? 'option selected'
                        : 'option'
                    }
                    onClick={() =>
                      handleJobChange(item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 직장인 */}
            {isWorker && (
              <div className="form-group">
                <label>
                  월급{' '}
                  <span>
                    (세전, 만원)
                  </span>
                </label>

                <div className="salary-input">
                  <input
                    type="number"
                    value={
                      tempProfile.salary
                    }
                    onChange={(e) =>
                      handleProfileChange(
                        'salary',
                        e.target.value
                      )
                    }
                    placeholder="280"
                  />

                  <span>만원</span>
                </div>
              </div>
            )}

            {/* 학생 / 취업준비생 */}
            {showIncomeQuestion && (
              <div className="conditional-section">
                <div className="form-group">
                  <label>
                    현재 수입이 있나요?
                  </label>

                  <p className="form-help">
                    아르바이트, 지원금,
                    장학금, 부모님 지원 등을
                    포함해요.
                  </p>

                  <div className="option-grid two">
                    {['있음', '없음'].map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          className={
                            tempProfile.hasIncome ===
                            item
                              ? 'option selected'
                              : 'option'
                          }
                          onClick={() =>
                            handleProfileChange(
                              'hasIncome',
                              item
                            )
                          }
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* 수입 종류 */}
                {tempProfile.hasIncome ===
                  '있음' && (
                  <div className="income-detail">
                    <div className="form-group">
                      <label>
                        어떤 수입이 있나요?
                      </label>

                      <div className="option-grid">
                        {[
                          '아르바이트',
                          '지원금 · 장학금',
                          '부모님 지원',
                          '기타',
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            className={
                              tempProfile.incomeType ===
                              item
                                ? 'option selected'
                                : 'option'
                            }
                            onClick={() =>
                              handleProfileChange(
                                'incomeType',
                                item
                              )
                            }
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 수입 금액 */}
                    {tempProfile.incomeType && (
                      <div className="form-group">
                        <label>
                          월 평균 수입
                          <span>
                            {' '}
                            (선택사항)
                          </span>
                        </label>

                        <div className="salary-input">
                          <input
                            type="number"
                            value={
                              tempProfile.incomeAmount
                            }
                            onChange={(e) =>
                              handleProfileChange(
                                'incomeAmount',
                                e.target.value
                              )
                            }
                            placeholder="80"
                          />

                          <span>
                            만원
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* 거주 형태 */}
            <div className="form-group">
              <label>
                현재 거주 형태
              </label>

              <div className="option-grid">
                {[
                  '자취',
                  '가족과 거주',
                  '기숙사',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      tempProfile.housing === item
                        ? 'option selected'
                        : 'option'
                    }
                    onClick={() =>
                      handleProfileChange(
                        'housing',
                        item
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 주거비 */}
            <div className="form-group">
              <label>
                주거비 형태
              </label>

              <div className="option-grid">
                {[
                  '월세',
                  '전세',
                  '없음',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      tempProfile.rent === item
                        ? 'option selected'
                        : 'option'
                    }
                    onClick={() =>
                      handleProfileChange(
                        'rent',
                        item
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 자동차 */}
            <div className="form-group">
              <label>
                자동차가 있나요?
              </label>

              <div className="option-grid two">
                {[
                  '있음',
                  '없음',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      tempProfile.car === item
                        ? 'option selected'
                        : 'option'
                    }
                    onClick={() =>
                      handleProfileChange(
                        'car',
                        item
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="save-profile-button"
              onClick={saveProfile}
            >
              내 정보 저장하기
            </button>
          </section>
        </main>

        <footer>
          <strong>첫걸음</strong>

          <span>
            학교에서는 알려주지 않았던
            사회생활의 모든 것.
          </span>
        </footer>
      </div>
    )
  }

  // =====================================================
  // 카테고리 가이드 목록
  // =====================================================

  if (page === 'guide-list') {
    const guideIds =
      categoryGuides[guideCategory] || []

    const guides = guideIds
      .map((id) => ({
        id,
        ...taskGuides[id],
      }))
      .filter((guide) => guide.title)

    return (
      <div className="app">
        <header className="header">
          <button
            className="logo logo-button"
            onClick={() => setPage('home')}
          >
            <span className="logo-mark">
              첫
            </span>
            <span>첫걸음</span>
          </button>

          <nav className="nav">
            <button
              className="nav-item"
              onClick={() => setPage('home')}
            >
              홈
            </button>

            <button className="nav-item active">
              생활 가이드
            </button>

            <button
              className="nav-item"
              onClick={openProfile}
            >
              내 정보
            </button>
          </nav>

          <button
            className="profile-button"
            onClick={openProfile}
          >
            {profile.name}님
          </button>
        </header>

        <main className="guide-list-page">
          <button
            className="back-button"
            onClick={() => setPage('home')}
          >
            ← 홈으로 돌아가기
          </button>

          <section className="guide-list-header">
            <p className="eyebrow">
              LIFE GUIDE
            </p>

            <h1>
              {guideCategory}
              <br />
              무엇부터 알아볼까요?
            </h1>

            <p>
              사회생활을 시작하면서 알아두면
              좋은
              <br />
              {guideCategory} 정보를 쉽게
              정리했어요.
            </p>
          </section>

          <section className="guide-list-card">
            {guides.map((guide, index) => (
              <button
                key={guide.id}
                type="button"
                className="guide-list-item"
                onClick={() => {
                  const task =
                    tasks.find(
                      (item) =>
                        item.id === guide.id
                    )

                  setSelectedTask(
                    task || {
                      id: guide.id,
                      title: guide.title,
                      category:
                        guide.category,
                      done: false,
                    }
                  )

                  setGuideChecks(
                    guide.checklist.map(
                      () => false
                    )
                  )

                  setPage(
                    'task-detail'
                  )
                }}
              >
                <span className="guide-list-number">
                  {String(index + 1).padStart(
                    2,
                    '0'
                  )}
                </span>

                <span className="guide-list-info">
                  <strong>
                    {guide.title}
                  </strong>

                  <small>
                    {guide.description}
                  </small>
                </span>

                <span className="guide-list-arrow">
                  →
                </span>
              </button>
            ))}
          </section>

          {guides.length === 0 && (
            <div className="empty-guide">
              아직 준비 중인 가이드예요.
            </div>
          )}
        </main>

        <footer>
          <strong>첫걸음</strong>

          <span>
            학교에서는 알려주지 않았던
            사회생활의 모든 것.
          </span>
        </footer>
      </div>
    )
  }

  // =====================================================
  // 가이드 상세
  // =====================================================

  if (page === 'task-detail') {
    const guide = selectedTask
      ? taskGuides[selectedTask.id]
      : null

    if (!guide) {
      return (
        <div className="app">
          <main className="empty-guide">
            가이드 정보를 찾을 수 없어요.
            <br />

            <button
              type="button"
              className="back-button"
              onClick={() =>
                setPage('home')
              }
            >
              ← 홈으로 돌아가기
            </button>
          </main>
        </div>
      )
    }

    const allChecked =
      guideChecks.length > 0 &&
      guideChecks.every(Boolean)

    return (
      <div className="app">
        <header className="header">
          <button
            className="logo logo-button"
            onClick={() => setPage('home')}
          >
            <span className="logo-mark">
              첫
            </span>
            <span>첫걸음</span>
          </button>

          <nav className="nav">
            <button
              className="nav-item"
              onClick={() => setPage('home')}
            >
              홈
            </button>

            <button
              className="nav-item"
              onClick={() => {
                setGuideCategory(
                  guide.category
                )
                setPage('guide-list')
              }}
            >
              생활 가이드
            </button>

            <button
              className="nav-item"
              onClick={openProfile}
            >
              내 정보
            </button>
          </nav>

          <button
            className="profile-button"
            onClick={openProfile}
          >
            {profile.name}님
          </button>
        </header>

        <main className="task-detail-page">
          <button
            className="back-button"
            onClick={() => {
              setGuideCategory(
                guide.category
              )
              setPage('guide-list')
            }}
          >
            ← 가이드 목록으로 돌아가기
          </button>

          <section className="task-detail-header">
            <p className="eyebrow">
              {guide.category}
            </p>

            <h1>{guide.title}</h1>

            <p>
              {guide.description}
            </p>
          </section>

          {/* WHY */}
          <section className="guide-card">
            <p className="guide-label">
              WHY
            </p>

            <h2>
              왜 알아야 하나요?
            </h2>

            <p>
              {guide.why}
            </p>
          </section>

          {/* CHECKLIST */}
          <section className="guide-card">
            <p className="guide-label">
              CHECKLIST
            </p>

            <h2>
              하나씩 확인해볼까요?
            </h2>

            <p className="guide-progress">
              {
                guideChecks.filter(Boolean)
                  .length
              }{' '}
              / {guide.checklist.length}{' '}
              확인
            </p>

            <div className="guide-checklist">
              {guide.checklist.map(
                (item, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`guide-check-item ${
                      guideChecks[index]
                        ? 'checked'
                        : ''
                    }`}
                    onClick={() =>
                      toggleGuideCheck(
                        index
                      )
                    }
                  >
                    <span className="guide-check">
                      {guideChecks[index]
                        ? '✓'
                        : ''}
                    </span>

                    <span>{item}</span>
                  </button>
                )
              )}
            </div>
          </section>

          <button
            type="button"
            className="complete-button"
            disabled={!allChecked}
            onClick={() => {
              if (!selectedTask) return

              setTasks(
                (currentTasks) =>
                  currentTasks.map(
                    (task) =>
                      task.id ===
                      selectedTask.id
                        ? {
                            ...task,
                            done: true,
                          }
                        : task
                  )
              )

              setGuideChecks([])

              setPage('home')
            }}
          >
            {allChecked
              ? '확인했습니다'
              : '모두 확인해주세요'}
          </button>
        </main>

        <footer>
          <strong>첫걸음</strong>

          <span>
            학교에서는 알려주지 않았던
            사회생활의 모든 것.
          </span>
        </footer>
      </div>
    )
  }

  // =====================================================
  // 홈
  // =====================================================

  return (
    <div className="app">
      <header className="header">
        <button
          className="logo logo-button"
          onClick={() => setPage('home')}
        >
          <span className="logo-mark">
            첫
          </span>
          <span>첫걸음</span>
        </button>

        <nav className="nav">
          <button
            className="nav-item active"
            onClick={() => setPage('home')}
          >
            홈
          </button>

          <button
            className="nav-item"
            onClick={() => {
              setGuideCategory('돈 · 세금')
              setPage('guide-list')
            }}
          >
            생활 가이드
          </button>

          <button
            className="nav-item"
            onClick={openProfile}
          >
            내 정보
          </button>
        </nav>

        <button
          className="profile-button"
          onClick={openProfile}
        >
          {profile.name}님
        </button>
      </header>

      <main>
        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero-section">
          <div>
            <p className="eyebrow">
              사회생활 첫걸음
            </p>

            <h1>
              이제 막 사회에 나온 당신에게
              <br />
              <span>
                필요한 것부터 알려드릴게요.
              </span>
            </h1>

            <p className="hero-description">
              세금, 공과금, 보험, 주거까지
              <br />
              학교에서는 알려주지 않았던
              생활 정보를 한곳에서.
            </p>
          </div>

          <div className="day-card">
            <span>사회생활</span>
            <strong>D+32</strong>
            <small>
              2026.08.02 시작
            </small>
          </div>
        </section>

        {/* =================================================
            TODAY
        ================================================= */}

        <section className="section">
          <div className="section-title">
            <div>
              <p className="section-eyebrow">
                TODAY
              </p>

              <p className="profile-summary">
                {profile.job}

                {profile.housing ===
                '자취'
                  ? ' · 자취'
                  : ` · ${profile.housing}`}

                {profile.rent !==
                '없음'
                  ? ` · ${profile.rent}`
                  : ''}
              </p>
            </div>

            <span className="progress-text">
              {completedCount}/
              {tasks.length} 완료
            </span>
          </div>

          <div className="task-card">
            {tasks.length === 0 && (
              <div className="empty-guide">
                현재 조건에 맞는 할 일이
                없어요.
              </div>
            )}

            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task-item ${
                  task.done
                    ? 'done'
                    : ''
                }`}
              >
                <button
                  type="button"
                  className="check-button"
                  onClick={() =>
                    toggleTask(
                      task.id
                    )
                  }
                  aria-label={
                    task.done
                      ? `${task.title} 완료 취소`
                      : `${task.title} 완료`
                  }
                >
                  <span className="check">
                    {task.done
                      ? '✓'
                      : ''}
                  </span>
                </button>

                <button
                  type="button"
                  className="task-content"
                  onClick={() =>
                    openTaskDetail(
                      task
                    )
                  }
                >
                  <span className="task-info">
                    <strong>
                      {task.title}
                    </strong>

                    <small>
                      {task.category}
                    </small>
                  </span>

                  <span className="task-action">
                    {task.urgent &&
                      !task.done && (
                        <span className="urgent">
                          필수
                        </span>
                      )}

                    <span className="task-link">
                      {task.done
                        ? '확인 완료'
                        : '알아보기 →'}
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            CATEGORY
        ================================================= */}

        <section className="section">
          <div className="section-title">
            <div>
              <p className="section-eyebrow">
                GUIDE
              </p>

              <h2>
                무엇이 궁금하세요?
              </h2>
            </div>
          </div>

          <div className="category-grid">
            {categories.map(
              (category) => (
                <button
                  key={category.title}
                  className="category-card"
                  onClick={() =>
                    openCategoryGuide(
                      category.title
                    )
                  }
                >
                  <span className="category-icon">
                    {category.icon}
                  </span>

                  <strong>
                    {category.title}
                  </strong>

                  <span>
                    {category.desc}
                  </span>

                  <b>→</b>
                </button>
              )
            )}
          </div>
        </section>

        {/* =================================================
            CALENDAR
        ================================================= */}

        <section className="section">
          <div className="section-title">
            <div>
              <p className="section-eyebrow">
                CALENDAR
              </p>

              <h2>
                이번 달 일정
              </h2>
            </div>
          </div>

          <div className="calendar-card">
            <div className="calendar-item">
              <span className="date">
                09.10
              </span>

              <div>
                <strong>
                  도시가스 납부
                </strong>

                <small>
                  공과금
                </small>
              </div>

              <span>D-7</span>
            </div>

            <div className="calendar-item">
              <span className="date">
                09.15
              </span>

              <div>
                <strong>
                  통신비 납부
                </strong>

                <small>
                  생활
                </small>
              </div>

              <span>D-12</span>
            </div>

            <div className="calendar-item">
              <span className="date">
                09.30
              </span>

              <div>
                <strong>
                  월급날
                </strong>

                <small>
                  직장생활
                </small>
              </div>

              <span>D-27</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>첫걸음</strong>

        <span>
          학교에서는 알려주지 않았던
          사회생활의 모든 것.
        </span>
      </footer>
    </div>
  )
}

export default App