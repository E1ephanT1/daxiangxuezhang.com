---
title: "用Sora做出电影级AI短片的完整工作流"
bvid: "BV1xxxxxxxxx"
category: "工作流"
date: "2026-04-15"
duration: "18:24"
views: "12.3万"
isNew: true
tags: ["Sora", "工作流", "AI短片"]
description: "本期详细拆解从概念到成片的全流程，包含提示词策略、镜头规划、后期调色等关键环节。"
resources:
  - name: "分镜脚本模板.xlsx"
    file: "sora-storyboard-template.xlsx"
    size: "24 KB"
  - name: "Sora提示词合集.txt"
    file: "sora-prompts.txt"
    size: "3 KB"
  - name: "DaVinci调色预设.drx"
    file: "davinci-preset.drx"
    size: "128 KB"
relatedCourse:
  title: "AI导演系列课 · 第3节：视频生成工作流设计"
  description: "课程中会讲解更多工具的对比、更复杂的多镜头项目管理、以及商业交付标准的详细拆解。"
  price: "¥2,799"
  singlePrice: "¥299"
---

## 1. 前期规划：从想法到分镜

做 AI 短片最常见的错误是直接上手生成。但没有前期规划的生成效率极低——你会不断重来，不知道什么算"好"，最后时间全耗在无意义的试错上。

我的工作流第一步一定是**先确定故事线**。哪怕只是一个 60 秒的短片，也需要有明确的情绪弧线：开头建立什么氛围，中间制造什么转折，结尾留下什么感受。

## 2. Sora 提示词策略

Sora 的提示词和 Midjourney 有本质区别。它更像在给一个摄影师下指令——你需要描述的是**镜头视角、运动方式和光线条件**，而不是堆砌形容词。

提示词模板结构：**镜头运动 → 主体描述 → 光线条件 → 技术参数**

```
A slow aerial tracking shot over a sleeping city at dawn.
Warm golden light breaks through low clouds, casting long shadows.
Shot on anamorphic lens, cinematic color grading. 4K, 24fps.
```

## 3. 后期流程：调色与音效

AI 生成的素材"直出"是不能用的——和实拍一样，它需要经过调色才能统一影片的视觉风格。

调色参数参考：
- 色温偏移：+320K（偏暖）
- 对比度：S曲线，暗部提亮15%
- 饱和度：整体-10，橙色+20
- 输出：H.265 · 4K · 50Mbps
