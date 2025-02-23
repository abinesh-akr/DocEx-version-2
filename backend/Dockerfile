FROM python:3.9-slim

# Install Tesseract
RUN apt-get update && apt-get install -y tesseract-ocr

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install poppler-utils
# Copy the rest of your app
COPY . /app
WORKDIR /app

# Expose port 5000 for Flask
EXPOSE 5000
# ✅ Reduce Gunicorn workers to prevent memory crashes
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:5000", "app:app"]
