TEST_FILE = test/xdump.js
TEST_OUTPUT = test/output
TEST_SNAPSHOT = test/snapshot
VERSION ?=

format: xdump.js $(TEST_FILE) README.md
	@prettier --no-color --write $?

run: $(TEST_FILE)
	qjs $?

snapshot: $(TEST_SNAPSHOT)

$(TEST_OUTPUT) $(TEST_SNAPSHOT): $(TEST_FILE)
	qjs $? > $@

test: $(TEST_OUTPUT)
	diff --brief $? $(TEST_SNAPSHOT)

release:
ifndef VERSION
	$(error VERSION is not set)
endif
	tar cf xdump-$(VERSION).tar LICENSE README.md xdump.js

clean:
	rm -rf $(TEST_OUTPUT) xdump-*.tar

.PHONY: format test run clean
