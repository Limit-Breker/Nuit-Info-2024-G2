FROM python:3.12.7-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y curl netcat-traditional && curl -sSL https://install.python-poetry.org | python3 -

WORKDIR /usr/src/app

COPY poetry.lock pyproject.toml /usr/src/app/

RUN POETRY_VIRTUALENVS_CREATE=false /root/.local/bin/poetry install --no-interaction --no-ansi

COPY app/ .

RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh && chmod +x /usr/src/app/entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]