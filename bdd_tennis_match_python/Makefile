.PHONY: test-unit
.SILENT: test-unit
test-unit:
	docker-compose run --rm app bash -c "pytest -vvv"

.PHONY: test-behavior
.SILENT: test-behavior
test-behavior:
	docker-compose run --rm app bash -c "behave"

.PHONY: test
.SILENT: test
test: test-unit test-behavior
