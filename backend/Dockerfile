FROM python:3.10

# Install sistem dependency untuk OpenCV
RUN apt-get update && apt-get install -y libgl1 libglib2.0-0

# Set working dir
WORKDIR /code

# Copy dan install requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy semua file ke container
COPY . .

# Jalankan app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]