# CCW 上下文速讀檔
> Claude Cowork 每次新任務開始時讀這個檔案，立刻掌握所有背景。

---

## 我是誰

我是 **CCW（Claude Cowork）**，Mac 的開發與維護助手。
我運行在 Mac Mini M4 上的 VM 裡，可以讀寫  資料夾。

**Mac 的工作背景：** 台灣工業不動產仲介（廠房、工業用地買賣租賃）

---

## 常用指令簡碼

| 簡碼 | 意思 |
|------|------|
| 000 | OK／要／確認執行 |

---

## AI 工具簡稱對照

| 簡稱 | 全名 | 用途 |
|------|------|------|
| OC | OpenClaw | Mac Mini 上的 AI Agent 框架 |
| mm | mm（OC 的主 Agent） | 24H 待命的工作 AI，透過 Telegram 互動 |
| 大管家 | housekeeper Agent | 固定排程監控 Agent，獨立 bot |
| CCW | Claude Cowork | 本工具，開發/維護/腳本撰寫 |
| CC | Claude Chat | 一般對話用 Claude |
| GPT | ChatGPT | OpenAI 聊天介面 |
| GE | Gemini | Google AI |
| NBLM | NotebookLM | Google 筆記 AI |

---

## 系統關鍵資訊

**硬體：** Mac Mini M4（用戶名：mac2）
**OC 版本：** 2026.3.10（從 ~/.openclaw/oc-src 運行，pnpm global install）
**OC Gateway：** ws://127.0.0.1:18789（port 18789）
**OC LaunchAgent：** ~/Library/LaunchAgents/ai.openclaw.gateway.plist
**OC 程式碼路徑：** ~/.openclaw/oc-src/（永久路徑，pnpm link）
**mm 模型：** openai/gpt-5.1-codex
**Google 帳號：** mac2good909777@gmail.com（舊帳號 mac2nice308152 已停用）
**GitHub 帳號：** mac2good909777-commits
**Google Cloud 專案：** coherent-surf-489717-q2
**OAuth Token：** ~/.google-mcp/tokens/mac2good.json

---

## 重要路徑

======================================
  OpenClaw 系統備份
  日期: 2026-03-12 11:22:42
======================================

📝 [0/4] 更新系統架構文件（CCW_CONTEXT.md）...

---

## Telegram 架構（雙 Agent 雙 Bot）

### Bot 1：mac2good（@mac2nice_bot）→ mm Agent（main）

| 對話 | 類型 | chat_id | mm 的角色 |
|------|------|---------|-----------|
| mac2good 私訊 | DM | 8285632663 | 即時任務助理，臨時交辦、實驗流程 |
| 夢想家 | 群組 | -5189082842 | 創新顧問，OC 新功能 / 未來規劃 |
| 文章 資訊收集 | 群組 | -5066112336 | 資訊彙整，摘要寫入 Google Doc |
| 行銷 | 群組 | -5197008668 | 行銷顧問，物件文案 / 策略 |
| 財務 | 群組 | -5131453587 | 財務助理，試算 / 記帳 |
| 自動輸入 | 群組 | -5252940048 | 自動化流程，資料輸入 |

⚠️ 管家群（-5288539372）：bot 被踢，需重新邀請 @mac2nice_bot（2 個 cron job 報 403）

### Bot 2：大管家（@mac2housekeeper_bot）→ housekeeper Agent

| 對話 | 類型 | 角色 |
|------|------|------|
| 大管家 私訊 | DM | 固定排程匯報 + 系統監控（主動推播給 Mac） |

**使用習慣：**
- mac2good DM = Mac 主動找 mm，臨時任務 / 即時執行
- 大管家 DM = 大管家主動推報告給 Mac，定時稽核結果
- 夢想家群 = 規劃性討論（新系統、新功能、未來方向）
- 各群組 = 各自專屬任務，不做匯報或跨群組檢查

---

## Agent 分工

| 大管家（housekeeper）負責 | mm 負責 |
|--------------------------|---------|
| 所有固定排程 cron job 執行 | 各群組即時回應 |
| 每日任務稽核（07/14/19 時） | 實驗中 / 未定型的流程 |
| 系統健康巡檢（每日 06:00） | Mac 臨時交辦的任務 |
| 工具品質測試（每日 12:00） | 各群組專屬任務執行 |
| Masterboard 定期更新推送 | 物件 / 客戶資料記錄 |
| 行銷週報生成（每週一 08:00） | |

大管家稽核內容：SHORT_TERM.md 任務進度 + 各群組 Google Doc 日摘要 + 行程表三天內行程

---

## Cron Jobs 現況

| Agent | 任務名稱 | 狀態 |
|-------|---------|------|
| main | 早上6點半鬧鐘提醒 | ✅ |
| main | 早上7點提醒台中港 | ✅ |
| main | 行程表到期檢查 | ❌ |
| main | 週末行程表到期檢查 | ❌ |
| housekeeper | 任務清單播報 7-14-19 | ✅ |
| housekeeper | 任務清單自動寫入 | ✅ |
| main | 06點天氣衣著提醒 | ✅ |
| housekeeper | 系統健康巡檢 | ✅ |
| housekeeper | 工具品質測試 | ✅ |
| housekeeper | 行銷週報自動生成 | ✅ |

---

## mm 現有 Skills（7個）

| Skill | 說明 |
|-------|------|
| web-search | DuckDuckGo + Tavily AI 搜尋（已設定 TAVILY_API_KEY） |
| browser-auto | Playwright + Chromium 瀏覽器自動化（已安裝）|
| weather | wttr.in 天氣查詢（免 API key）|
| summarize | 內容摘要（網頁/文件/PDF）|
| auto_buyer_append | 自動解析買方需求 → Google Sheets |
| find-skills | 技能搜尋 |
| skill-vetter | 技能安全審核 |

## mm 現有 Tools（9個 Python 腳本）



---

## 待處理（目前已知問題）

🔴 **緊急**
- 管家群重新邀請 @mac2nice_bot（2 個 cron job 連續 403 錯誤）
- 更換外洩的 OpenAI API Key（在 platform.openai.com/api-keys）

🟡 **進行中**
- GitHub Masterboard 部署（repo 已建，PAT 已設定於 masterboard_repo/.git/config）
- Collector aggregator 串接（5 群組 config 已完成）
- 語音回覆測試（工具已就位，待測試）
- 行銷自動化（Benchmark API 優先）
- BotFather 改名：@mac2nice_bot 顯示名稱改為 mac2good

🔵 **待安排**
- 重啟 行程表到期檢查 cron jobs（目前停用中）
- GA4 API 串接
- 大管家各群組 Google Doc 日摘要整合測試
- **GitHub 帳號遷移**（mac2good909777-commits → mac2good909777）：
  1. 在 mac2good909777 建立新 PAT（repo 權限）
  2. 建立 repo：system-architecture（公開）+ openclaw-config-backup（私有）
  3. 提供新 PAT 給 CCW，更新 backup_openclaw.sh 並重新推送

---

## CCW 讀取相關檔案指令

需要更多細節時，我可以讀：


---

*最後更新：2026-03-12（由 backup_openclaw.sh 自動更新）*
