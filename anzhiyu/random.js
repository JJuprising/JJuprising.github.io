var posts=["2022/07/01/2022web大作业/","2023/03/13/AR开发-空间定位点/","2023/06/08/Android-Studio降雨热力图/","2023/10/30/BCI-MindBrige使用手册/","2022/11/16/Dijkstra算法C++实现/","2022/07/01/Cpp语言程序设计/","2023/01/02/Linux笔记/","2022/09/06/js导出json文件/","2022/03/02/hello-world/","2023/09/17/JJ的算法之旅/","2022/09/29/Java学习笔记/","2023/10/11/latex常用命令/","2022/09/27/pytorch深度学习笔记/","2022/07/01/中华文化酷！小程序/","2022/03/03/my-first-blog/","2022/03/04/云服务器搭建mc服务器经验总结/","2024/03/07/大数据原理与实践/","2023/07/09/人机交互笔记/","2023/09/14/大型数据库笔记/","2022/09/24/python学习笔记/","2022/11/03/如何写申报书和管理项目/","2022/08/24/微信小程序学习记录/","2023/09/14/操作系统笔记/","2023/09/18/数字图像处理笔记/","2023/02/09/数据分析笔记/","2023/07/10/数据库-php大作业/","2023/07/10/数据库笔记/","2023/11/19/数模notes/","2022/11/14/爱心特效/","2022/11/16/数据结构学习笔记/","2022/12/12/用ChatGPT写一个刷题软件/","2022/07/01/离散数学/","2023/07/10/磨蹭天气app-安卓大作业/","2022/07/01/线性代数/","2022/11/02/解决rehl8-Unable-to-read-consumer-identity的问题/","2023/04/01/脑电笔记/","2024/04/22/论文写作经验/","2024/03/18/论文精读-AlexNet/","2023/09/19/计算机组成原理/","2023/09/20/软件体系结构笔记/","2024/05/27/软件测试/","2023/07/09/计算机网络笔记/","2023/07/10/软件需求笔记/","2023/01/01/软件工程导论学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };