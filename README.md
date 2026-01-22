# EventCompanionApp

**A digital platform to enhance wedding participation for remote guests with user accounts, private livestream, digital gifting, and matrimonial integration.**

---

## 🌟 Overview

EventCompanionApp is designed to allow people who cannot attend weddings in person to stay connected and involved. This **Phase 1** version focuses on building the core foundation of the platform, providing meaningful engagement while laying the groundwork for future expansion.

**Key Features (Phase 1):**

* **Matrimonial Service Integration** – basic browsing and interest sending for wedding participants.
* **User Accounts & Verification** – secure signup/login with profile creation and verification.
* **Payments** – minimal payment integration for premium features or digital gifts.
* **Private Livestream** – secure livestream for remote guests to watch events live.
* **Digital Gifting** – virtual gifts that can be sent to the couple.

> This phase focuses on establishing the base functionality quietly, without attracting competition, while preparing the platform for gradual feature expansion in future phases.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Abhrankan-Chakrabarti/EventCompanionApp.git
cd EventCompanionApp
```

---

### 2️⃣ Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3️⃣ Configure environment variables

Create a `.env` file inside the `backend` directory and configure the following:

* `DB_URI` – database connection string
* `JWT_SECRET` – secret key for authentication
* `PAYMENT_GATEWAY_KEY` – payment gateway API key
* `STREAM_API_KEY` – livestream service API key

---

### 4️⃣ Run the backend server

```bash
cd backend
npm start
```

---

### 5️⃣ Run the frontend

```bash
cd frontend
npm start
```

The frontend will start in development mode and run at:

```
http://localhost:3000
```

---

## 🛠️ Tech Stack (Phase 1 – Suggested)

* **Backend:** Node.js + Express
* **Frontend:** React (Create React App)
* **Database:** MongoDB / PostgreSQL / MySQL
* **Authentication:** JWT
* **Payments:** Razorpay / Stripe (Sandbox)
* **Livestream:** WebRTC / Agora / Vimeo Livestream API

---

## 📁 Project Structure (High Level)

```
EventCompanionApp/
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
├── frontend/
│   ├── public/
│   └── src/
├── docs/
│   └── EventCompanionApp_FYP.pdf
├── .gitignore
└── README.md
```

---

## 📈 Roadmap

### Phase 1 – Build the Base (Silent Entry)

* Matrimonial service integration
* User accounts & verification
* Payments
* Private livestream
* Digital gifting

### Phase 2 – Ecosystem Expansion

* Wedding vendors
* Photographers
* Makeup artists
* Caterers
* Gift partners

### Phase 3 – Auditorium Platform

* Auditorium listings
* Availability system
* Booking management

---

## 🤝 Contribution

This project is currently being developed as a **Final Year Project (FYP)**.
Contributions are welcome if they align with **Phase 1 scope and academic objectives**.

---

## 📄 License

MIT License
