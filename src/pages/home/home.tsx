import Banner from '../../components/banner';
import CardList from '../../components/cardlist';
import bannerimg from '../../assets/homebanner.jpg';
import bannermobile from '../../assets/homebannermobile.jpg';
import './home.css';

export default function Home(): JSX.Element {
  return (
    <main>
      <Banner 
        banner={bannerimg}
        bannermobile={bannermobile}
        banneralt='Paysage rocheux au bord de mer'
        classtext='notext'
      />
      <CardList />
    </main>
  );
}