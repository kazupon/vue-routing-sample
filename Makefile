
build: components index.js style.css
	@component build --dev

components: component.json
	@component install --dev

open:
	@open ./index.html

clean:
	rm -fr build components

.PHONY: clean
