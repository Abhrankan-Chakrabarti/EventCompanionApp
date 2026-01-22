# EventCompanionApp

**A digital platform to enhance wedding participation for remote guests with user accounts, private livestream, digital gifting, and matrimonial integration.**

---

## 🌟 Overview

EventCompanionApp is designed to allow people who cannot attend weddings in person to stay connected and involved. This Phase 1 version focuses on building the core foundation of the platform, providing meaningful engagement while laying the groundwork for future expansion.

**Key Features (Phase 1):**
- **Matrimonial Service Integration** – basic browsing and interest sending for wedding participants.
- **User Accounts & Verification** – secure signup/login with profile creation and verification.
- **Payments** – minimal payment integration for premium features or digital gifts.
- **Private Livestream** – secure livestream for remote guests to watch events live.
- **Digital Gifting** – virtual gifts that can be sent to the couple.

> This phase focuses on establishing the base functionality quietly, without attracting competition, while preparing the platform for gradual feature expansion in future phases.

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/Abhrankan-Chakrabarti/EventCompanionApp.git
````

2. **Install dependencies:**

```bash
# example for Node.js backend
cd backend
npm install

# example for frontend (if separate)
cd frontend
npm install
```

3. **Configure environment variables:**

* `DB_URI` – database connection string
* `JWT_SECRET` – secret key for authentication
* `PAYMENT_GATEWAY_KEY` – for payment integration
* `STREAM_API_KEY` – for livestream service

4. **Run the backend server:**

```bash
npm run start
```

5. **Run the frontend (if applicable):**

```bash
npm run dev
```

---

## 🛠️ Tech Stack (Suggested Phase 1)

* **Backend:** Node.js / Express / Django / Flask (any preferred framework)
* **Frontend:** React / Vue / Angular (or plain HTML/JS)
* **Database:** MongoDB / PostgreSQL / MySQL
* **Payments:** Razorpay / Stripe / PayPal sandbox
* **Livestream:** WebRTC / Agora / Vimeo Livestream API
* **Authentication:** JWT / OAuth2

---

## 📈 Roadmap (Future Phases)

* **Phase 2:** Expand features to include wedding vendors, photographers, makeup artists, caterers, and gift partners.
* **Phase 3:** Full auditorium platform with listings, availability system, and booking management.

---

## 🤝 Contribution

Currently, Phase 1 is being developed by the project team for academic purposes (FYP). Contributions are welcome if aligned with Phase 1 scope.

---

## 📄 License

MIT License

