.PHONY: docs
REPO = $(shell git config --get remote.origin.url)
ROOT_DIR = $(shell pwd)
DOCS_DIR = $(ROOT_DIR)/docs
DOCS_BUILD_DIR = $(DOCS_DIR)/build
DOCS_PROD_DIR = $(DOCS_DIR)/master
SLATE_GIT_HACK = $(DOCS_DIR)/.git

$(SLATE_GIT_HACK):
	ln -s $(ROOT_DIR)/.git $(DOCS_DIR)

docs-setup:
	cd docs && bundle install

devdocs: $(SLATE_GIT_HACK)
	cd docs && bundle exec middleman server

docs: $(SLATE_GIT_HACK)
	cd docs && rake build

commit:
	-git commit -a && git push --all

setup-temp-repo:
	rm -rf $(DOCS_PROD_DIR)/current $(DOCS_PROD_DIR)/.git $(DOCS_PROD_DIR)/*/.git
	cp -r $(DOCS_BUILD_DIR) $(DOCS_PROD_DIR)/current
	cd $(DOCS_PROD_DIR) && \
	git init && \
	git add * &> /dev/null && \
	git commit -a -m "Generated content." &> /dev/null

teardown-temp-repo:
	rm $(DOCS_DIR)/.git
	rm -rf $(DOCS_PROD_DIR)/.git $(DOCS_PROD_DIR)/*/.git

publish: commit docs setup-temp-repo
	cd $(DOCS_PROD_DIR) && \
	git push -f $(REPO) master:gh-pages
	make teardown-temp-repo
