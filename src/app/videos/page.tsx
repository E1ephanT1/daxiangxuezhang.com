import { getAllVideos } from "@/lib/content";
import { VideoCard } from "@/components/VideoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免费AI攻略 | 大象学长",
  description: "大象学长的全部免费视频攻略，B站同步，站内直接观看，每期附带详细笔记与资源下载。",
};

export default function VideosPage() {
  const videos = getAllVideos();

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 页头 */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 mb-3">
            免费AI攻略
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">全部视频攻略</h1>
          <p className="text-gray-400 text-sm">
            B站同步 · 站内直接观看 · 每期附带详细笔记与资源下载
          </p>
        </div>

        {/* 视频网格 */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((v) => (
              <VideoCard key={v.slug} video={v} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-400 text-lg mb-2">暂无视频内容</p>
            <p className="text-gray-300 text-sm">
              在 <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-500">content/videos/</code> 文件夹中添加 Markdown 文件即可自动显示
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
