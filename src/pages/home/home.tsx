import BannerHome from '../../components/bannerhome';
import CardList from '../../components/cardlist';
import './home.css';

export default function Home(): JSX.Element {
  return (
    <main>
      <BannerHome />
      <CardList />
    </main>
  );
}