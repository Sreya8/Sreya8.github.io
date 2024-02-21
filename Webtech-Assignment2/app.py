from flask import Flask
import requests
from flask import jsonify, request
from datetime import datetime, timedelta
from flask_cors import CORS
from dateutil.relativedelta import relativedelta

app = Flask(__name__)
CORS(app)

FINNHUB_API_KEY = 'cn39h6hr01qtdies472gcn39h6hr01qtdies4730'
POLYGON_API_KEY = 'u8wDPqK5DaUi2wSR4eAr56LVfDur66VI'

@app.route('/search', methods=['GET'])
def search():
    stock_symbol = request.args.get('symbol')
    stock_symbol = stock_symbol.upper()

    if not stock_symbol:
        return jsonify({'Error': 'No record has been found, please enter a valid symbol'}), 400

    company_profile = get_company_profile(stock_symbol)
    if not company_profile:
        return jsonify({
            'company_profile': company_profile
        })
    else:
        stock_quote = get_stock_quote(stock_symbol)
        recommendation_trends = get_recommendation_trends(stock_symbol)
        chart_data = get_chart_data(stock_symbol)
        company_news = get_company_news(stock_symbol)

        return jsonify({
            'company_profile': company_profile,
            'stock_quote': stock_quote,
            'recommendation_trends': recommendation_trends,
            'chart_data': chart_data,
            'company_news': company_news
        })

def get_company_profile(stock_symbol):
    url = f'https://finnhub.io/api/v1/stock/profile2?symbol={stock_symbol}&token={FINNHUB_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

def get_stock_quote(stock_symbol):
    url = f'https://finnhub.io/api/v1/quote?symbol={stock_symbol}&token={FINNHUB_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

def get_recommendation_trends(stock_symbol):
    url = f'https://finnhub.io/api/v1/stock/recommendation?symbol={stock_symbol}&token={FINNHUB_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

def get_chart_data(stock_symbol):
    end_date = datetime.now()
    start_date = end_date - relativedelta(months=6, days=1)  # 6 months and 1 day
    start_date_str = start_date.strftime('%Y-%m-%d')
    end_date_str = end_date.strftime('%Y-%m-%d')

    url = f'https://api.polygon.io/v2/aggs/ticker/{stock_symbol}/range/1/day/{start_date_str}/{end_date_str}?adjusted=true&sort=asc&apiKey={POLYGON_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()['results']
        chart_data = []
        volume_data = []
        max_volume = 0
        for entry in data:
            timestamp = entry['t']
            price = round(entry['c'], 2)  # Round to two decimal places
            volume = entry['v']
            chart_data.append([timestamp, price])
            volume_data.append([timestamp, volume])
            if volume > max_volume:
                max_volume = volume
        return {"c":chart_data, "v":volume_data, "max_y": max_volume}
    else:
        return None

def get_company_news(stock_symbol):
    today = datetime.now().strftime('%Y-%m-%d')
    thirty_days_ago = (datetime.now() - relativedelta(days=30)).strftime('%Y-%m-%d')
    url = f'https://finnhub.io/api/v1/company-news?symbol={stock_symbol}&from={thirty_days_ago}&to={today}&token={FINNHUB_API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        articles = response.json()
        filtered_articles = []
        for article in articles:
            if 'image' in article and 'url' in article and 'headline' in article and 'datetime' in article \
                    and article['image'] and article['url'] and article['headline'] and article['datetime']:
                filtered_articles.append(article)
            if len(filtered_articles) == 5:
                break
        return filtered_articles
    else:
        return None


if __name__ == '__main__':
    app.run()