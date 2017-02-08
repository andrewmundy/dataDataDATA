import requests
import bs4
import csv

url = "https://en.wikipedia.org/wiki/United_States_presidential_approval_rating"
data = requests.get(url)
soup = bs4.BeautifulSoup(data.text, "html.parser")
links = soup.find()

table_rows = soup.select(".wikitable")[2].select("tr")

# for user in by:
#     ("{}".format(user.text))
# for link in links:
#     print("{}\n{}\n{}\n".format(user.text,link.text,link['href']))

# newStr = str.replace("<br/>", "*").replace("<p>","").replace("</p>","").replace("—","").split("*")

csv_data = [['order', 'pres', 'highest', 'lowest']]
for row in table_rows[1:]:
	tds = row.select('td')
	order = tds[0].text[:2:]
	pres = tds[1].select("a")[0].text
	highest = tds[2].select("b")[0].text
	lowest = tds[3].select("b")[0].text
	csv_data.append([order, pres, highest, lowest])


with open('funk.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(csv_data) 	



