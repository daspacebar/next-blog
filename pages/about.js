import Layout from "../components/Layout";
import Divider from '@material-ui/core/Divider';

function About() {
  return (
    <Layout pageTitle="About | Niket Kumar">
      <article className="prose max-w-none" >
        <h1 className="text-center">Who am I?</h1>
        <p>Hey there, I'm Niket, currently a third year undergrad pursuing CS. I love to code and build amazing things while approaching social and environmental issues. Apart from coding I love to watch anime and read cybersecurity write-ups (Hacking is fancy :P) Enjoyer of Japanese Culture and everything related to it.
          <br></br>
          <br></br>
          If you wanna reach out regarding any of my projects or just want to say hi or make coffee plans, feel free to drop me a <a href="mailto:niket123kumar@gmail.com">Mail</a> or reach out to me through <a href="https://twitter.com/daspacebar6">Twitter</a> or <a href="https://linkedin/in/daspacebar">LinkedIn!</a>
        </p>
        <Divider />
        <p className="text-gray-500 italic text-center">
          Have a great day, Peace :)
        </p>
      </article>
    </Layout>
  );
}

export default About;
