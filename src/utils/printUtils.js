import React from "react";
import { createRoot } from "react-dom/client";
import SalesReport from "../components/SalesReport/SalesReport";
import monaHeaderLogo from "../assets/monaHeaderLogo.svg";
import RepairsReport from "../components/RepairsReport/RepairsReport";
import html2pdf from "html2pdf.js";

export const printSalesReport = (reportData) => {
  // Create a new window for printing
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Please allow pop-ups to print the report");
    return;
  }

  // Write the initial HTML with all necessary styles
  printWindow.document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Sales Report</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 0;
    }

    body {
      background: #fff;
      color: #000;
      padding: 20px;
    }

    .report-container {
      border: 1px solid #ccc;
      max-width: 800px;
      margin: auto;
    }

    .report-header {
      background-color:#004AAD;
      color: white;
      text-align: center;
      padding: 25px 0;
      font-size: 18px;
      font-weight: bold;
    }

    .top-section {
      display: flex;
      justify-content: space-between;
      padding: 30px 20px 20px;
      align-items: flex-start;
    }

    .left-section img {
      height: 40px;
      margin-bottom: 10px;
    }

    .right-section {
      text-align: right;
    }

    .right-section h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .right-section p {
      font-size: 14px;
      line-height: 1.6;
    }

    .report-details {
      font-size: 14px;
      line-height: 1.8;
      margin-top: 10px;
    }

    .report-details span {
      font-weight: bold;
    }

    .section {
      padding: 20px;
      border-top: 1px solid #eee;
    }

    .section h3 {
      margin-bottom: 15px;
      font-size: 16px;
    }

    .section p {
      font-size: 14px;
      margin: 5px 0;
    }

    .repairs-highlight table {
      width: 100%;

      border-collapse: collapse;
      font-size: 14px;
      margin-top: 10px;
    }

    .repairs-highlight th, .repairs-highlight td {
      border: 1px solid #ccc;
      padding: 12px;
      text-align: center;
    }

    .repairs-highlight th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
.repairs-highlight th, .repairs-highlight td {
  border: none; /* removed border */
  padding: 12px;
  text-align: center;
}.repairs-highlight table {
  width: 100%;
  border-collapse: separate; /* Use separate to allow box shadows on cells */
  border-spacing: 0 10px; /* Add spacing between rows if desired */
  font-size: 14px;
  margin-top: 10px;
}

.repairs-highlight th,
.repairs-highlight td {
  border: none;
  text-align: center;
  padding: 12px;
}

.repairs-highlight td {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for each cell */
}

.repairs-highlight th {
  background-color: #f5f5f5;
  font-weight: bold;
}


    .repairs-info {
      margin-top: 20px;
    }

    .repairs-info table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      margin-top: 10px;
    }

    .repairs-info th, .repairs-info td {
      border: 1px solid #eee;
      padding: 10px;
      text-align: left;
    }

    .repairs-info thead {
      background-color: #f5f5f5;
    }
.repairs-info table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 14px;
  margin-top: 10px;
}

.repairs-info th, .repairs-info td {
  border: none;
  padding: 12px;
  text-align: left;
}

.repairs-info td {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for each cell */
}

.repairs-info thead {
  background-color: #f5f5f5;
}

    .status-paid {
      background-color: #E0FFED;
      color: #00752F;
      padding: 5px 10px;
      border-radius: 4px;
      display: inline-block;
    }

    .status-pending {
      background-color: #FFB82E26;
      color: #FFB82E;
      padding: 5px 10px;
      border-radius: 4px;
      display: inline-block;
    }

    .footer {
      font-size: 12px;
      padding: 15px 20px;
      border-top: 1px solid #eee;
      text-align: center;
      line-height: 1.6;
      color: #555;
    }

    .repairs-info-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .repairs-info-header h3 {
      margin: 0;
    }

    .date-range {
      display: flex;
      gap: 40px;
      text-align: center;
    }

    .date-block {
      font-size: 12px;
      text-transform: uppercase;
    }

    .date-block span {
      display: block;
      font-weight: normal;
      margin-top: 4px;
      text-transform: none;
    }
  </style>
