
import { Project, ExperienceItem, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HOKA 体验中心",
    category: "小程序 / UI 重构",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800",
    description: "主导 HOKA 品牌社区及体验中心小程序的 UI 全流程重构。通过模块化设计提升用户粘性，优化购物动线，并在视觉上深度契合越野跑品牌的硬核基因。",
    size: 'large'
  },
  {
    id: 2,
    title: "Ferragamo 官方商城",
    category: "电商 / 官方商城",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    description: "针对顶级奢侈品牌 Ferragamo 进行官方商城及小程序的搭建。强调尊贵感与极简交互，在本地化过程中完美保留了品牌的意大利美学底蕴。",
    size: 'medium'
  },
  {
    id: 3,
    title: "Adidas HK 功能迭代",
    category: "电商 / 功能设计",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=800",
    description: "核心参与 Adidas 香港官方商城的持续迭代。针对高频交易场景进行 A/B 测试与链路优化，显著提升了转化率与移动端操作体验。",
    size: 'medium'
  },
  {
    id: 4,
    title: "Valentino 本地化部署",
    category: "电商 / 本地化",
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=800",
    description: "负责 Valentino 商城翻新与中国区本地化部署。通过自研组件库快速适配本土社交生态环境，助力品牌在中国市场的数字化转型。",
    size: 'small'
  },
  {
    id: 5,
    title: "PVH 集团运维项目",
    category: "运维 / 体验设计",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    description: "为 Calvin Klein 与 Tommy Hilfiger 提供官方商城及小程序的长期体验运维。平衡商业大促需求与视觉一致性，确保千万级流量下的极致稳定。",
    size: 'medium'
  },
  {
    id: 6,
    title: "数字艺术探索",
    category: "实验 / 3D 视觉",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    description: "在设计之余探索 UI 与视觉艺术的边界。利用 AI 与 3D 工具创作超现实主义界面，为商业项目提供非传统的灵感来源。",
    size: 'large'
  },
  {
    id: 7,
    title: "Nike Rise 零售空间",
    category: "新零售 / 数字化体验",
    image: "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?auto=format&fit=crop&q=80&w=800",
    description: "参与 Nike 数字化门店的线下屏交互设计。打通线上线下库存与会员权益，实现沉浸式的运动社群购物体验。",
    size: 'medium'
  },
  {
    id: 8,
    title: "Maison Margiela 艺术策展",
    category: "奢侈品 / 视觉呈现",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    description: "为 Maison Margiela 提供定制化网页视觉呈现方案。通过解构主义的设计手法，传递品牌独特的先锋艺术精神。",
    size: 'small'
  },
  {
    id: 9,
    title: "Lululemon 社区系统",
    category: "运动 / 社区交互",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    description: "设计 Lululemon 本地化社区活动报名系统。优化流程逻辑，显著降低了用户在移动端的跳出率。",
    size: 'medium'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "宝尊科技 (Baozun)",
    role: "资深用户体验设计师",
    period: "2017 - 至今",
    projects: [
      { name: "HOKA Experience Center", tag: "项目主导" },
      { name: "Ferragamo Official Mall", tag: "项目主导" },
      { name: "Adidas HK", tag: "核心参与" },
      { name: "Valentino", tag: "核心参与" },
      { name: "PVH Group (CK/TH)", tag: "运维主导" }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Figma / Sketch", icon: "💎", level: 98 },
  { name: "UI 体系搭建", icon: "🏗️", level: 95 },
  { name: "交互动效设计", icon: "✨", level: 88 },
  { name: "AI 辅助设计", icon: "🤖", level: 92 },
  { name: "多端适配", icon: "📱", level: 90 }
];
