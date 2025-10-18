import { HomeContent } from "./HomeContent";

/**
 * 服务器组件 - 首页模板
 * 
 * 这是一个服务器组件包装器，用于：
 * 1. 在服务器端渲染静态内容（SEO优化）
 * 2. 包装客户端交互组件
 * 3. 可以在这里进行数据预取（如果需要）
 */
export function HomeTemplate() {
  // 可以在这里执行服务器端数据获取
  // 例如: const data = await fetchData();
  
  return <HomeContent />;
}