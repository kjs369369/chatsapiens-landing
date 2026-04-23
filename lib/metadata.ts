import type { Metadata } from "next";
import { SITE_URL } from "./constants";

const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "AICLab | 은퇴 전에 준비하는 AI 실행력",
} as const;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AICLab | 은퇴 전에 준비하는 AI 실행력",
    template: "%s | AICLab",
  },
  description:
    "40~60대 비전공자를 위한 실전형 AI 부트캠프. 배우는 데서 끝나지 않고 실제 결과물과 제2직업 가능성까지 연결합니다.",
  keywords: [
    "AI 부트캠프",
    "40대 AI",
    "50대 AI",
    "60대 AI",
    "은퇴 준비",
    "챗GPT",
    "AI 교육",
    "제2직업",
    "중장년 AI",
  ],
  authors: [{ name: "AICLab" }],
  creator: "AICLab",
  publisher: "AICLab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "AICLab",
    title: "AICLab | 은퇴 전에 준비하는 AI 실행력",
    description:
      "40~60대 비전공자를 위한 실전형 AI 부트캠프. 배우는 데서 끝나지 않고 실제 결과물과 제2직업 가능성까지 연결합니다.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "AICLab | 은퇴 전에 준비하는 AI 실행력",
    description:
      "40~60대 비전공자를 위한 실전형 AI 부트캠프",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};
