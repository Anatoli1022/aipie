import Hero from './components/pages/home/hero/Hero';
import Sales from './components/pages/home/sales/Sales';
import Integrated from './components/pages/home/integrated/Integrated';
import Work from './components/pages/home/work/Work';

export default function Home() {
  return (
    <>
      <Hero />
      <Sales />
      <Integrated />
      <Work />
    </>
  );
}
