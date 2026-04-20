import Link from "next/link";
import { getAllVideos } from "@/lib/content";
import { VideoCard } from "@/components/VideoCard";

const STATS = [
  { num: "150,000+", label: "全平台粉丝" },
  { num: "12节", label: "系统课程" },
  { num: "100+", label: "AI视频作品" },
];

export default function HomePage() {
  const videos = getAllVideos().slice(0, 4);

  return (
    <>
      {/* ====== Hero ====== */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="text-sm text-gray-600">AI 导演系列课程 · 正在招生</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            用导演思维，做出<br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              真实耐看
            </span>
            的AI视频
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            系统化工作流 · 可复现方法论 · 商业级交付标准<br />
            不教一眼假的AI内容，只讲能落地的创作流程
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link
              href="/videos"
              className="px-7 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm shadow-lg shadow-gray-900/10"
            >
              免费AI攻略
            </Link>
            <Link
              href="/courses"
              className="px-7 py-3 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm border border-gray-200"
            >
              付费课程
            </Link>
          </div>

          <div className="flex justify-center gap-10 md:gap-16">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 最新视频 ====== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 mb-3">
                免费AI攻略
              </span>
              <h2 className="text-2xl font-bold text-gray-900">最新视频攻略</h2>
            </div>
            <Link
              href="/videos"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100"
            >
              查看全部 →
            </Link>
          </div>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {videos.map((v) => (
                <VideoCard key={v.slug} video={v} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-400 mb-2">暂无视频内容</p>
              <p className="text-gray-300 text-sm">在 content/videos/ 文件夹添加 .md 文件即可</p>
            </div>
          )}
        </div>
      </section>

      {/* ====== 课程简介 ====== */}
      <section className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 mb-3">
            付费课程
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">AI导演系列课程</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            从零到商业交付的系统化AI视频课程 · 12节 · 小鹅通平台
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { title: "全套12节", price: "¥2,799", tag: "最受欢迎", highlight: true },
              { title: "单节体验", price: "¥299", tag: "低门槛入门", highlight: false },
              { title: "弟子班", price: "¥12,999", tag: "1对1年度辅导", highlight: false },
            ].map((c) => (
              <div
                key={c.title}
                className={`p-6 rounded-2xl border text-left ${
                  c.highlight
                    ? "bg-gradient-to-b from-blue-50 to-white border-blue-200"
                    : "bg-white border-gray-100"
                }`}
              >
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.highlight ? "bg-blue-100 text-blue-600" : "bg-gray-50 text-gray-500"}`}>
                  {c.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3">{c.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">{c.price}</p>
              </div>
            ))}
          </div>
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            了解课程详情
          </Link>
        </div>
      </section>

      {/* ====== 关于我 ====== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-5xl">
                🐘
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">关于大象学长</h2>
              <p className="text-gray-500 leading-relaxed mb-3 text-sm">
                从北大天文系到摄影师，再到AI视频创作者——我相信真正好的AI内容不是"一眼假"的炫技，而是用导演思维和系统化工作流做出真实、耐看、可交付的作品。
              </p>
              <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                我把自己踩过的坑、验证过的方法，拆成可复现的流程分享给你。
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI视频创作者", "前摄影师/调色师", "北大天文系", "工作室主理人"].map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
