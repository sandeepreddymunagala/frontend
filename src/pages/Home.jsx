import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ForStudios from '../components/ForStudios';
import ForClients from '../components/ForClients';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="features">
        <HowItWorks />
      </div>
      <div id="studios">
        <ForStudios />
      </div>
      <div id="clients">
        <ForClients />
      </div>
      <div id="pricing">
        <SubscriptionPlans />
      </div>
      <Testimonials />
    </>
  );
}
