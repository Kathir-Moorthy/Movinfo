import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import Popup from './components/Popup';

const App = () => {
  const { status, data } = useSelector((state) => state.movie);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Popup />
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <SearchBar />
        {status === 'loading' && <Loader />}
        {status === 'succeeded' && data && data.Response === 'False' && <NotFound />}
        {status === 'succeeded' && data && data.Response === 'True' && <MovieCard />}
      </main>
      <Footer />
    </div>
  );
};

export default App;