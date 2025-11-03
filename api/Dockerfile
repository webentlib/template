FROM python:3.13.5-alpine3.22

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV IS_IN_DOCKER=1

WORKDIR /app/

RUN apk add build-base libpq libpq-dev postgresql-client # for psycopg2

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .
