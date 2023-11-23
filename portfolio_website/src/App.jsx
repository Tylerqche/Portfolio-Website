import Home from './pages/Home'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import DotGroup from './components/DotGroup'
import { useEffect, useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Line from './components/Line'


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className='app'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Home setSelectedPage={setSelectedPage} />
      </div>
      <Line />
      <div className='bg-secondbackground'>
        <div className="w-5/6 mx-auto md:h-full">
          <Experience setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <Line />
      <div className="w-5/6 mx-auto">
        <Skills setSelectedPage={setSelectedPage} />
      </div>
      <Line />
    </div>
  );
}

export default App
