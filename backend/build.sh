#!/bin/bash

# ✅ Install Tesseract OCR & Poppler Manually
echo "📌 Installing Tesseract OCR & Poppler..."
wget https://github.com/tesseract-ocr/tesseract/archive/refs/tags/5.5.0.tar.gz
unzip tesseract-5.3.2-linux-x86_64.zip -d tesseract
export PATH=$PWD/tesseract:$PATH

wget https://github.com/oschwartz10612/poppler-windows/archive/refs/tags/v24.08.0-0.tar.gz
tar -xf poppler-23.02.0.tar.xz
export PATH=$PWD/poppler-23.02.0/bin:$PATH

# ✅ Install Python Dependencies
pip install -r requirements.txt
