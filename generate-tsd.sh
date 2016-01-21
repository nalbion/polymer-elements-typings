#!/bin/bash

# https://github.com/bsorrentino/generator-polymerts
if ! [ -x "$(command -v yo)" ]; then
	echo "Installing yo..."
	sudo npm install -g yo generator-polymerts
fi
if [ -z `yo --help | grep polymerts` ]; then
	echo "Installing generator-polymerts..."
	sudo npm install -g yo generator-polymerts
fi

function generate {
	group=$1
	rm -rf typings/$group-elements

	find . -type f -regextype "egrep" -regex "./bower_components/($group)-[^\/]+\/(.*\/)?.+-.+\.html" \
			! -regex ".*/(tests?|demo)/.*" \
			! -name "index.html" \
			-print0 \
			| while IFS= read -r -d $'\0' line; do

		if [[ "$line" =~ .bower_components/(.*)/([^/]+)\.html ]]; then
			yo polymerts:gen ${BASH_REMATCH[2]} --elpath ${BASH_REMATCH[1]} --path typings/$group-elements
		fi
	done
}


generate iron
generate neon
generate paper
generate platinum
generate gold
generate google
generate marked
generate firebase
