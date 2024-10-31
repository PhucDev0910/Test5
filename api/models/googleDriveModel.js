const { google } = require("googleapis");
const oauth2Client = require("../config/googleConfig");

async function listFiles() {
  const drive = google.drive({ version: "v3", auth: oauth2Client });

  try {
    const response = await drive.files.list({
      pageSize: 10,
      fields:
        "nextPageToken, files(id, name, mimeType, webContentLink, webViewLink)",
    });

    if (response.data.files.length === 0) {
      return [];
    } else {
      return response.data.files;
    }
  } catch (error) {
    throw error;
  }
}


module.exports = { listFiles };

