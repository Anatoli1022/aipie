import Hero from './components/pages/home/hero/Hero';
import Sales from './components/pages/home/sales/Sales';
import Integrated from './components/pages/home/integrated/Integrated';
import Work from './components/pages/home/work/Work';
import Alpie from './components/pages/home/alpie/Alpie';

export default function Home() {
  return (
    <>
      <Hero />
      <Sales />
      <Integrated />
      <Work />
      <Alpie />
    </>
  );
}
