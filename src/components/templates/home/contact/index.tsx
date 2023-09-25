import ContactForm from "./form";
import MapSection from "./map";
import NewsletterSubscription from "./newsletter";

export default function Contact (){
    return (
      <>
        <NewsletterSubscription />
        <ContactForm />
        <MapSection />
      </>
    );
}