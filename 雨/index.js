// 获取 canvas 元素
const cvs = document.getElementById("bg");

// 获取视口宽高
const width = window.innerWidth * devicePixelRatio,
  height = window.innerHeight * devicePixelRatio;

// 设置 canvas 宽高
cvs.width = width;
cvs.height = height;

// 获取绘制上下文
const ctx = cvs.getContext("2d");

// 字体大小
const fontSize = 20 * devicePixelRatio;

// 列宽
const columnWidth = fontSize;

// 列数
const columnCount = Math.floor(width / columnWidth);

// 每一列下一个字符的索引
const nextCharts = new Array(columnCount).fill(0);

/**
 * 画一排文字
 * @author 李霈辰 <Zelian666@outlook.com>
 */
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < columnCount; i++) {
    const char = getRandomChar();
    ctx.fillStyle = getRandomColor();
    ctx.font = `${fontSize}px "Roboto Mono"`;
    const x = columnWidth * i;
    const index = nextCharts[i];
    const y = (index + 1) * fontSize;
    ctx.fillText(char, x, y);
    if (y > height && Math.random() > 0.99) {
      nextCharts[i] = 0;
    } else {
      nextCharts[i]++;
    }
  }
}

/**
 * 获取随机颜色
 * @author 李霈辰 <Zelian666@outlook.com>
 * @returns {String} 随机颜色
 */
function getRandomColor() {
  return "#" + Math.random().toString(16).slice(2, 8).padEnd(6, "0");
}

/**
 * 获取随机字符
 * @author 李霈辰 <Zelian666@outlook.com>
 * @returns {String} 随机字符
 */
function getRandomChar() {
  const str =
    "abcdefghijklmnopqrstuvwxyz0123456789()[]{}/?\\+=-*&^%$#@!~`\"'|.,<>;: _~";
  let result = str[Math.floor(Math.random() * str.length)];
  if (Math.random() < 0.5) {
    result = result.toUpperCase();
  }
  return result;
}

draw();

setInterval(draw, 40);
