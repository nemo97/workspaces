import requests

res = requests.get('http://127.0.0.1:8080/tasks')
print res.json()
print "a=> "+res.json()["a"]