</head>
<body>
  <div class="report-container">
    <div class="report-header">Sales Report</div>

    <div class="top-section">
      <div class="left-section">
          <img src="${monaHeaderLogo}" alt="Mona Protect Logo" />
        <div class="report-details">
          <p><span>Report ID:</span> RPT123456</p>
          <p><span>Generated by:</span> Admin 1/Michael James</p>
          <p><span>Generated on:</span> 2025-01-15 16:09:05</p>
          <p><span>Version:</span> 1.0</p>
        </div>
      </div>
      <div class="right-section">
        <h2>Sales Report</h2>
        <p>Mona Technologies Limited<br/>
        613 Ahmadu Bello Way, Abuja<br/>
        +234 903 345 6789<br/>
        info@monaprotect.com</p>
      </div>
    </div>

    <div class="section">
      <h3>Overview</h3>
      <p>Total No. of Devices: <strong>10</strong></p>
      <p>Total Cost of Repairs: <strong>₦100,000</strong></p>
      <p>Total Cost of Repairs paid: <strong>₦50,000</strong></p>
      <p>Total Cost of Repairs awaiting: <strong>₦50,000</strong></p>
    </div>

    <div class="section repairs-highlight">
      <h3>Highlight of Sales</h3>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Devices</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Damaged screen</td>
            <td>5</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Not Charging</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section repairs-info">
      <div class="repairs-info-header">
        <h3>Sales Information</h3>
        <div class="date-range">
          <div class="date-block">
            FROM
            <span>Jan. 22TH 2024</span>
          </div>
          <div class="date-block">
            TO
            <span>Dec. 22TH 2024</span>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Device model</th>
            <th>Brand</th>
            <th>Commission</th>
            <th>Status</th>
            <th>Team Member</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#0001</td>
            <td>Samsung</td>
            <td>₦123,345</td>
            <td><span class="status-paid">Paid</span></td>
            <td>Admin 1</td>
            <td>2025-01-15</td>
          </tr>
          <tr>
            <td>#0001</td>
            <td>Samsung</td>
            <td>₦123,345</td>
            <td><span class="status-pending">Pending</span></td>
            <td>Admin 1</td>
            <td>2025-01-15</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer">
      Generated on: 2025–01–15 16:30 | Page 1 of 1 | Report ID: RPT123456 | Mona Protect<br/>
      Confidential – For internal use only
    </div>
  </div>
