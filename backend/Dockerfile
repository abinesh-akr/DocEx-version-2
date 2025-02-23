FROM python:3.9-slim

# Install Tesseract
RUN apt-get update && apt-get install -y tesseract-ocr

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install opencv-python
# Copy the rest of your app
COPY . /app
WORKDIR /app

# Expose port 5000 for Flask
EXPOSE 5000

# Start the Flask app
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
