# CCW 上下文速讀檔
> Claude Cowork 每次新任務開始時讀這個檔案，立刻掌握所有背景。

---

## 我是誰

我是 **CCW（Claude Cowork）**，Mac 的開發與維護助手。
我運行在 Mac Mini M4 上的 VM 裡，可以讀寫 `~/Documents/Claude/` 資料夾。

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
**GitHub 帳號層級：**
  - mac2nice308152 → 舊帳號，已停用 ❌
  - mac2good909777-commits → 緊急備用帳號（目前 backup repo 在此）
  - mac2good909777 → 新正式帳號（待遷移）✅
**Google Cloud 專案：** coherent-surf-489717-q2
**OAuth Token：** ~/.google-mcp/tokens/mac2good.json

---

## 重要路徑

```
~/.openclaw/openclaw.json                    OC 主設定檔
~/.openclaw/workspace/SOUL.md               mm 的行為原則
~/.openclaw/workspace/MEMORY.md             mm 的長期記憶
~/.openclaw/workspace/SHORT_TERM.md         mm 的短期任務
~/.openclaw/workspace/GROUPS.md             各群組角色設定
~/.openclaw/workspace/GOOGLE_DOC_STYLE.md   Google Doc 排版規範（產出前必讀）
~/.openclaw/workspace/tools/                mm 的 Python 工具腳本
~/.openclaw/workspace/skills/               mm 的技能（SKILL.md）
~/.openclaw/cron/jobs.json                  所有排程任務設定
~/.openclaw/agents/housekeeper/workspace/   大管家的 workspace
~/Documents/Claude/                         CCW 的工作資料夾
~/Documents/Claude/.env                     所有 API Keys
~/Documents/Claude/backup_openclaw.sh       備份腳本（本機 + GitHub push）
~/Documents/Claude/system-architecture/    系統架構 repo（此檔案所在）
```

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
| 網路任務 | 群組 | -5064371355 | 網路調查，搜尋/比價/市場資訊，結果產出 Google Doc |

### Bot 2：大管家（@mac2housekeeper_bot）→ housekeeper Agent

| 對話 | 類型 | chat_id | 角色 |
|------|------|---------|------|
| 管家群 | 群組 | -5288539372 | 大管家的主要群組，發布每日匯報、排程通知 |

⚠️ 管家群（-5288539372）：@mac2housekeeper_bot 被踢，需重新邀請

**使用習慣：**
- mac2good DM = Mac 主動找 mm，臨時任務 / 即時執行
- 大管家 DM = 大管家主動推報告給 Mac，定時稽核結果
- 各群組 = 各自專屬任務，不做匯報或跨群組檢查

---

## 各群組 Google Doc

| 群組 | Doc ID |
|------|--------|
| 夢想家 | 1dzJS1mJvNqn0ynU-LSOmw2he8F7Q8jupyzzy1rU7OzE |
| 文章資訊收集 | 1NTtBz8hmUNFCTE4qV6sWaOePeH2FCnius9n9UiqXGzE |
| 財務 | 1oGaTj_oG_GAGYT08f7XQRxHsBqct-hzcx2wD6nEHIC8 |
| 行銷 | 1EWDtqw5SztXec2MtRfljtj0dREu2zpRZbQ49zswnwSU |
| 網路任務 | 1a_LJxOJPDIaiG8dWpfyPY2cXegvWyOanaiS4wL0ShII |
| 自動輸入 | 1-G7RDo4F7A7NdWRVFtymH1CDOHGN6onBnAA7y-P4kG8 |
| 管家群 | ⏳ 待建立 |

---

## Agent 分工

| 大管家（housekeeper）負責 | mm 負責 |
|--------------------------|---------|
| 所有固定排程 cron job 執行 | 各群組即時回應 |
| 每日任務稽核（07/14/19 時）→ DM Mac | 實驗中 / 未定型的流程 |
| 系統健康巡檢（每日 06:00） | Mac 臨時交辦的任務 |
| 工具品質測試（每日 12:00） | 各群組專屬任務執行 |
| Masterboard 定期更新推送 | 物件 / 客戶資料記錄 |
| 行銷週報生成（每週一 08:00） | |

---

## Cron Jobs 現況（8個）

| Agent | 任務名稱 | 排程 | 狀態 |
|-------|---------|------|------|
| housekeeper | 系統健康巡檢 | 每天 06:00 | ✅ |
| main | 06點天氣衣著提醒 | 每天 06:00 | ✅ |
| housekeeper | 任務清單播報 7-14-19 | 每天 07/14/19 → DM Mac | ✅ |
| housekeeper | 任務清單自動寫入 | 每天 07/14/19 | ✅ |
| housekeeper | 工具品質測試 | 每天 12:00 | ✅ |
| housekeeper | 行銷週報自動生成 | 每週一 08:00 | ✅ |
| main | 行程表到期檢查 | 平日 06:30/08:30/13:30/19:30 | ⏸️ 停用 |
| main | 週末行程表到期檢查 | 週末 08:30/19:30 | ⏸️ 停用 |

---

## mm 現有 Skills（7個）

| Skill | 說明 |
|-------|------|
| web-search | DuckDuckGo + Tavily AI 搜尋 |
| browser-auto | Playwright + Chromium 瀏覽器自動化 |
| weather | wttr.in 天氣查詢 |
| summarize | 內容摘要（網頁/文件/PDF）|
| auto_buyer_append | 自動解析買方需求 → Google Sheets |
| find-skills | 技能搜尋 |
| skill-vetter | 技能安全審核 |

## mm 現有 Tools（9個 Python 腳本）

```
google_docs.py           讀寫 Google Docs
google_sheets.py         讀寫 Google Sheets
share_sheet.py           Drive 權限
edge_tts_service.py      TTS 服務
edge_tts_worker.py       TTS Worker
send_text_voice.py       Telegram 語音發送
update_channel_summary.py   群組摘要同步
update_housekeeper_doc.py   任務看板同步
update_masterboard.py    Masterboard HTML 更新 + push
```

---

## 待處理（目前已知問題）

🔴 **緊急**
- 管家群重新邀請 @mac2housekeeper_bot（被踢，排程通知無法發出）
- 更換外洩的 OpenAI API Key（在 platform.openai.com/api-keys）

🟡 **進行中**
- Masterboard 定期更新（07/14/19 由大管家自動執行，待驗證 push 是否成功）
- Collector aggregator 串接（5 群組 config 已完成）
- 語音回覆測試（工具已就位，待測試）
- 行銷自動化（Benchmark API 優先）
- BotFather 改名：@mac2nice_bot 顯示名稱改為 mac2good

🔵 **待安排**
- 重啟行程表到期檢查 cron jobs（目前停用中）
- GA4 API 串接
- GitHub 帳號遷移（mac2good909777-commits → mac2good909777，需新 PAT + 建 repo）
- 管家群 Google Doc 建立（讓大管家稽核時納入）

---

## CCW 讀取相關檔案指令

需要更多細節時，我可以讀：
```
~/Documents/Claude/HANDOFF.md              完整交接文件
~/.openclaw/workspace/MEMORY.md            長期記憶
~/.openclaw/workspace/SOUL.md              mm 行為規則
~/.openclaw/agents/housekeeper/workspace/SOUL.md   大管家行為規則
~/.openclaw/cron/jobs.json                 排程任務清單
~/.openclaw/workspace/GROUPS.md            各群組角色設定
```

---

*最後更新：2026-03-12（CCW 手動整理，修正帳號層級、刪除失效 cron jobs、補齊群組 Doc 清單）*
