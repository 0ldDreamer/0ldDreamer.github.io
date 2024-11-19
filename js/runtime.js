setInterval(() => {
    // 设置建站时间
    let create_time = Math.round(new Date('2024/11/17 18:00:00').getTime() / 1000); 
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    
    // 计算天、小时、分钟、秒
    let days = Math.floor(second / (24 * 3600));
    second %= (24 * 3600);
    let hours = Math.floor(second / 3600);
    second %= 3600;
    let minutes = Math.floor(second / 60);
    let seconds = second % 60;

    // 构建显示内容
    let currentTimeHtml = `本站已运行：${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;

    // 更新页面内容
    document.getElementById("runtime").innerHTML = currentTimeHtml;
}, 1000);
