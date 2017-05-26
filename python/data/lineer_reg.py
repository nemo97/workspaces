import pandas as pd;
import numpy as np;
data = pd.read_csv('https://raw.githubusercontent.com/pydata/pydata-book/master/ch09/stock_px.csv',index_col=0,parse_dates=[0])

print data.head(5)











