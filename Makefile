deploy-page:
	cd dist/ &&
	git init &&
	git remote add origin git@github.com:rubenfgr/rubenfgr.github.io.git &&
	git add . &&
	git commit -m "distribution to gh-pages branch" &&
	git branch -M gh-pages &&
	git push origin gh-pages --force