</body>
</html>
  `);

  // Print after everything is loaded
  printWindow.document.close();
};

export const printRepairsReport = (reportData) => {
  // Create a new window for printing
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Please allow pop-ups to print the report");
    return;
  }

  // Write the initial HTML with all necessary styles
  printWindow.document.write(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Repairs Report</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 0;
    }

    body {
      background: #fff;
      color: #000;
      padding: 20px;
    }

    .report-container {
      border: 1px solid #ccc;
      max-width: 800px;
      margin: auto;
    }

    .report-header {
      background-color:#004AAD;
      color: white;
      text-align: center;
      padding: 25px 0;
      font-size: 18px;
      font-weight: bold;
    }

    .top-section {
      display: flex;
      justify-content: space-between;
      padding: 30px 20px 20px;
      align-items: flex-start;
    }

    .left-section img {
      height: 40px;
      margin-bottom: 10px;
    }

    .right-section {
      text-align: right;
    }

    .right-section h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .right-section p {
      font-size: 14px;
      line-height: 1.6;
    }

    .report-details {
      font-size: 14px;
      line-height: 1.8;
      margin-top: 10px;
    }

    .report-details span {
      font-weight: bold;
    }

    .section {
      padding: 20px;
      border-top: 1px solid #eee;
    }

    .section h3 {
      margin-bottom: 15px;
      font-size: 16px;
    }

    .section p {
      font-size: 14px;
      margin: 5px 0;
    }

    .repairs-highlight table {
      width: 100%;

      border-collapse: collapse;
      font-size: 14px;
      margin-top: 10px;
    }

    .repairs-highlight th, .repairs-highlight td {
      border: 1px solid #ccc;
      padding: 12px;
      text-align: center;
    }

    .repairs-highlight th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
.repairs-highlight th, .repairs-highlight td {
  border: none; /* removed border */
  padding: 12px;
  text-align: center;
}.repairs-highlight table {
  width: 100%;
  border-collapse: separate; /* Use separate to allow box shadows on cells */
  border-spacing: 0 10px; /* Add spacing between rows if desired */
  font-size: 14px;
  margin-top: 10px;
}

.repairs-highlight th,
.repairs-highlight td {
  border: none;
  text-align: center;
  padding: 12px;
}

.repairs-highlight td {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for each cell */
}

.repairs-highlight th {
  background-color: #f5f5f5;
  font-weight: bold;
}


    .repairs-info {
      margin-top: 20px;
    }

    .repairs-info table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      margin-top: 10px;
    }

    .repairs-info th, .repairs-info td {
      border: 1px solid #eee;
      padding: 10px;
      text-align: left;
    }

    .repairs-info thead {
      background-color: #f5f5f5;
    }
.repairs-info table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 14px;
  margin-top: 10px;
}

.repairs-info th, .repairs-info td {
  border: none;
  padding: 12px;
  text-align: left;
}

.repairs-info td {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for each cell */
}

.repairs-info thead {
  background-color: #f5f5f5;
}
  .status{
    width:80px;
    text-align:center;
    }

    .status-paid {
      background-color: #E0FFED;
      color: #00752F;
      padding: 5px 10px;
   
      display: inline-block;
    }

    .status-pending {
      background-color: #FFB82E26;
      color: #FFB82E;
      padding: 5px 10px;
     
      display: inline-block;
    }

    .footer {
      font-size: 12px;
      padding: 15px 20px;
      border-top: 1px solid #eee;
      text-align: center;
      line-height: 1.6;
      color: #555;
    }

    .repairs-info-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .repairs-info-header h3 {
      margin: 0;
    }

    .date-range {
      display: flex;
      gap: 40px;
      text-align: center;
    }

    .date-block {
      font-size: 12px;
      text-transform: uppercase;
    }

    .date-block span {
      display: block;
      font-weight: normal;
      margin-top: 4px;
      text-transform: none;
    }
  </style>
</head>
<body>
  <div class="report-container">
    <div class="report-header">Repairs Report</div>

    <div class="top-section">
      <div class="left-section">
          <img src="${monaHeaderLogo}" alt="Mona Protect Logo" />
        <div class="report-details">
          <p><span>Report ID:</span> RPT123456</p>
          <p><span>Generated by:</span> Admin 1/Michael James</p>
          <p><span>Generated on:</span> 2025-01-15 16:09:05</p>
          <p><span>Version:</span> 1.0</p>
        </div>
      </div>
      <div class="right-section">
        <h2>Repairs Report</h2>
        <p>Mona Technologies Limited<br/>
        613 Ahmadu Bello Way, Abuja<br/>
        +234 903 345 6789<br/>
        info@monaprotect.com</p>
      </div>
    </div>

    <div class="section">
      <h3>Overview</h3>
      <p>Total No. of Devices: <strong>10</strong></p>
      <p>Total Cost of Repairs: <strong>₦100,000</strong></p>
      <p>Total Cost of Repairs paid: <strong>₦50,000</strong></p>
      <p>Total Cost of Repairs awaiting: <strong>₦50,000</strong></p>
    </div>

    <div class="section repairs-highlight">
      <h3>Highlight of Repairs</h3>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Issues</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Damaged screen</td>
            <td>5</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Not Charging</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section repairs-info">
      <div class="repairs-info-header">
        <h3>Repairs Information</h3>
        <div class="date-range">
          <div class="date-block">
            FROM
            <span>Jan. 22TH 2024</span>
          </div>
          <div class="date-block">
            TO
            <span>Dec. 22TH 2024</span>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Approved by</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#0001</td>
            <td>Samsung</td>
            <td>Galaxy S20</td>
            <td>#123,345</td>
            <td><span class="status status-paid">Paid</span></td>
            <td>Admin 1</td>
            <td>2025-01-15</td>
          </tr>
          <tr>
            <td>#0001</td>
            <td>Samsung</td>
            <td>Galaxy S20</td>
            <td>#123,345</td>
            <td><span class="status status-pending">Pending</span></td>
            <td>Admin 1</td>
            <td>2025-01-15</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer">
      Generated on: 2025–01–15 16:30 | Page 1 of 1 | Report ID: RPT123456 | Mona Protect<br/>
      Confidential – For internal use only
    </div>
  </div>
</body>
</html>
  `);

  // Print after everything is loaded
  printWindow.document.close();
};

