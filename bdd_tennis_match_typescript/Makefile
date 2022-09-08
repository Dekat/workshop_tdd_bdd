.PHONY: test-unit
.SILENT: test-unit
test-unit:
	docker-compose run --rm app bash -c "npm run test:unit"

.PHONY: test-behavior
.SILENT: test-behavior
test-behavior:
	docker-compose run --rm app bash -c "npm run test:behavior"

.PHONY: test
.SILENT: test
test: test-unit test-behavior

.PHONY: build
.SILENT: build
build:
	-rm -rf node_modules package-lock.json
	docker-compose build --no-cache
	docker-compose run --rm app bash -c "npm install"

.PHONY: shell
.SILENT: shell
shell:
	docker-compose run app bash
