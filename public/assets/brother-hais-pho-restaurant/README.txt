如何添加 Brother Hai's Pho Restaurant 游戏图片
=================================================

当前状态：游戏已添加，但缺少图片，所以在主页可能看不到游戏卡片。

快速添加图片的方法：
---------------------

方式1：从 itch.io 下载
1. 访问：https://marisa0704.itch.io/brother-hais-pho-restaurant
2. 右键点击游戏封面图片 → "图片另存为"
3. 保存到：e:\ChuHai Project\raise animals\public\assets\brother-hais-pho-restaurant\brother-hais-pho-restaurant.png

方式2：使用现有图片作为占位符（测试用）
复制其他游戏的图片作为临时占位符：
```powershell
Copy-Item "e:\ChuHai Project\raise animals\public\assets\curve-rush\curve-rush.png" "e:\ChuHai Project\raise animals\public\assets\brother-hais-pho-restaurant\brother-hais-pho-restaurant.png"
Copy-Item "e:\ChuHai Project\raise animals\public\assets\curve-rush\curve-rush-logo.png" "e:\ChuHai Project\raise animals\public\assets\brother-hais-pho-restaurant\brother-hais-pho-restaurant-logo.png"
```

需要的图片文件：
---------------
1. brother-hais-pho-restaurant.png（主图，1200x630px 或类似比例）
2. brother-hais-pho-restaurant-logo.png（Logo，200x200px 左右）

测试步骤：
---------
1. 添加图片后，刷新浏览器（Ctrl + Shift + R）
2. 访问 http://localhost:3000
3. 滚动到 "Hot Games" 部分
4. 应该能看到新游戏卡片了！

如何访问游戏页面：
-----------------
直接访问：http://localhost:3000/brother-hais-pho-restaurant

这个页面应该已经能正常显示（除了图片部分可能是占位符）。
