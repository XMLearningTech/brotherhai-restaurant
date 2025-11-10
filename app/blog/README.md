# Brother Hai's Pho Restaurant - Blog Content

## 博客路径
- **Tips & Tricks Guide**: `/brother-hais-pho-restaurant/blog/tips`

## 博客内容概述

### Ultimate Tips & Tricks Guide
**文件位置**: 
- `app/brother-hais-pho-restaurant/blog/tips/content.ts` - 内容配置
- `app/brother-hais-pho-restaurant/blog/tips/page.tsx` - 页面组件

**内容包括**:

1. **基础技巧 (Basic Tips)**
   - 🍜 Master the Pho Assembly Order
   - ⏰ Watch Customer Patience Meters  
   - 💰 Upgrade Your Equipment Early
   - 🌿 Unlock Premium Ingredients Strategically

2. **高级策略 (Advanced Strategies)**
   - 🎯 The Rush Hour Strategy
   - 🌟 The Combo System Secret
   - 👥 Staff Management Optimization

3. **秘密技巧 (Secret Tips)**
   - 🎁 Daily Challenge Completion
   - 🏆 Achievement Hunting
   - 💎 VIP Customer System

4. **常见错误 (Common Mistakes to Avoid)**
   - Buying Decorations Too Early
   - Ignoring Ingredient Quality
   - Not Managing Table Turnover

5. **赚钱指南 (Money Making Guide)**
   - Beginner (0 - 5,000 coins)
   - Intermediate (5,000 - 25,000 coins)
   - Advanced (25,000 - 100,000 coins)
   - Master (100,000+ coins)

6. **专业技巧 (Pro Tricks & Shortcuts)**
   - 键盘快捷键
   - 隐藏机制
   - 高级操作

7. **常见问题 (FAQ)**
   - 5个详细的FAQ问答

## 博客链接位置

### 1. 游戏主页 CTA 卡片
在 `GamePageTemplate.tsx` 中，GameSection 下方有一个大型 CTA 卡片：
- 带有渐变背景和红色边框
- 包含4个标签：Money Making, Pro Strategies, Secret Tips, Advanced Tactics
- 点击跳转到博客指南页面

### 2. FAQ 部分
在游戏页面的 FAQ 中添加了专门的问题：
- "Where can I find a complete strategy guide for Brother Hai's Pho Restaurant?"
- 回答中提到了详细的指南链接

## 样式设计

博客页面采用统一的暗色主题：
- **背景**: `bg-gray-950` (深黑色)
- **卡片背景**: `bg-gray-900` (深灰色)
- **主色调**: 红色 (`red-500`, `red-400`)
- **次要色调**: 绿色、黄色、紫色用于不同类型的提示
- **边框**: `border-gray-800` / `border-red-500/30`

## 内容特点

1. **丰富的游戏策略** - 从新手到专家的完整进阶指南
2. **视觉层次分明** - 使用表情符号和颜色编码区分不同类型内容
3. **实用性强** - 包含具体数值和时间预估
4. **SEO 优化** - 完整的 metadata 和结构化内容
5. **响应式设计** - 适配移动端和桌面端

## 如何添加更多博客内容

1. 在 `app/brother-hais-pho-restaurant/blog/` 下创建新文件夹
2. 添加 `content.ts` 定义内容
3. 添加 `page.tsx` 创建页面组件
4. 在游戏主页或其他位置添加链接

例如：
```
app/brother-hais-pho-restaurant/blog/
  ├── tips/           (当前指南)
  ├── recipes/        (可以添加食谱指南)
  ├── achievements/   (可以添加成就指南)
  └── updates/        (可以添加更新日志)
```

## 测试访问

启动开发服务器后，访问：
- http://localhost:3000/brother-hais-pho-restaurant/blog/tips

从游戏主页访问：
- http://localhost:3000/brother-hais-pho-restaurant (查看 CTA 卡片和 FAQ)
