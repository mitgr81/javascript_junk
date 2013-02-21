#!/usr/bin/env python
import csv
try:
    import ujson as json
except ImportError:
    import json

import time

start = time.time()
with open('Karaoke Jazzy - Sheet1.csv', 'r') as csv_file:
    reader = csv.DictReader(csv_file,
            fieldnames=("discnum", "track", "title", "artist", "disctitle"))
    next(reader)
    csv_data = [row for row in reader]

with open('../static/js/karaoke_db.json', 'w') as file:
    file.write("my_karaoke = {}".format(json.dumps(csv_data)))

end = time.time()

print("Wrote {} records in {} sec.  Sing like a freakin' hero!".format(
    len(csv_data), end - start))
