fabmo-vtext-app.fma: clean *.html js/*.js css/*.css icon.png package.json
	zip fabmo-vtext-app.fma *.html js/*.js css/*.css *.pde icon.png package.json

.PHONY: clean

clean:
	rm -rf fabmo-vtext-app.fma
