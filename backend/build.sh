#!/bin/bash

echo "📌 Installing Tesseract OCR & Poppler..."

# ✅ Use /tmp/ for installation (Writable in Render)
INSTALL_DIR="/tmp"
TESSERACT_DIR="$INSTALL_DIR/tesseract"
POPPLER_DIR="$INSTALL_DIR/poppler"
mkdir -p $TESSERACT_DIR $POPPLER_DIR

# ✅ Download & Extract Tesseract
echo "📌 Downloading Tesseract..."
wget -q -O $TESSERACT_DIR/tesseract.tar.gz https://github.com/tesseract-ocr/tesseract/archive/refs/tags/5.5.0.tar.gz
tar -xf $TESSERACT_DIR/tesseract.tar.gz -C $TESSERACT_DIR --strip-components=1

# ✅ Download & Extract Poppler
echo "📌 Downloading Poppler..."
wget -q -O $POPPLER_DIR/poppler.tar.gz https://github.com/oschwartz10612/poppler-windows/archive/refs/tags/v24.08.0-0.tar.gz
tar -xf $POPPLER_DIR/poppler.tar.gz -C $POPPLER_DIR --strip-components=1

# ✅ Set environment paths
export PATH="$TESSERACT_DIR:$POPPLER_DIR/bin:$PATH"

# ✅ Verify Installations
echo "📌 Verifying installations..."
tesseract --version || echo "❌ Tesseract installation failed!"
pdftotext -v || echo "❌ Poppler installation failed!"

# ✅ Install Python Dependencies
pip install --no-cache-dir -r requirements.txt
