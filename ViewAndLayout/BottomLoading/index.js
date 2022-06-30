// 此方法实现触底加载的页面展示功能需求

import React from 'react';
import './styles/index.less'

const BottomLoading = (props) => {
  const { } = props

  const handleLoadMore = () => {
    // 为测试效果临时使用 message
    message.info("触底了~");
  };

  const isTouchBottom = (handler) => {
    // 文档显示区域高度
    const showHeight = document.getElementsByClassName("overview-scroll")[0].clientHeight;
    // 网页卷曲高度
    const scrollTopHeight = document.getElementById("overview").scrollTop;
    // 所有内容高度
    const allHeight = document.getElementsByClassName("overview-container")[0].clientHeight;
    // (所有内容高度 = 文档显示区域高度 + 网页卷曲高度) 时即为触底
    console.log(showHeight, scrollTopHeight, allHeight);
    if (showHeight - 0.5 <= allHeight + scrollTopHeight) {
      handler();
    };
  };

  const useFn = throttle(() => {
    // 此处调用 加载更多函数
    isTouchBottom(handleLoadMore);
  }, 500);

  useEffect(() => {
    const overviewBody = document.getElementById("overview")
    // 开启侦听器,监听页面滚动
    overviewBody.addEventListener("scroll", useFn);
    // 组件销毁时移除侦听器
    return () => { window.removeEventListener("scroll", useFn) };
  }, []);

  return (
    <div
      id="overview"
      className='overview-container'
    >
      <div className='overview-scroll'>
        内容
      </div>
    </div>
  )
}

export default BottomLoading
