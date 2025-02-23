FROM alpine:latest

# Install Tesseract-OCR
RUN apk add --no-cache tesseract-ocr

# Optionally, download language data
RUN mkdir -p /usr/share/tessdata
ADD  https://github.com/tesseract-ocr/tessdata/blob/main/eng.traineddata /usr/share/tessdata/eng.traineddata

# Copy your application code
COPY . /app
WORKDIR /app

# Install any additional dependencies and run your application
RUN apk add --no-cache python3 py3-pip
RUN pip3 install -r requirements.txt

CMD ["python3", "app.py"]
