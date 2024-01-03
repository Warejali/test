const formidable = require('formidable');
const fs = require('fs').promises; // Use fs.promises for async file operations
const path = require('path');

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), './public/uploads');
    options.keepExtensions = true;
    options.multiples = true;
    options.filename = (name, ext, path) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    /* Save the files to the server */
    const uploadDir = path.join(process.cwd(), './public/uploads');
    // Use fs.promises.mkdir to create the directory asynchronously
    await fs.mkdir(uploadDir, { recursive: true });
    const { files } = await readFile(req, true);
    const { file } = files;
    const fileData = [];
    // check if file is an array
    if (Array.isArray(file)) {
      file.forEach((item) => {
        const { newFilename, originalFilename, mimetype, size } = item;
        const fileUrl = `/uploads/${newFilename}`;
        fileData.push({
          newFilename,
          fileUrl,
          originalFilename,
          mimetype,
          size,
        });
      });
    } else {
      const { newFilename, originalFilename, mimetype, size } = file;
      const fileUrl = `/uploads/${newFilename}`;
      fileData.push({ newFilename, fileUrl, originalFilename, mimetype, size });
    }
    res.status(200).json({ fileData });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

module.exports = handler;
