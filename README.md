# 🌤 Weather App  

A simple and stylish weather application that provides real-time weather updates using the OpenWeather API.  

## 🚀 Features  
✔️ Search for weather by city name 🌍  
✔️ Displays temperature, humidity, and wind speed 🌡️💨  
✔️ Dynamic background based on weather conditions 🌄  
✔️ Responsive and modern UI 🎨  

## 🌍 Live Demo  
🔗 **Deployed Link**: [Weather App](https://weather-app-u2ah.vercel.app/)  

## 🛠 Tech Stack  
- **React.js** ⚛️  
- **Vite** ⚡  
- **Axios** (for API requests) 🔗  
- **CSS3** (for styling) 🎨  
- **Vercel** (for deployment) 🚀  



## 🔧 Installation & Setup  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Run the application**  
```sh
npm run dev
```

4️⃣ **Open in browser**  
Go to `http://localhost:5173/`  

## 🔑 API Key Setup  
Replace `apiKey` in `App.jsx` with your own OpenWeather API key:  
```js
const apiKey = "YOUR_API_KEY_HERE";
```
Get your API key from [OpenWeather](https://openweathermap.org/api)  

## 📂 Folder Structure  
```
weather-app/
│── node_modules/
│── public/
│   ├── vite.svg
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherInfo.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
```

## 🚀 Deployment  
This project is deployed on **Vercel**. You can deploy your own version by following these steps:  

1️⃣ Install Vercel CLI:  
```sh
npm install -g vercel
```
2️⃣ Login to Vercel:  
```sh
vercel login
```
3️⃣ Deploy the app:  
```sh
vercel
```

## 📜 License  
This project is **MIT Licensed**.  

---
