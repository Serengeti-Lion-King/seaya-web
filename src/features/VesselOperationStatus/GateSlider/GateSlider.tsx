import { useEffect, useState } from 'react';
import { GateData, getGateData } from '../gateItems';
import GateSlide from './GateSlide';
import './GateSlider.scss';

const GateSlider = () => {
  const [data, setData] = useState<GateData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const gateData = await getGateData();
      setData(gateData);
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="slider">
      {data.length > 0 && (
        <>
          <button type="button" onClick={prevSlide} className="arrowButton">
            ◀
          </button>
          <GateSlide gate={data[currentIndex]} />
          <button type="button" onClick={nextSlide} className="arrowButton">
            ▶
          </button>
        </>
      )}
    </div>
  );
};

export default GateSlider;
