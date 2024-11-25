const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d", {
  willReadFrequently: true,
});

function init() {
  const img = new Image();
  img.onload = () => {
    cvs.width = img.width;
    cvs.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = "redhat.jpg";
}

init();

cvs.addEventListener("click", (e) => {
  const x = e.offsetX,
    y = e.offsetY;
  // 取出点击位置的像素点颜色
  const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
  const clickColor = getColor(x, y, imgData);
  const greenColor = [0, 255, 0, 255];
  function _changeColor(x, y) {
    if (x < 0 || x >= cvs.width || y < 0 || y >= cvs.height) {
      return;
    }
    const color = getColor(x, y, imgData);
    if (diff(color, clickColor) > 100) {
      return;
    }
    if (diff(color, greenColor) === 0) {
      return;
    }
    const i = point2Index(x, y);
    imgData.data.set(greenColor, i);
    _changeColor(x + 1, y);
    _changeColor(x - 1, y);
    _changeColor(x, y + 1);
    _changeColor(x, y - 1);
    // for (let i = 0; i < imgData.data.length; i += 4) {
    //   const color = [
    //     imgData.data[i],
    //     imgData.data[i + 1],
    //     imgData.data[i + 2],
    //     imgData.data[i + 3],
    //   ];
    //   if (diff(color, greenColor) === 0) {
    //     i += 4;
    //   }
    //   if (
    //     diff(color, [
    //       imgData.data[i + 4],
    //       imgData.data[i + 5],
    //       imgData.data[i + 6],
    //       imgData.data[i + 7],
    //     ]) > 100
    //   ) {
    //     let time = 0;
    //     while (
    //       diff(color, [
    //         imgData.data[i + 4],
    //         imgData.data[i + 5],
    //         imgData.data[i + 6],
    //         imgData.data[i + 7],
    //       ]) > 100 &&
    //       i < imgData.data.length
    //     ) {
    //       i += 4;
    //     }
    //   }
    // }
  }
  for (;;) {
    try {
      _changeColor(x, y);
      ctx.putImageData(imgData, 0, 0);
      break;
    } catch (e) {
      ctx.putImageData(imgData, 0, 0);
    }
  }
});

function point2Index(x, y) {
  return (y * cvs.width + x) * 4;
}

function getColor(x, y, imgData) {
  const i = point2Index(x, y);
  return [
    imgData.data[i],
    imgData.data[i + 1],
    imgData.data[i + 2],
    imgData.data[i + 3],
  ];
}

function diff(color1, color2) {
  return (
    Math.abs(color1[0] - color2[0]) +
    Math.abs(color1[1] - color2[1]) +
    Math.abs(color1[2] - color2[2]) +
    Math.abs(color1[3] - color2[3])
  );
}
