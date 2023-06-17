import Convertor from '@/components/Convertor';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className="container">
      <h2>Currency convertor</h2>
      <Convertor />
    </div>
  );
}
