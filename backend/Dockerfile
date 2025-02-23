FROM alpine:latest

# Install Tesseract-OCR
RUN apk add --no-cache tesseract-ocr

# Optionally, download language data
RUN mkdir -p /usr/share/tessdata
ADD  https://github.com/tesseract-ocr/tessdata/blob/main/eng.traineddata /usr/share/tessdata/eng.traineddata


# Create a virtual environment
RUN python3 -m venv /opt/venv

# Activate the virtual environment and install dependencies
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy your application code
COPY . /app
WORKDIR /app

# Run your application
CMD ["python3", "app.py"]

