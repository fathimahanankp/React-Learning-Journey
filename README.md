# 📅 Date Counter App (React)

A simple and interactive React app that lets users calculate dates by adding or subtracting days from a fixed starting date.

---

## 🚀 Features

- 🔢 Increment / decrement a **count value**
- ⚙️ Adjust step size in increments of 5
- 📆 Dynamically calculates dates based on user input
- 🔄 Displays:
  - Today’s date (when count = 0)
  - Future dates (when count > 0)
  - Past dates (when count < 0)

---

## 🧠 How It Works

- The app starts with a base date: **May 27, 2026**
- Users can:
  - Change the **step value** (default: 0, increases/decreases by 5)
  - Use the step value to adjust the **count**

- The app calculates the new date using:

  ```js
  date.setDate(date.getDate() + count);
  ```

---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components)
- 🪝 React Hooks (`useState`)
- 🎨 Basic CSS

---

## 📂 Project Structure

```
src/
 ├── App.js        # Main component
 ├── App.css       # Styling
 ├── logo.svg      # Default asset (not used)
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/date-counter-app.git
cd date-counter-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---

## 💡 Example Usage

- Set step = 5
- Click "+" on count twice → count = 10
- Output:

  ```
  10 days from today is June 6, 2026
  ```

---

## ⚠️ Notes

- Step value cannot go below 0
- Count cannot go below 0 (due to condition in decrement logic)
- JavaScript automatically adjusts dates across months/years

---

## 👩‍💻 Author

Fathima Hanan
