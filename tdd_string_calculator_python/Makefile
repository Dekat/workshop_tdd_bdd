.PHONY: test-unit
.SILENT: test-unit
test-unit:
	docker-compose run --rm app bash -c "pytest -vvv ."

.PHONY: test
.SILENT: test
test: test-unit
