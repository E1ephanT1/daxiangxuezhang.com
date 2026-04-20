import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "付费课程 | 大象学长 · AI导演系列课程",
  description: "AI导演系列课程，12节系统化AI视频课程。从零到商业交付，小鹅通平台。",
};

const COURSES = [
  {
    title: "AI导演系列课 · 全套12节",
    price: "¥2,799",
    originalPrice: "¥3,588",
    tag: "最受欢迎",
    desc: "从零到商业交付的系统化AI视频课程",
    features: ["12节系统课程", "腾讯会议直播+回放", "课后作业点评", "学员专属社群"],
    highlight: true,
  },
  {
    title: "AI导演系列课 · 单节体验",
    price: "¥299",
    originalPrice: "",
    tag: "低门槛入门",
    desc: "按需选择感兴趣的单节课程",
    features: ["任选单节课程", "直播+回放", "课后答疑"],
    highlight: false,
  },
  {
    title: "弟子班 · 1对1年度辅导",
    price: "¥12,999",
    originalPrice: "",
    tag: "深度陪跑",
    desc: "全年1对1私人指导，定制成长路径",
    features: ["全年跟进辅导", "1对1私人指导", "作品深度点评", "商业资源对接"],
    highlight: false,
  },
];

export default function CoursesPage() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 页头 */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 mb-3">
            付费课程
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">AI导演系列课程</h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            接入小鹅通 · 系统化学习路径 · 从入门到商业交付
          </p>
        </div>

        {/* 课程卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {COURSES.map((c, idx) => (
            <div
              key={c.title}
              className={`relative p-6 rounded-2xl border transition-all ${
                c.highlight
                  ? "bg-gradient-to-b from-blue-50 to-white border-blue-200 shadow-md shadow-blue-100/50"
                  : "bg-white border-gray-100 hover:shadow-md hover:shadow-gray-100/50"
              }`}
            >
              {c.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                  推荐
                </div>
              )}
              <span
                className={`inline-block text-xs px-2.5 py-1 rounded-full mb-4 font-medium ${
                  c.highlight ? "bg-blue-100 text-blue-600" : "bg-gray-50 text-gray-500"
                }`}
              >
                {c.tag}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-2xl font-bold text-gray-900">{c.price}</span>
                {c.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">{c.originalPrice}</span>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl text-sm font-medium transition-all ${
                  c.highlight
                    ? "bg-gray-900 text-white hover:bg-gray-800 shadow-md shadow-gray-900/10"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {idx === 2 ? "预约咨询" : "立即报名"}
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">小鹅通平台购买</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            上课时间：每周三/周五/周日 20:00 · 腾讯会议直播 · 有回放
          </p>
        </div>
      </div>
    </section>
  );
}
