/**
 * Google Apps Script for Karthikeya Pantam Website Contact Form
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new blank spreadsheet.
 * 2. Rename the spreadsheet to "Website Contact Inquiries".
 * 3. Go to Extensions -> Apps Script.
 * 4. Paste ALL of this code into Code.gs (replacing any existing code).
 * 5. Click "Deploy" -> "New deployment".
 * 6. Click the gear icon (Select type) -> Choose "Web app".
 * 7. Set:
 *    - Description: Website Contact Handler
 *    - Execute as: Me (your email)
 *    - Who has access: Anyone
 * 8. Click "Deploy", authorize access, and COPY the Web App URL.
 * 9. Paste the Web App URL into your .env file:
 *    VITE_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/AKfycb.../exec"
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    // Auto-create header row if sheet is brand new
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email Address",
        "Organization / Clinic",
        "Reason for Contact",
        "Message"
      ]);
      
      // Format headers
      var headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0284c7");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    // Extract form parameters
    var params = e.parameter || {};
    var timestamp = params.timestamp || new Date().toLocaleString();
    var name = params.name || "N/A";
    var email = params.email || "N/A";
    var organization = params.organization || "N/A";
    var reason = params.reason || "General Inquiry";
    var message = params.message || "N/A";

    // Append submission row to sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      organization,
      reason,
      message
    ]);

    // Optional: Send instant notification email to founder
    try {
      var recipient = "karthikeyapantam@aiiens.com";
      var subject = "New Website Inquiry from " + name + " (" + reason + ")";
      var body = "You received a new inquiry from your website:\n\n" +
                 "Full Name: " + name + "\n" +
                 "Email: " + email + "\n" +
                 "Organization: " + organization + "\n" +
                 "Reason: " + reason + "\n" +
                 "Timestamp: " + timestamp + "\n\n" +
                 "Message:\n" + message + "\n";
                 
      MailApp.sendEmail(recipient, subject, body);
    } catch (emailErr) {
      Logger.log("Email notification error: " + emailErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", status: 200 }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Google Apps Script Web App for Karthikeya Pantam Website is active.");
}
