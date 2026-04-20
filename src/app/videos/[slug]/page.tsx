import { getAllVideos, getVideoBySlug, getCategoryColor } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// 生成静态路径
export async function generateStaticParams() {
  const videos = getAllVideos();
  return videos.map((v) => ({ slug: v.slug }));
}

// 动态meta
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);
  if (!video) return {};
  return {
    title: `${video.title} | 大象学长`,
    description: video.description,
  };
}

export default async function VideoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);
  if (!video) notFound();

  const allVideos = getAllVideos();
  const currentIndex = allVideos.findIndex((v) => v.slug === slug);
  const prevVideo = currentIndex < allVideos.length - 1 ? allVideos[currentIndex + 1] : null;
  const nextVideo = currentIndex > 0 ? allVideos[currentIndex - 1] : null;

  return (
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">

          {/* B站播放器 */}
          <div className="bilibili-player">
            <iframe
              src={`//player.bilibili.com/player.html?bvid=${video.bvid}&autoplay=0&high_quality=1`}
              allowFullScreen
              sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
            />
          </div>

          {/* 标题区 */}
          <div className="px-6 md:px-10 pt-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getCategoryColor(video.category)}`}>
                {video.category}
              </span>
              {video.tags?.map((tag) => (
                <span key={tag} className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4 tracking-tight">
              {video.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-5">
              <span>{video.date}</span>
              <span>{video.duration}</span>
              {video.views && <span>{video.views}播放</span>}
            </div>
            <div className="pb-6 border-b border-gray-100">
              <p className="text-gray-500 text-sm">{video.description}</p>
            </div>
          </div>

          {/* 正文 + 侧栏 */}
          <div className="flex flex-col lg:flex-row">
            {/* 主栏：正文 */}
            <div className="flex-1 px-6 md:px-10 py-8 min-w-0">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: video.contentHtml }} />

              {/* 资源下载 */}
              {video.resources && video.resources.length > 0 && (
                <div className="mt-8 mb-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">📦 资源下载</h2>
                  <div className="space-y-2.5">
                    {video.resources.map((r) => (
                      <a
                        key={r.name}
                        href={`/resources/${r.file}`}
                        download
                        className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group border border-gray-100"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors truncate">{r.name}</p>
                          <p className="text-xs text-gray-400">{r.size}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* 课程推荐 */}
              {video.relatedCourse && (
                <div className="mb-8 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-5 border border-blue-100/50">
                  <p className="text-xs text-blue-600 font-medium mb-1">本期内容对应课程</p>
                  <h4 className="text-gray-900 font-bold mb-1.5">{video.relatedCourse.title}</h4>
                  <p className="text-gray-500 text-sm mb-3">{video.relatedCourse.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/courses" className="text-xs px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                      了解完整课程 {video.relatedCourse.price}
                    </Link>
                  </div>
                </div>
              )}

              {/* 上下期导航 */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                {prevVideo ? (
                  <Link href={`/videos/${prevVideo.slug}`} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group">
                    <p className="text-xs text-gray-400 mb-1">← 上一期</p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-1">{prevVideo.title}</p>
                  </Link>
                ) : <div />}
                {nextVideo ? (
                  <Link href={`/videos/${nextVideo.slug}`} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group text-right">
                    <p className="text-xs text-gray-400 mb-1">下一期 →</p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors line-clamp-1">{nextVideo.title}</p>
                  </Link>
                ) : <div />}
              </div>
            </div>

            {/* 侧栏 */}
            <div className="w-full lg:w-72 flex-shrink-0 px-6 lg:px-0 lg:pr-8 py-8 lg:border-l border-gray-100">
              {/* 作者卡片 */}
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm">象</div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">大象学长</p>
                    <p className="text-gray-400 text-xs">AI视频创作者</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  用导演思维和系统化工作流，帮你做出真实耐看的AI视频。
                </p>
              </div>

              {/* 标签 */}
              {video.tags && video.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-gray-900 text-sm font-medium mb-3">标签</h4>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
