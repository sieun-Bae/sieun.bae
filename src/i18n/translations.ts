export const translations = {
  en: {
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    sections: {
      experience: { eyebrow: "Where I've worked", heading: 'Experience' },
      projects:   { eyebrow: "What I've built",   heading: 'Projects'   },
      skills:     { eyebrow: 'Technical abilities', heading: 'Skills'   },
      education:  { eyebrow: 'Background & achievements', heading: 'Education & More' },
      contact:    { eyebrow: 'Get in touch',        heading: 'Contact'  },
    },
    contact: {
      description: 'Open to new opportunities and conversations. Feel free to reach out.',
    },
    skills: {
      languagesLabel: 'Languages',
    },
    education: {
      educationLabel:      'Education',
      leadershipLabel:     'Leadership',
      certificationsLabel: 'Certifications',
      referencesLabel:     'References',
      availableOnRequest:  'Contact details available upon request.',
    },
    projects: {
      featuredLabel: 'Featured',
    },
    footer: 'Seoul, Republic of Korea · Last updated June 2026',
  },
  ko: {
    nav: {
      experience: '경력',
      projects: '프로젝트',
      skills: '기술',
      education: '학력',
      contact: '연락처',
    },
    sections: {
      experience: { eyebrow: '경력 사항',      heading: '경력'       },
      projects:   { eyebrow: '진행한 프로젝트', heading: '프로젝트'   },
      skills:     { eyebrow: '기술 스택',      heading: '기술'       },
      education:  { eyebrow: '학력 및 활동',   heading: '학력 & 기타'},
      contact:    { eyebrow: '연락하기',       heading: '연락처'     },
    },
    contact: {
      description: '새로운 기회나 대화를 환영합니다. 편하게 연락해 주세요.',
    },
    skills: {
      languagesLabel: '프로그래밍 언어',
    },
    education: {
      educationLabel:      '학력',
      leadershipLabel:     '대외 활동',
      certificationsLabel: '자격증',
      referencesLabel:     '레퍼런스',
      availableOnRequest:  '연락처는 요청 시 제공합니다.',
    },
    projects: {
      featuredLabel: '주요 프로젝트',
    },
    footer: '대한민국 서울 · 최종 업데이트 2026년 6월',
  },
} as const

export type Lang = keyof typeof translations
export type T = typeof translations.en

export function useTranslations(lang: Lang): T {
  return translations[lang] as T
}
