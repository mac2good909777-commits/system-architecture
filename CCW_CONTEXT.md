# CCW 上下文速讀檔
> Claude Cowork 每次新任務開始時讀這個檔案，立刻掌握所有背景。

---

## 我是誰

我是 **CCW（Claude Cowork）**，Mac 的開發與維護助手。
我運行在 Mac Mini M4 上的 VM 裡，可以讀寫 `~/Documents/Claude/` 資料夾。

**Mac 的工作背景：** 台灣工業不動產仲介（廠房、工業用地買賣租賃）

---

## AI 工具簡稱對照

| 簡稱 | 全名 | 用途 |
|------|------|------|
| OC | OpenClaw | Mac Mini 上的 AI Agent 框架 |
| mm | mm（OC 的主 Agent） | 24H 待命的工作 AI，透過 Telegram 互動 |
| CCW | Claude Cowork | 本工具，開發/維護/腳本撰寫 |
| CC | Claude Chat | 一般對話用 Claude |
| GPT | ChatGPT | OpenAI 聊天介面 |
| GE | Gemini | Google AI |
| NBLM | NotebookLM | Google 筆記 AI |

---

## 系統關鍵資訊

**硬體：** Mac Mini M4（用戶名：mac2）
**OC 版本：** 2026.3.2
**OC Gateway：** ws://127.0.0.1:18789（port 18789）
**mm 模型：** openai/gpt-5.1-codex
**Google 帳號：** mac2good909777@gmail.com（舊帳號 mac2nice308152 已停用）
**Google Cloud 專案：** coherent-surf-489717-q2
**OAuth Token：** ~/.google-mcp/tokens/mac2good.json

---

## 重要路徑

```
~/.openclaw/openclaw.json          OC 主設定檔
~/.openclaw/workspace/SOUL.md      mm 的行為原則
~/.openclaw/workspace/MEMORY.md    mm 的長期記憶
~/.openclaw/workspace/tools/       mm 的 Python 工具腳本
~/.openclaw/workspace/skills/      mm 的技能（SKILL.md）
~/.openclaw/cron/jobs.json         mm 的排程任務
~/Documents/Claude/                CCW 的工作資料夾
~/Documents/Claude/.env            所有 API Keys
~/Documents/Claude/HANDOFF.md      系統交接文件（最完整）
~/Documents/Claude/openclaw_MEMORY.md  跨對話長期記憶
```

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

## mm 現有 Tools（8個 Python 腳本）

```bash
google_docs.py      # 讀寫 Google Docs
google_sheets.py    # 讀寫 Google Sheets
share_sheet.py      # Drive 權限
edge_tts_service.py # TTS 服務
edge_tts_worker.py  # TTS Worker
send_text_voice.py  # Telegram 語音發送
update_channel_summary.py  # 群組摘要同步
update_housekeeper_doc.py  # 任務看板同步
```

---

## Telegram 群組

| 群組 | chat_id | 狀態 |
|------|---------|------|
| 夢想家 | -5189082842 | ✅ 正常 |
| 文章資訊收集 | -5066112336 | ✅ 正常 |
| 財務 | -5131453587 | ✅ 正常 |
| 自動輸入 | -5252940048 | ✅ 正常 |
| 行銷 | -5197008668 | ✅ 正常 |
| 管家 | -5288539372 | ⚠️ bot 被踢，需重新邀請 @mac2nice_bot |

---

## 待處理（目前已知問題）

🔴 **緊急**
- 管家群重新邀請 @mac2nice_bot（2 個 cron job 報錯）
- 更換外洩的 OpenAI API Key（在 platform.openai.com/api-keys）

🟡 **進行中**
- GitHub Masterboard 部署（PAT 已提供給 mm，deploy 腳本在 ~/Documents/Claude/deploy_architecture.sh）
- Collector aggregator 串接（5 群組 config 已完成）
- 語音回覆測試（工具已就位，待測試）
- 行銷自動化（Benchmark API 優先）

🔵 **待安排**
- 重啟 Google 行程表到期 cron jobs
- GA4 API 串接
- OC 升級 2026.3.2 → 2026.3.7
- GitHub email 改為 mac2good909777

---

## CCW 讀取相關檔案指令

需要更多細節時，我可以讀：
```
~/Documents/Claude/HANDOFF.md          完整交接文件
~/Documents/Claude/openclaw_MEMORY.md  長期記憶
~/Documents/Claude/VERSION_NOTES.md    版本紀錄
~/.openclaw/workspace/SOUL.md          mm 行為規則
~/.openclaw/cron/jobs.json             排程任務清單
```

---

*最後更新：2026-03-12*
