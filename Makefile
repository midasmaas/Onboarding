default:
	# Run

frontend.install:
	docker exec onboarding-partout-node-1 npm ci

frontend.build:
	docker exec onboardin_partout_node npm run build:dev

frontend.watch:
	docker exec -it onboardin_partout_node npm run build:watch

shell.php:
	docker exec -it onboardin_partout_php bash

shell.php_debug:
	docker exec -it onboardin_partout_php env XDEBUG_SESSION=1 bash

shell.node:
	docker exec -it onboardin_partout_node bash

shell.apache:
	docker exec -it onboardin_partout_apache bash

shell.mysql:
	docker exec -it onboardin_partout_mysql bash
