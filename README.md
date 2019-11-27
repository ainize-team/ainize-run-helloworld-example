[![Run on Ainize](https://ainize-run-web.herokuapp.com/static/images/run_on_ainize_button.png)](https://ainize-dev.web.app/redirect?git_repo=github.com/ainize-team/ainize-run-helloworld-example)

# Hello World Example
This application simply shows 'Hello World' on a web browser.

## Docker build
```
docker build -t ${YOUR_DOCKER_HUB_REPO}/helloworld .
```
## Docker run
```
docker run -p 80:80 -d ${YOUR_DOCKER_HUB_REPO}/hello
```
The result can be checked on http://localhost/
