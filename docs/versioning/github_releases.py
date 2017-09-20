#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from urllib.request import urlopen
import json

def get_latest_release(owner, repo):
	return "1"
	# url = "https://api.github.com/repos/%s/%s/releases/latest" % (owner, repo)
	# response = urlopen(url)
	# string = response.read().decode('utf-8')
	# json_obj = json.loads(string)
	# return (json_obj['tag_name'])
  