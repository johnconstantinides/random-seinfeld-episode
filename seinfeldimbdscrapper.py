from bs4 import BeautifulSoup
import json
import requests

file = "seinfeldinfo.json"

def write_json(data,file="pp.json"):
    with open(file,"w") as f:
        json.dump(data,f)

info = []
for i in range(1,10):
    url = "https://www.imdb.com/title/tt0098904/episodes?season=" + str(i)
    result = requests.get(url)
    doc = BeautifulSoup(result.text,"html.parser")
    episodes = doc.find_all('div',{'class' :'info'})
    description = doc.find_all('div',{'class':'item_description'})
    date = doc.find_all('div',{'class':'airdate'})
    image = doc.find_all('div',{'class':'image'})

    for j in range(len(episodes)):
        k = {}
        k['title'] = episodes[j].a.text.strip()
        k['description'] = description[j].text.strip()
        k['season'] = i
        k['episode'] = j + 1
        k['date'] = date[j].text.strip()
        k['episode_cover'] = image[j].find('img')['src']
        k['reviews'] = 0
        k['rating'] = 0
        info.append(k)

write_json(info,file)
