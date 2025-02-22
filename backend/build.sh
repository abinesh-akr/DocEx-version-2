#!/bin/bash

# Install Tesseract OCR manually
echo "📌 Installing Tesseract OCR..."
wget https://github.com/tesseract-ocr/tesseract/releases/download/5.3.2/tesseract-5.3.2-linux-x86_64.zip
unzip tesseract-5.3.2-linux-x86_64.zip -d tesseract
export PATH=$PWD/tesseract:$PATH

# Install Python dependencies
pip install -r requirements.txt
