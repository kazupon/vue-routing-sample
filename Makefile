C8 = ./node_modules/.bin/component

build: node_modules components index.js style.css
	@$(C8) build --dev

components: component.json
	@$(C8) install --dev

node_modules: package.json
	@npm install

open:
	@open ./index.html

clean:
	rm -fr build components node_modules

.PHONY: clean
