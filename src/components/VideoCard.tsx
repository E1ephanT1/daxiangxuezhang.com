import Link from "next/link";
import { getCategoryColor, type VideoMeta } from "@/lib/content";

export function VideoCard({ video }: { video: VideoMeta }) {
  const colorClass = getCategoryColor(video.category);

  return (
    <Link href={`/videos/${video.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
        {/* 封面占位（后续可替换为真实封面） */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all relative z-10"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          <span className="absolute bottom-2.5 right-2.5 text-xs text-white bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm">
            {video.duration}
          </span>
          {video.isNew && (
            <span className="absolute top-2.5 left-2.5 text-xs bg-orange-500 text-white px-2.5 py-0.5 rounded-full font-medium">
              NEW
            </span>
          )}
        </div>
        <div className="p-4">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colorClass}`}>
            {video.category}
          </span>
          <h3 className="text-gray-900 text-sm font-medium mt-2.5 leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-2">
            {video.title}
          </h3>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            {video.views && <span>{video.views}播放</span>}
            <span>{video.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
