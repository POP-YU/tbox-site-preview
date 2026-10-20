// T-Box 站点配置 —— 单一数据源，页面所有动态值都从这里取。
//
// 2026-10-19 修正：此前这里的 SIZE/SHA256 与实际安装包对不上
//   SIZE   声称 183,102,552  → 实测 183,155,560
//   SHA256 声称 1364F55F…921F86 → 实测 D1F82B19…593E74（完全不同）
// 站点主打「每个宣称都能自己验证」，哈希写错等于自毁信任，故按实测值写死。
//
// BUY_URL / MIRROR_1 / MIRROR_2 留空 = 未配置购买通道：
//   前端不会弹内部开发提示，而是显示「购买通道即将开放」。
//   接入发卡平台后把商品页链接填进 BUY_URL 即可，无需改 HTML。
window.TBOX_CONFIG = {
  BUY_URL: "",
  // 三档各自直链（填了就用各自的；留空则回落到上面的 BUY_URL）
  // 为什么分开：买家点「买永久卡」却落到 49 元月卡页，价格对不上就是纠纷。
  BUY_URL_TRIAL: "",
  BUY_URL_MONTH: "",
  BUY_URL_SEASON: "",
  // 备用线路 1：生产仓库的版本列表页。
  // 生产仓库目前没有 Release，点进去是「暂无发布版本」——
  // 所以它只能当备用，主线路必须指向真能下到文件的地址。
  MIRROR_1: "https://github.com/tianou10086-create/tbox-site/releases",
  MIRROR_2: "",
  VERSION: "0.1.23",
  SIZE: "183,162,288 bytes",
  SHA256: "9F231BFD61A0A041D99B86E5E7894E6879E560065228C3FA204DA8A542AC9D2B",
  RELEASE_DATE: "2026-10-19",
  // 183MB 安装包不进 Pages 仓库（GitHub 单文件上限 100MB），走 Release 发布。
  // 主线路必须**直连文件**：原来指向 tianou10086-create/tbox-site/releases，
  // 而那个仓库还没有 Release，点主线路等于走进「暂无发布版本」的死胡同
  // （2026-10-19 实测：这条直链 200 / 183,155,560 B；原主线路是空列表页）。
  // 生产仓库建好自己的 Release 后，把这两行对调回来（见 STATE.md 待办）。
  //
  // 0.1.21 → 0.1.22 变的是什么：激活。
  //   0.1.21 的启动器把卡密发往 license.tbox.example.com（IANA 保留占位域名），
  //   必然失败；0.1.22 改成离线签名卡密，卡密自带 RSA 签名，本机验、不联网。
  PRIMARY_DOWNLOAD: "https://github.com/POP-YU/tbox-site-preview/releases/download/v0.1.23/TBox-Setup.exe"
};
