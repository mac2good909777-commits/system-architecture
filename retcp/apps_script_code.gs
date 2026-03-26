/**
 * RETCP-2026 控場面板 — Google Apps Script 後端
 *
 * 部署步驟：
 * 1. 開啟 https://script.google.com → 新專案
 * 2. 把這整段程式碼貼上取代預設內容
 * 3. 修改下面的 SHEET_ID 為你的 RETCP_STATUS Google Sheet ID
 * 4. 點選「部署」→「新增部署」→ 類型選「網頁應用程式」
 *    - 執行身分：我自己
 *    - 存取權限：任何人
 * 5. 複製部署 URL 貼回控場面板的設定欄位
 */

// ====== 請改成你的 Sheet ID ======
const SHEET_ID = 'YOUR_SHEET_ID_HERE';

// ====== 主程式 ======

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheetId = data.sheetId || SHEET_ID;
    const ss = SpreadsheetApp.openById(sheetId);

    // 寫入「控場紀錄」分頁（自動建立）
    let sheet = ss.getSheetByName('控場紀錄');
    if (!sheet) {
      sheet = ss.insertSheet('控場紀錄');
      // 寫入標題列
      const headers = [
        '時間戳記', 'Phase', '週次', '停損燈號', '燈號理由',
        'P0_法律', 'P0_Sheet', 'P0_設定檔',
        'P1_SOP', 'P1_報告模板', 'P1_首份報告', 'P1_OC_Cron', 'P1_收款',
        'P2_品牌', 'P2_回饋',
        '決策_啟動日', '決策_法律', '決策_業助',
        '備註',
        'P0法律備註', 'P0Sheet備註', 'P0設定備註',
        'P1SOP備註', 'P1模板備註', 'P1報告備註', 'P1Cron備註', 'P1收款備註',
        'P2品牌備註', 'P2回饋備註'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // 組裝一列資料
    const row = [
      data.timestamp || new Date().toISOString(),
      data.phase || '',
      data.week || '',
      data.traffic_light || '',
      data.light_reason || '',
      data.task_p0_legal || '',
      data.task_p0_sheet || '',
      data.task_p0_confirm_config || '',
      data.task_p1_sop || '',
      data.task_p1_report_template || '',
      data.task_p1_first_report || '',
      data.task_p1_oc_cron || '',
      data.task_p1_payment || '',
      data.task_p2_brand_name || '',
      data.task_p2_sample_feedback || '',
      data.dec_decision_launch_date || '',
      data.dec_decision_legal || '',
      data.dec_decision_assistant || '',
      data.notes || '',
      data.note_p0_legal || '',
      data.note_p0_sheet || '',
      data.note_p0_confirm_config || '',
      data.note_p1_sop || '',
      data.note_p1_report_template || '',
      data.note_p1_first_report || '',
      data.note_p1_oc_cron || '',
      data.note_p1_payment || '',
      data.note_p2_brand_name || '',
      data.note_p2_sample_feedback || ''
    ];

    sheet.appendRow(row);

    // 同時更新「最新狀態」分頁（單列，永遠覆蓋）
    let latest = ss.getSheetByName('最新狀態');
    if (!latest) {
      latest = ss.insertSheet('最新狀態');
      latest.getRange(1, 1).setValue('最後更新');
      latest.getRange(1, 2).setValue('Phase');
      latest.getRange(1, 3).setValue('燈號');
      latest.getRange(1, 4).setValue('備註');
      latest.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    latest.getRange(2, 1).setValue(data.timestamp);
    latest.getRange(2, 2).setValue(data.phase);
    latest.getRange(2, 3).setValue(data.traffic_light);
    latest.getRange(2, 4).setValue(data.notes);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok', rows: sheet.getLastRow() })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheetId = e.parameter.sheetId || SHEET_ID;
    const ss = SpreadsheetApp.openById(sheetId);

    // 回傳最新狀態
    const latest = ss.getSheetByName('最新狀態');
    if (!latest) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'ok', data: null })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const values = latest.getRange(2, 1, 1, 4).getValues()[0];
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'ok',
        data: {
          timestamp: values[0],
          phase: values[1],
          traffic_light: values[2],
          notes: values[3]
        }
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
