.PHONY: dev test lint format

dev:
	docker compose up -d
	uv sync --all-packages

test:
	uv run pytest

lint:
	uv run ruff check .
	uv run ruff format --check .
	uv run mypy packages/receipts_core/src packages/receipts_search/src services/api/src services/worker/src

format:
	uv run ruff format .
	uv run ruff check --fix .
