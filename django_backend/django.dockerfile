# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies (including postgresql-client and curl)
RUN apt-get update && apt-get install -y postgresql-client curl && rm -rf /var/lib/apt/lists/*

# Copy the requirements.txt file first to install dependencies
COPY ./requirements.txt /app/

# Install the dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the Django backend code into the container
COPY ./ /app/

# Copy the wait-for-it.sh script into the container
COPY wait-for-it.sh /wait-for-it.sh

# Make sure the wait-for-it.sh script is executable
RUN chmod +x /wait-for-it.sh

# Set up environment variables (if needed)
ENV PYTHONUNBUFFERED=1

# Use the wait-for-it.sh script to wait for PostgreSQL to be ready before running migrations and the server
CMD ["/wait-for-it.sh", "postgres:5432", "--", "sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
