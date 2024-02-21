document.addEventListener("DOMContentLoaded", function () {
    const crossIcon = document.getElementById('cross-icon');
    const searchInput = document.getElementById('search-input');
    const menuItems = document.querySelectorAll('.menu-item');
    const companyData = document.getElementById('company-data');
    const secondPartDiv = document.getElementById('secondpart');
    const invalidSymbol = document.getElementById('invalid-symbol-error');
    const stockData = document.getElementById('stock-data');
    const chartPart = document.getElementById('chart-part');
    const latestnews = document.getElementById('news-part');

    crossIcon.addEventListener('click', function () {
        searchInput.value = ''; // Clear the value of search input
        secondPartDiv.style.display = 'none';
        invalidSymbol.style.display = 'none';
        chartPart.style.display = 'none';
        latestnews.style.display = 'none';
    });


    // Menu item click event handling
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            // Add active class to clicked item
            this.classList.add('active');

            // Hide or show company-data based on menu item click
            if (this.id === 'company') {
                companyData.style.display = 'flex';
            } else {
                companyData.style.display = 'none';
            }

            if (this.id === 'stock-summary') {
                stockData.style.display = 'flex';
            } else {
                stockData.style.display = 'none';
            }

            if (this.id === 'charts') {
                chartPart.style.display = 'flex';
            } else {
                chartPart.style.display = 'none';
            }

            if (this.id === 'latest-news') {
                latestnews.style.display = 'grid';
            } else {
                latestnews.style.display = 'none';
            }
        });
    });

    function find_date(timestamp) {
        let a = new Date(timestamp * 1000);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return a.getDate() + ' ' + months[a.getMonth()] + ', ' + a.getFullYear();
    }

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function add_arrow(change) {
        if (change < 0) {
            const image = document.createElement("img");
            image.setAttribute("src", "RedArrowDown.png");
            image.setAttribute("width", "15");
            image.setAttribute("height", "15");
            image.classList.add("arrow-image");
            return image;
        }

        if (change > 0) {
            const image = document.createElement("img");
            image.setAttribute("src", "GreenArrowUp.png");
            image.setAttribute("width", "15");
            image.setAttribute("height", "15");
            image.classList.add("arrow-image");
            return image;
        }
        return null;
    }

    // Function to fetch company data from Flask backend
    function fetchCompanyData(symbol) {
        fetch(`https://test-hzuvixrzca-uw.a.run.app/search?symbol=${symbol}`)
            .then(response => response.json())
            .then(data => {
                const companyProfile = data.company_profile;
                const stockQuote = data.stock_quote;
                const RTbar = data.recommendation_trends;
                const newsInfo = data.company_news;

                if (!Object.keys(companyProfile).length) {
                    secondPartDiv.style.display = 'none';
                    invalidSymbol.style.display = 'block';
                } else {
                    document.getElementById('get-company-name').textContent = companyProfile.name;
                    document.getElementById('get-ticker-symbol').textContent = companyProfile.ticker;
                    document.getElementById('get-exchange-code').textContent = companyProfile.exchange;
                    document.getElementById('get-start-date').textContent = companyProfile.ipo;
                    document.getElementById('get-category').textContent = companyProfile.finnhubIndustry;
                    document.getElementById('company-logo').src = companyProfile.logo;

                    // Part 2
                    document.getElementById('get-ticker-symbol-2').textContent = companyProfile.ticker;
                    document.getElementById('get-trading-day').textContent = find_date(stockQuote.t);
                    document.getElementById('get-previous-closing').textContent = stockQuote.pc;
                    document.getElementById('get-opening-price').textContent = stockQuote.o;
                    document.getElementById('get-high-price').textContent = stockQuote.h;
                    document.getElementById('get-low-price').textContent = stockQuote.l;
                    document.getElementById('get-change').textContent = stockQuote.d;
                    document.getElementById('get-change').appendChild(add_arrow(stockQuote.d));
                    document.getElementById('get-change-percentage').textContent = stockQuote.dp;
                    document.getElementById('get-change-percentage').appendChild(add_arrow(stockQuote.dp));

                    document.getElementById('S-sell').textContent = RTbar[0].strongSell;
                    document.getElementById('sell').textContent = RTbar[0].sell;
                    document.getElementById('hold').textContent = RTbar[0].hold;
                    document.getElementById('buy').textContent = RTbar[0].buy;
                    document.getElementById('S-buy').textContent = RTbar[0].strongBuy;

                    // Show the secondpart div after data is fetched
                    secondPartDiv.style.display = 'block';
                    invalidSymbol.style.display = 'none';
                    stockData.style.display = 'none';
                    chartPart.style.display = 'none'
                    latestnews.style.display = 'none';

                    // Create the chart
                    Highcharts.stockChart('container', {

                        rangeSelector: {
                            selected: 1
                        },

                        title: {
                            text: `Stock Price ${companyProfile.ticker} ${getTodayDate()}`
                        },

                        subtitle:
                        {
                            text: `<a href="https://polygon.io/" target="_blank">Source: Polygon.io</a>`,
                            useHTML: true
                        },

                        plotOptions: {
                            column: {
                                pointPlacement: 'on'
                            }
                        },

                        yAxis: [{
                            opposite: false,
                            title: {
                                text: 'Stock Price'
                            },
                        }, {
                            opposite: true,
                            title: {
                                text: 'Volume'
                            },
                            max: data.chart_data.max_y * 2
                        }],

                        navigator: {
                            series: {
                                accessibility: {
                                    exposeAsGroupOnly: true
                                }
                            }
                        },

                        rangeSelector: {
                            inputEnabled: false,
                            buttons: [{
                                type: 'day',
                                count: 7,
                                text: '7d'
                            }, {
                                type: 'day',
                                count: 15,
                                text: '15d'
                            }, {
                                type: 'month',
                                count: 1,
                                text: '1m'
                            }, {
                                type: 'month',
                                count: 3,
                                text: '3m'
                            }, {
                                type: 'month',
                                count: 6,
                                text: '6m'
                            }],
                            selected: 6
                        },

                        series: [{
                            name: 'Stock Price',
                            data: data.chart_data.c,
                            type: 'area',
                            threshold: null,
                            pointPadding: 0, // Set pointPadding to 0
                            groupPadding: 0, // Set groupPadding to 0
                            tooltip: {
                                valueDecimals: 2
                            },
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            }
                        }, {
                            name: 'Volume',
                            data: data.chart_data.v,
                            yAxis: 1,
                            type: 'column',
                            pointWidth: 5,
                            color: '#000000'
                        }]
                    });

                    document.getElementById('article-img1').src = newsInfo[0].image;
                    document.getElementById('title1').textContent = newsInfo[0].headline;
                    document.getElementById('date1').textContent = find_date(newsInfo[0].datetime);
                    document.getElementById('original-post').href = newsInfo[0].url;

                    document.getElementById('article-img2').src = newsInfo[1].image;
                    document.getElementById('title2').textContent = newsInfo[1].headline;
                    document.getElementById('date2').textContent = find_date(newsInfo[1].datetime);
                    document.getElementById('original-post2').href = newsInfo[1].url;

                    document.getElementById('article-img3').src = newsInfo[2].image;
                    document.getElementById('title3').textContent = newsInfo[2].headline;
                    document.getElementById('date3').textContent = find_date(newsInfo[2].datetime);
                    document.getElementById('original-post3').href = newsInfo[2].url;

                    document.getElementById('article-img4').src = newsInfo[3].image;
                    document.getElementById('title4').textContent = newsInfo[3].headline;
                    document.getElementById('date4').textContent = find_date(newsInfo[3].datetime);
                    document.getElementById('original-post4').href = newsInfo[3].url;

                    document.getElementById('article-img5').src = newsInfo[4].image;
                    document.getElementById('title5').textContent = newsInfo[4].headline;
                    document.getElementById('date5').textContent = find_date(newsInfo[4].datetime);
                    document.getElementById('original-post5').href = newsInfo[4].url;
                }
            })
            .catch(error => {
                console.error('Error fetching company data:', error);
            });
    }

    // Form submission handling
    const form = document.getElementById('my-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const symbol = searchInput.value.trim();
        if (symbol) {
            fetchCompanyData(symbol);
        }
    });
});