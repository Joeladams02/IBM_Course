import requests
import pandas as pd

url ="https://web.archive.org/web/20230902185326/https://en.wikipedia.org/wiki/List_of_countries_by_GDP_%28nominal%29"

r = requests.get(url)

df = pd.read_html(url)
countries_by_gdp = df[2]
countries_by_gdp.columns = range(countries_by_gdp.shape[1])
top_ten = countries_by_gdp.iloc[1:11]
top_ten = top_ten[[0,2]]
top_ten.columns = ['Country', 'GDP Estimate (Billions)']
top_ten['GDP Estimate (Billions)'] = top_ten['GDP Estimate (Billions)'].astype(int)
top_ten['GDP Estimate (Billions)'] = top_ten['GDP Estimate (Billions)'].apply(lambda x: round(x/1000))

with open('Top-Ten-Economies.txt', 'w') as file:
    file.write(top_ten.to_csv())