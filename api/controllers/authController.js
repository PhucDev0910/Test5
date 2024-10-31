const oauth2Client = require("../config/googleConfig");
const googleDriveModel = require("../models/googleDriveModel");

const SCOPES = [
  "https://www.googleapis.com/auth/drive.metadata.readonly",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/drive",
];

const authController = {
  login: (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    res.redirect(authUrl);
  },

  // Xử lý callback sau khi người dùng đăng nhập
  callback: async (req, res) => {
    const code = req.query.code;
    try {
      // Lấy token từ mã xác thực
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);

      // Gọi model để lấy danh sách tài liệu
      const files = await googleDriveModel.listFiles();

      // Gửi phản hồi danh sách tài liệu
      res.json(files);
    } catch (error) {
      //console.error(error);
      res
        .status(500)
        .json({ error: "Không thể lấy lại mã thông báo truy cập" });
    }
  },
};

module.exports = authController;
