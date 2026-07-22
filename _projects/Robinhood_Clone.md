---
layout: page
title: Robinhood Clone (Stock Trading Platform)
description: Full-stack stock trading platform with real-time market data, portfolio management, and simulated trading.
img: assets/img/project_images/stock-trading-cover.jpg
importance: 1
category: software
related_publications: false
# pdf: assets/pdf/stock_trading_report.pdf
---

Link to the code: <a href="https://github.com/Sreya8/Stock-Trading" target="_blank">GitHub</a>.

<!-- <div class="text-center mt-4">
    {% include figure.liquid path="assets/img/project_images/stock-trading-workflow.png" title="Robinhood Clone Architecture" class="img-fluid rounded z-depth-1" width="80%" %}
</div> -->

This project is a full-stack stock trading platform inspired by Robinhood, enabling users to monitor real-time market data, execute simulated stock trades, and manage investment portfolios. The application integrates third-party financial APIs through backend microservices while providing an interactive and responsive user interface.

### Features

- User authentication and account management
- Real-time stock price lookup and company information
- Buy and sell stocks with simulated trading
- Portfolio management with holdings and profit/loss tracking
- Watchlist for monitoring favorite stocks
- Interactive charts displaying historical stock performance

### System Architecture

- **Frontend**: React-based single-page application for responsive user interactions.
- **Backend**: Node.js and REST APIs handling authentication, trading logic, and portfolio management.
- **Microservices**: Flask services responsible for fetching and processing financial market data.
- **Database**: MongoDB for storing user accounts, portfolios, transactions, and watchlists.
- **Deployment**: Google Cloud Platform for hosting backend services and application deployment.

### External APIs

- **Finnhub API**: Real-time stock quotes, company profiles, and market news.
- **Polygon.io API**: Historical price data and market information.

### Tools and Frameworks

- **Frontend**: React, JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Microservices**: Flask, Python
- **Database**: MongoDB
- **Cloud**: Google Cloud Platform (GCP)
- **Version Control**: Git, GitHub

### Core Functionality

- Real-time market data retrieval through external APIs
- Portfolio valuation based on current stock prices
- Simulated order execution with transaction history
- Watchlist management for tracking selected stocks
- RESTful API communication between frontend and backend services

### Key Highlights

- Built a scalable full-stack application using React, Node.js, Flask, and MongoDB.
- Integrated multiple financial data providers through backend microservices.
- Designed REST APIs for portfolio management, order execution, and market data retrieval.
- Developed responsive dashboards for monitoring investments and stock performance.
- Deployed cloud-hosted services to support seamless user interactions.

### Applications

- Stock market simulation and educational trading
- Portfolio management systems
- Financial dashboard development
- Learning full-stack web development with microservices