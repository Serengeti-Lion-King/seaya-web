import { useEffect, useState } from 'react';
import { GateData, getGateData } from '../gateItems';
import GateSlide from './GateSlide';
import './GateSlider.scss';

const GateSlider = () => {
  const [gateData, setGateData] = useState<GateData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGateData();
      setGateData(data);
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % gateData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + gateData.length) % gateData.length
    );
  };

  return (
    <div className="slider">
      {gateData.length > 0 && (
        <GateSlide
          gate={gateData[currentIndex]}
          onNextSlide={nextSlide}
          onPrevSlide={prevSlide}
        />
      )}
    </div>
  );
};

export default GateSlider;
