# Expense Tracker GraphQL

A full-stack expense tracking application built with **GraphQL**, **Apollo Server & Client**, and **React**. This project allows users to manage their transactions (create, update, delete), visualize spending with a doughnut chart, and securely sign up or log in using **Passport.js** authentication.

---

## 🚀 Features

* **GraphQL API** with support for Queries and Mutations
* **Apollo Server & Client** for seamless communication between backend and frontend
* **React** frontend with **Apollo Client Cache** for efficient state management
* **User authentication** using **Passport.js**
* **Transaction management**: Create, update, and delete
* **Doughnut chart** to visualize expenses
* **Real-time data refetching** on transaction changes

---

## 🛠️ Tech Stack

* **Frontend**: React, Apollo Client
* **Backend**: Node.js, Express, Apollo Server
* **Authentication**: Passport.js (local strategy)
* **Data Visualization**: Chart.js (for doughnut graph)
* **Languages**: JavaScript

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Niharikaa0909/expense-tracker-graphql.git
   ```

2. **Install dependencies for server and client**

   ```bash
   cd expense-tracker-graphql
   npm install

   cd frontend
   npm install
   ```

3. **Start the development server**

   ```bash
   # In expense-tracker-graphql directory
   npm start

   # In frontend directory (in a new terminal window)
   npm run dev
   ```

---

## 🔐 Authentication

* Users must sign up or log in before managing transactions.
* Authentication is handled using **Passport.js** with session support.

---

## 📊 Visualization

* A **doughnut chart** dynamically updates to reflect expense categories and amounts.
* Data is automatically **refetched** after any transaction update.
