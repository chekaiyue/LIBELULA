(function () {
      var oList = document.querySelectorAll('.list h2'),
          oHide = document.querySelectorAll('.hide'),
          oIcon = document.querySelectorAll('.list i'),
          lastIndex = 0;
      for(var i=0;i<oList.length;i++){
          oList[i].index = i;//自定义属性
          oList[i].isClick = false;
          oList[i].initHeight = oHide[i].clientHeight;
          oHide[i].style.height = '0';
          oList[i].onclick = function () {
              if(this.isClick){
                  oHide[this.index].style.height = '0';
                  oIcon[this.index].className = '';
                  oList[this.index].className = '';
                  oList[this.index].isClick = false;
              }
              else{
                  oHide[lastIndex].style.height = '0';
                  oIcon[lastIndex].className = '';
                  oList[lastIndex].className = '';
                  oHide[this.index].style.height = '300px';
                  oIcon[this.index].className = 'on';
                  oList[this.index].className = 'on';
                  oList[lastIndex].isClick = false;
                  oList[this.index].isClick = true;
                  lastIndex = this.index;
              }
          }
      }
  })();

const bars = document.querySelectorAll('.result-bar .dot')
bars.forEach((bar, index) => {
  const nextBar = bars[index + 1]
  if (!nextBar) {
    return
  }
  let elLine = bar.querySelector('i')
  if (!elLine) {
    elLine = document.createElement('i')
    elLine.setAttribute('line', '')
    bar.appendChild(elLine)
  }
  // 计算线段长度和旋转弧度
  let boundThis = bar.getBoundingClientRect(),
      boundNext = nextBar.getBoundingClientRect(),
      x1 = boundThis.left,
      y1 = boundThis.top,
      x2 = boundNext.left,
      y2 = boundNext.top,
      distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)),
      radius = Math.atan((y2 - y1) / (x2 - x1))
  console.log(distance, radius)
  elLine.style.width = `${distance}px`
  elLine.style.transform=`rotate(${radius}rad)`
})