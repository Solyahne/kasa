import BannerHome from '../../components/bannerhome';
import CardList from '../../components/cardlist';
import './home.css';

export default function Home() {
  return (
    <main>
      <BannerHome />
      <CardList />
    </main>
  );
}