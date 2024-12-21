# 🎥 Movinfo - Your Ultimate Movie Info Companion

Movinfo is a responsive and visually appealing React.js application designed to provide detailed movie information using the OMDB API. With smooth animations, an intuitive UI, and robust features, Movinfo is perfect for movie enthusiasts!

---

## 🚀 Key Features  
- 🔍 **Search Movies**: Effortlessly search for movies and fetch detailed information using the OMDB API.  
- 🎨 **Tailwind CSS Styling**: Modern and responsive design for an immersive experience.  
- 🧩 **Redux State Management**: Simplified and efficient management of app-wide state.  
- ⏳ **Lottie Animations**: Elegant loading animations while fetching movie data.  
- 📄 **Movie Info Card**: Displays detailed movie information with a clean, attractive layout.  
- 📱 **Fully Responsive**: Seamlessly adapts to all screen sizes and devices.  
- 📥 **Download Movie Cards**: Save detailed movie info cards as images for offline viewing.  

---

## 📂 Project Structure

Here's how the project is structured:

```plaintext
Movinfo/
├── public/
│   ├── index.html
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Loader.js
│   │   ├── MovieCard.js
│   │   ├── NotFound.js
│   │   ├── Popup.js
│   │   └──  SearchBar.js
│   ├── lottie/
│   │   └──  loading.json
│   ├── redux/
│   │   ├── slices/
│   │   │   └──  movieSlice.js
│   │   └──  store.js
│   ├── App.js
│   ├── index.css
│   └──  index.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└──  tailwind.config.js
```

---

## 🛠️ Built With
- **React.js**: For building the user interface.
- **Axios**: For making API requests.
- **Redux**: For state management.
- **Tailwind CSS**: For sleek and responsive styling.
- **React Icons**: For elegant and functional UI icons.
- **Lottie**: For smooth loading animations.
- **OMDB API**: To fetch movie details.

---

## 🌟 How to Get Started

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kathir-Moorthy/movinfo.git
   cd movinfo
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start

## 🌐 Check the Live App  
[Click here to view the app on Vercel!](https://movinfo-virid.vercel.app/)
