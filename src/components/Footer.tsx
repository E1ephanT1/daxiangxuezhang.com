import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-sm">象</div>
              <span className="text-gray-900 font-semibold">大象学长</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              用导演思维，做出真实耐看的AI视频
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 text-sm font-medium mb-4">内容</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <Link href="/videos" className="block hover:text-gray-900 transition-colors">免费AI攻略</Link>
              <Link href="/courses" className="block hover:text-gray-900 transition-colors">付费课程</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 text-sm font-medium mb-4">学习</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <Link href="/courses" className="block hover:text-gray-900 transition-colors">AI导演课程</Link>
              <p className="hover:text-gray-900 cursor-pointer transition-colors">弟子班</p>
              <p className="hover:text-gray-900 cursor-pointer transition-colors">学员社群</p>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 text-sm font-medium mb-4">联系</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p>B站：大象学长</p>
              <p>抖音：大象学长</p>
              <p>微信公众号</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-xs">© 2026 大象学长 · All rights reserved</p>
          <div className="flex gap-4 text-xs text-gray-300">
            <span>京ICP备XXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
