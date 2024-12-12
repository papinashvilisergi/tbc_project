FROM python:3.10-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

COPY ./requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY ./ /app/

ENV PYTHONUNBUFFERED=1

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "cfcollab.wsgi:application"]
