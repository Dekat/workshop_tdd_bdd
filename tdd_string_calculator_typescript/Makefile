.PHONY: test-unit
.SILENT: test-unit
test-unit:
	docker-compose run --rm app bash -c "npm run test"

.PHONY: test
.SILENT: test
test: test-unit

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
