deploy_dev:
	docker run --name minthouse -v $(PWD):/app -it -d -w /app -p 3006:3000 node:18.19.1 --trace-deprecation
	docker exec minthouse yarn install
start:
	docker exec minthouse yarn start
dev:
	docker exec minthouse yarn dev
install:
	docker exec minthouse yarn install
build:
	docker exec minthouse yarn build
test:
	docker exec minthouse yarn test