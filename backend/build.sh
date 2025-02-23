#!/bin/bash

echo "📌 Installing Tesseract OCR & Poppler..."

# ✅ Install Required Dependencies
sudo apt-get update && sudo apt-get install -y \
    autoconf \
    automake \
    build-essential \
    ca-certificates \
    cmake \
    g++ \
    git \
    libleptonica-dev \
    libtesseract-dev \
    pkg-config \
    poppler-utils \
    wget \
    && rm -rf /var/lib/apt/lists/*

# ✅ Create directories for installation
mkdir -p /opt/tesseract /opt/poppler

# ✅ Download & Compile Tesseract 5.5.0 from Source
echo "📌 Downloading & Compiling Tesseract..."
wget -q -O /opt/tesseract/tesseract.tar.gz https://github.com/tesseract-ocr/tesseract/archive/refs/tags/5.5.0.tar.gz
tar -xf /opt/tesseract/tesseract.tar.gz -C /opt/tesseract --strip-components=1
cd /opt/tesseract

echo "📌 Building Tesseract... This may take a few minutes."
./autogen.sh
./configure
make -j$(nproc)
make install
ldconfig

# ✅ Set Tesseract Path
export PATH=/usr/local/bin:$PATH
echo "📌 Tesseract Installed: $(tesseract --version)"

# ✅ Install Poppler (Linux-Compatible Version)
echo "📌 Installing Poppler..."
wget -q -O /opt/poppler/poppler.tar.gz https://github.com/oschwartz10612/poppler-windows/archive/refs/tags/v24.08.0-0.tar.gz
tar -xf /opt/poppler/poppler.tar.gz -C /opt/poppler --strip-components=1
export PATH=/opt/poppler/bin:$PATH

# ✅ Verify Installations
echo "📌 Verifying installations..."
tesseract --version || echo "❌ Tesseract installation failed!"
pdftotext -v || echo "❌ Poppler installation failed!"

# ✅ Install Python Dependencies
pip install --no-cache-dir -r requirements.txt
