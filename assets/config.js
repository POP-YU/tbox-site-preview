// T-Box 站点配置 —— 0.1.35 真实发布数据（2026-10-25 由 DSH 回填）。
// 字节数与 SHA256 来自本机打包产物实测，并已与 GitHub Release 上传后回传的
// digest 逐字节核对一致（sha256:39cff2df…3a46dd5 / TBox-Setup 由 Get-FileHash 复核）。
// 下载直链指向 POP-YU/tbox-site-preview 的 Release 资产：GitHub 仓库单文件上限 100 MB，
// 101.9 MB 的安装包与 147.0 MB 的便携包只能作为 Release 资产分发，不能进仓库根目录。
// 购买链接尚未配置，保持空值由 app.js 兜底（不编造购买通道）。
window.TBOX_CONFIG = {
  BUY_URL: "",
  BUY_URL_TRIAL: "",
  BUY_URL_MONTH: "",
  BUY_URL_SEASON: "",
  MIRROR_1: "https://github.com/POP-YU/tbox-site-preview/releases/tag/v0.1.35",
  // 便携包直链（与 PORTABLE_URL 同源，保留该键以兼容旧断言）。
  MIRROR_2: "https://github.com/POP-YU/tbox-site-preview/releases/download/v0.1.35/TBox-0.1.35-portable.zip",
  VERSION: "0.1.35",
  SIZE: "106,842,674 bytes（101.9 MB）",
  SHA256: "3F6349596AAA0EF27E0CB2A8A20B46D7C9ADB72C6AA7F182E0ACEB6918FB4492",
  RELEASE_DATE: "2026-10-24",
  PRIMARY_DOWNLOAD: "https://github.com/POP-YU/tbox-site-preview/releases/download/v0.1.35/TBox-Setup-0.1.35.exe",
  PORTABLE_URL: "https://github.com/POP-YU/tbox-site-preview/releases/download/v0.1.35/TBox-0.1.35-portable.zip",
  PORTABLE_SIZE: "154,140,157 bytes（147.0 MB）",
  PORTABLE_SHA256: "39CFF2DFDF6E41C77C828E0BF4E33FE9B7E9B328372E19AEA3B92871F3A46DD5"
};
