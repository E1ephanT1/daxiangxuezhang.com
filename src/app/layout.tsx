import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "大象学长 | AI视频创作者 · 用导演思维做出真实耐看的AI视频",
  description: "大象学长的AI视频创作内容中心。免费AI攻略、视频教程、AI工具导航、付费课程。系统化工作流与导演思维，帮助创作者做出真实、耐看、可交付的AI视频作品。",
  keywords: "AI视频, AI教程, Sora, Runway, ComfyUI, AI短片, AI导演, 大象学长",
  openGraph: {
    title: "大象学长 | AI视频创作者",
    description: "用导演思维，做出真实耐看的AI视频",
    url: "https://www.daxiangxuezhang.com",
    siteName: "大象学长",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
