import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// ====== 类型定义 ======
export interface VideoMeta {
  slug: string;
  title: string;
  bvid: string;
  category: string;
  date: string;
  duration: string;
  tags: string[];
  description: string;
  views?: string;
  isNew?: boolean;
  resources?: { name: string; file: string; size: string }[];
  relatedCourse?: {
    title: string;
    description: string;
    price: string;
    singlePrice: string;
  };
}

export interface VideoPost extends VideoMeta {
  contentHtml: string;
}

// ====== 视频内容 ======
const videosDirectory = path.join(process.cwd(), 'content/videos');

export function getAllVideos(): VideoMeta[] {
  if (!fs.existsSync(videosDirectory)) return [];

  const fileNames = fs.readdirSync(videosDirectory).filter(f => f.endsWith('.md'));
  const allVideos = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(videosDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      bvid: data.bvid || '',
      category: data.category || '',
      date: data.date || '',
      duration: data.duration || '',
      tags: data.tags || [],
      description: data.description || '',
      views: data.views || '',
      isNew: data.isNew || false,
      resources: data.resources || [],
      relatedCourse: data.relatedCourse || null,
    } as VideoMeta;
  });

  // 按日期倒序
  return allVideos.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getVideoBySlug(slug: string): Promise<VideoPost | null> {
  const fullPath = path.join(videosDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    bvid: data.bvid || '',
    category: data.category || '',
    date: data.date || '',
    duration: data.duration || '',
    tags: data.tags || [],
    description: data.description || '',
    views: data.views || '',
    isNew: data.isNew || false,
    resources: data.resources || [],
    relatedCourse: data.relatedCourse || null,
    contentHtml,
  } as VideoPost;
}

// ====== 工具函数 ======
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    '工作流': 'bg-blue-50 text-blue-600',
    '调色': 'bg-purple-50 text-purple-600',
    '工具评测': 'bg-orange-50 text-orange-600',
    '导演思维': 'bg-emerald-50 text-emerald-600',
    '商业': 'bg-rose-50 text-rose-600',
    '教程': 'bg-sky-50 text-sky-600',
    '方法论': 'bg-violet-50 text-violet-600',
    '资源': 'bg-teal-50 text-teal-600',
  };
  return colors[category] || 'bg-gray-50 text-gray-600';
}