// Helper function to generate HTML content
const generateReportHTML = (title, content) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title} - Mona Protect</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
          body {
            margin: 0;
            padding: 0;
            background: white;
            font-family: 'Inter', sans-serif;
            color: #1a1a1a;
          }
          
          .print-container {
            padding: 40px;
            background: white;
            max-width: 1200px;
            margin: 0 auto;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
          }

          .header {
            background-color: #0052CC;
            color: white;
            padding: 16px;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 32px;
          }

          .report-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
          }

          .logo-container img {
            height: 60px;
            width: auto;
            object-fit: contain;
          }

          .company-info {
            text-align: right;
          }

          .company-info h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0 0 8px 0;
          }

          .company-info p {
            margin: 4px 0;
            color: #666;
          }

          .meta-section {
            margin-bottom: 40px;
          }

          .meta-row {
            display: flex;
            margin-bottom: 8px;
            font-size: 14px;
          }

          .meta-label {
            width: 120px;
            color: #666;
          }

          .meta-value {
            font-weight: 500;
          }

          .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .overview-grid {
            display: grid;
            gap: 12px;
            margin-bottom: 32px;
          }

          .overview-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background-color: #F8FAFC;
          }

          .overview-label {
            color: #666;
            font-size: 14px;
          }

          .overview-value {
            font-weight: 500;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 32px;
            font-size: 14px;
          }

          th {
            background-color: #F8FAFC;
            color: #666;
            padding: 12px 16px;
            text-align: left;
            font-weight: normal;
          }

          td {
            padding: 12px 16px;
            border-bottom: 1px solid #E5E7EB;
          }

          .status-badge {
            padding: 4px 12px;
            font-size: 12px;
            font-weight: 500;
            display: inline-block;
          }

          .status-badge.paid {
            background-color: #E8F5E9;
            color: #2E7D32;
          }

          .status-badge.awaiting {
            background-color: #FFF8E1;
            color: #F57C00;
          }

          .date-range {
            display: flex;
            justify-content: flex-end;
            gap: 24px;
            margin-bottom: 16px;
            font-size: 14px;
          }

          .date-range-text {
            color: #666;
          }

          .footer {
            margin-top: 40px;
            border-top: 1px solid #E5E7EB;
            padding-top: 16px;
          }

          .footer-text {
            color: #666;
            font-size: 12px;
            text-align: center;
            margin-bottom: 4px;
          }

          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            
            @page {
              size: A4;
              margin: 20mm;
            }

            .print-container {
              max-width: none;
              box-shadow: none;
              padding: 0;
            }

            .header {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            .status-badge {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};

// Helper function to download PDF
const downloadPDF = async (element, filename) => {
  // Hide action buttons before generating PDF
  const actionButtons = element.querySelector(".action-buttons");
  if (actionButtons) {
    actionButtons.style.display = "none";
  }

  const opt = {
    margin: 10,
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF. Please try again.");
  } finally {
    // Restore action buttons visibility
    if (actionButtons) {
      actionButtons.style.display = "flex";
    }
  }
};

export const downloadSalesReport = (reportData) => {
  // Create a temporary container
  const container = document.createElement("div");
  container.innerHTML = generateReportHTML(
    "Sales Report",
    `
    <div class="print-container">
      <div class="action-buttons">
        <button class="action-button print-button" onclick="window.print()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <path d="M6 14h12v8H6z"/>
          </svg>
          Print
        </button>
        <button class="action-button download-button" onclick="window.downloadPDF()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </button>
      </div>
      <div class="header">Sales Report</div>

      <div class="report-header">
        <div class="logo-container">
          <img src="${monaHeaderLogo}" alt="Mona Protect Logo" />
        </div>
        <div class="company-info">
          <h1>Sales Report</h1>
          <h1>Mona Technologies Limited</h1>
          <p>613 Ahmadu Bello Way, Abuja</p>
          <p>+234 903 345 6789</p>
          <p>info@monaprotect.com</p>
        </div>
      </div>

      <div class="meta-section">
        <div class="meta-row">
          <span class="meta-label">Report ID:</span>
          <span class="meta-value">${reportData?.reportId || "RPT123456"}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Generated by:</span>
          <span class="meta-value">${
            reportData?.generatedBy || "Admin 1/Michael James"
          }</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Generated on:</span>
          <span class="meta-value">${
            reportData?.generatedOn || "2025-01-15 16:09:05"
          }</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Version:</span>
          <span class="meta-value">${reportData?.version || "1.0"}</span>
        </div>
      </div>

      <div>
        <h2 class="section-title">Overview</h2>
        <div class="overview-grid">
          <div class="overview-item">
            <label class="overview-label">Total No. of Devices:</label>
            <span class="overview-value">${
              reportData?.totalDevices || "10"
            }</span>
          </div>
          <div class="overview-item">
            <label class="overview-label">Total Commission Earned:</label>
            <span class="overview-value">₦${
              reportData?.totalCommissionEarned || "100,000"
            }</span>
          </div>
          <div class="overview-item">
            <label class="overview-label">Total Commission Received:</label>
            <span class="overview-value">₦${
              reportData?.totalCommissionReceived || "50,000"
            }</span>
          </div>
          <div class="overview-item">
            <label class="overview-label">Total Commission Awaiting:</label>
            <span class="overview-value">₦${
              reportData?.totalCommissionAwaiting || "50,000"
            }</span>
          </div>
        </div>
      </div>

      <div>
        <h2 class="section-title">Highlight of Sales</h2>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Device</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            ${(
              reportData?.highlights || [
                { device: "iPhone 13 Pro MAX", count: 5 },
                { device: "Samsung Galaxy S21", count: 3 },
              ]
            )
              .map(
                (item, index) => `
                  <tr>
                    <td>${String(index + 1).padStart(2, "0")}</td>
                    <td>${item.device}</td>
                    <td>${item.count}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>

      <div>
        <h2 class="section-title">Sales Information</h2>
        <div class="date-range">
          <span class="date-range-text">From: ${
            reportData?.dateRange?.from || "Jan. 22TH 2024"
          }</span>
          <span class="date-range-text">To: ${
            reportData?.dateRange?.to || "Dec. 22TH 2024"
          }</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Device Model</th>
              <th>Brand</th>
              <th>Commission</th>
              <th>Status</th>
              <th>Team Member</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${(
              reportData?.salesInfo || [
                {
                  deviceModel: "iPhone 13 Pro MAX",
                  brand: "Apple",
                  commission: "25,000",
                  status: "Paid",
                  teamMember: "John Doe",
                  date: "2025-01-15",
                },
                {
                  deviceModel: "Galaxy S21",
                  brand: "Samsung",
                  commission: "20,000",
                  status: "Awaiting",
                  teamMember: "Jane Smith",
                  date: "2025-01-15",
                },
              ]
            )
              .map(
                (sale) => `
                  <tr>
                    <td>${sale.deviceModel}</td>
                    <td>${sale.brand}</td>
                    <td>₦${sale.commission}</td>
                    <td>
                      <span class="status-badge ${sale.status.toLowerCase()}">
                        ${sale.status}
                      </span>
                    </td>
                    <td>${sale.teamMember}</td>
                    <td>${sale.date}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>

      <div class="footer">
        <p class="footer-text">
          Generated on: ${
            reportData?.generatedOn || "2025-01-15 16:30"
          } | Page 1 of 1 | Report ID: ${
      reportData?.reportId || "RPT123456"
    } | Mona Protect
        </p>
        <p class="footer-text">Confidential – For internal use only</p>
      </div>
    </div>
  `
  );

  // Download the PDF
  downloadPDF(container, `sales-report-${Date.now()}.pdf`);
};

export const downloadRepairsReport = (reportData) => {
  // Create a temporary container
  const container = document.createElement("div");
  container.innerHTML = generateReportHTML(
    "Repairs Report",
    `
    <div class="print-container">
      <div class="header">Repairs Report</div>

      <div class="report-header">
        <div class="logo-container">
          <img src="${monaHeaderLogo}" alt="Mona Protect Logo" />
        </div>
        <div class="company-info">
          <h1>Repairs Report</h1>
          <h1>Mona Technologies Limited</h1>
          <p>613 Ahmadu Bello Way, Abuja</p>
          <p>+234 903 345 6789</p>
          <p>info@monaprotect.com</p>
        </div>
      </div>

      <div class="meta-section">
        <div class="meta-row">
          <span class="meta-label">Report ID:</span>
          <span class="meta-value">${reportData?.reportId || "RPT123456"}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Generated by:</span>
          <span class="meta-value">${
            reportData?.generatedBy || "Admin 1/Michael James"
          }</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Generated on:</span>
          <span class="meta-value">${
            reportData?.generatedOn || "2025-01-15 16:09:05"
          }</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Version:</span>
          <span class="meta-value">${reportData?.version || "1.0"}</span>
        </div>
      </div>

      <div>
        <h2 class="section-title">Overview</h2>
        <div class="overview-grid">
          <div class="overview-item">
            <label class="overview-label">Total No. of Devices:</label>
            <span class="overview-value">${
              reportData?.totalDevices || "10"
            }</span>
          </div>
          <div class="overview-item">
            <label class="overview-label">Total Cost of Repairs:</label>
            <span class="overview-value">₦${
              reportData?.totalCostOfRepairs || "100,000"
            }</span>
          </div>
          <div class="overview-item">
            <label class="overview-label">Total Cost of Repairs paid:</label>
            <span class="overview-value">₦${
              reportData?.totalCostOfRepairsPaid || "50,000"
            }</span>
          </div>
          <div class="overview-item">
            <label class="overview-label">Total Cost of Repairs awaiting:</label>
            <span class="overview-value">₦${
              reportData?.totalCostOfRepairsAwaiting || "50,000"
            }</span>
          </div>
        </div>
      </div>

      <div>
        <h2 class="section-title">Highlight of Repairs</h2>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Issues</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            ${(
              reportData?.highlights || [
                { issue: "Damaged screen", count: 5 },
                { issue: "Not Charging", count: 5 },
              ]
            )
              .map(
                (item, index) => `
              <tr>
                <td>${String(index + 1).padStart(2, "0")}</td>
                <td>${item.issue}</td>
                <td>${item.count}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>

      <div>
        <h2 class="section-title">Repairs Information</h2>
        <div class="date-range">
          <span class="date-range-text">From: ${
            reportData?.dateRange?.from || "Jan. 22TH 2024"
          }</span>
          <span class="date-range-text">To: ${
            reportData?.dateRange?.to || "Dec. 22TH 2024"
          }</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Approved by</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${(
              reportData?.repairsInfo || [
                {
                  claimId: "#0001",
                  brand: "Samsung",
                  model: "Galaxy S20",
                  amount: "123,345",
                  status: "Paid",
                  approvedBy: "Admin 1",
                  date: "2025-01-15",
                },
                {
                  claimId: "#0001",
                  brand: "Samsung",
                  model: "Galaxy S20",
                  amount: "123,345",
                  status: "Awaiting",
                  approvedBy: "Admin 1",
                  date: "2025-01-15",
                },
              ]
            )
              .map(
                (repair) => `
              <tr>
                <td>${repair.claimId}</td>
                <td>${repair.brand}</td>
                <td>${repair.model}</td>
                <td>₦${repair.amount}</td>
                <td>
                  <span class="status-badge ${repair.status.toLowerCase()}">
                    ${repair.status}
                  </span>
                </td>
                <td>${repair.approvedBy}</td>
                <td>${repair.date}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>

      <div class="footer">
        <p class="footer-text">
          Generated on: ${
            reportData?.generatedOn || "2025-01-15 16:30"
          } | Page 1 of 1 | Report ID: ${
      reportData?.reportId || "RPT123456"
    } | Mona Protect
        </p>
        <p class="footer-text">Confidential – For internal use only</p>
      </div>
    </div>
  `
  );

  // Download the PDF
  downloadPDF(container, `repairs-report-${Date.now()}.pdf`);
};
