#!/bin/bash

echo "📌 Installing Tesseract OCR & Poppler..."

# ✅ Install Tesseract OCR & Poppler
apt-get update && apt-get install -y \
    tesseract-ocr \
    poppler-utils \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# ✅ Install Python Dependencies
pip install --no-cache-dir -r requirements.txt
