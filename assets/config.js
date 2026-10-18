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
  MIRROR_1: "",
  MIRROR_2: "",
  VERSION: "0.1.21",
  SIZE: "183,155,560 bytes",
  SHA256: "D1F82B1947CCE32C5DA14494F312A4E85B6E0A0A4A0E38C246C7F83531593E74",
  RELEASE_DATE: "2026-10-19",
  // 183MB 安装包不进 Pages 仓库（GitHub 单文件上限 100MB），走 Release 发布。
  PRIMARY_DOWNLOAD: "https://github.com/tianou10086-create/tbox-site/releases"
};
