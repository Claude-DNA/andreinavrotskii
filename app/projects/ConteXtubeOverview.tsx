import Image from "next/image";

export default function ConteXtubeOverview() {
  return (
    <div className="mt-10 space-y-10 leading-relaxed text-warm-200/90 [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-warm-50 [&_p+p]:mt-3">
      <section>
        <h2>What one reader sees in a book</h2>
        <p>Imagine two people reading Kafka’s <em>The Trial</em>. One remembers the machinery of the court. The other remembers how it feels to be accused before anyone will name the charge. They read the same words and carried away different things. ConteXtube gives each reader a way to publish that reading, keep their name attached to it, and show someone else how they got there.</p>
        <p>The feed starts with individual ideas. An image and a few words can catch your attention even if you have never opened the book. From there you can read the passage, follow a connection to another work, or explore the collection the idea came from. A collection organized around a source or theme is called a <em>flow</em>. A <em>context cloud</em> maps relationships within the material, so you can also explore it in a different order.</p>
      </section>
      <section>
        <h2>Five ways into <em>The Trial</em></h2>
        <p>The project manual uses Kafka’s court to show what each layer adds. You can stop when your question is answered.</p>
        <ol className="mt-4 list-decimal space-y-3 pl-6 marker:text-gold-400">
          <li><strong>Essence.</strong> An illustrated idea captures the feeling of guilt without a known cause. It gives the reader a starting point in a few words.</li>
          <li><strong>Evidence.</strong> A passage from the book sits beside the idea. You can judge for yourself whether the language supports that reading.</li>
          <li><strong>Connections.</strong> The curator draws a parallel between Kafka’s court and Dostoevsky’s Grand Inquisitor. Following the connection opens a second question. What gives an authority the power to demand an answer?</li>
          <li><strong>Synthesis.</strong> Commentary brings the passages and parallels together. Here the curator has room to explain why the comparison matters and where the two works differ.</li>
          <li><strong>Narrative.</strong> The deepest layer holds the source text and notes where publication rights allow. A reader can return to the surrounding scene and form a different interpretation.</li>
        </ol>
      </section>
      <section>
        <h2>Inside the author’s studio</h2>
        <p>A creator can start with an existing essay or manuscript and use the builder to turn it into a layered flow. A fiction writer can also start earlier, while the story is taking shape. In Context Cloud Studio, a scene connects to the people who appear in it, the place where it happens and its position in the story. Moving through that graph lets the writer follow one character across several scenes.</p>
        <p>The Audition tool addresses a familiar revision problem. A character enters a scene after something has happened to them, but their dialogue could belong to who they were three chapters ago. The writer can try a different character state, read the scene it produces, and pin the chosen state to that character in that scene. It survives later graph rebuilds. The writer can keep a state in a personal library and try it in another scene.</p>
        <figure className="mt-5">
          <Image src="/projects/contextube-audition.webp" width={1100} height={619} sizes="(max-width: 768px) 100vw, 720px" alt="Context Cloud Studio project illustration introducing the character audition tool" className="w-full h-auto rounded-lg" />
          <figcaption className="mt-2 text-sm text-warm-200/70">Character auditions in Context Cloud Studio. <a className="text-gold-400 underline" href="/projects/context-cloud">Read about the Studio</a>.</figcaption>
        </figure>
      </section>
      <section>
        <h2>How an AI uses the same material</h2>
        <p>An assistant can request the layers through the Model Context Protocol (MCP) or the REST API. For a question about themes, it can start with a compact overview. For a question about what a character actually said or did, it can retrieve the relevant passage. This lets an agent spend its limited reading space on the parts of a long work that bear on the question.</p>
      </section>
      <section>
        <h2>Does the shorter route work?</h2>
        <p>In an initial project benchmark, two models answered 213 questions across seven works, including three works the models had not previously seen. Accuracy was 56% at baseline, 88% with the full text, and 87% with a cloud plus passage retrieval. For longer works, the cloud-and-retrieval approach used about a tenth as much text.</p>
        <p>The interesting failure was a model trusting the overview when it needed to look something up. A cloud can preserve the shape of a story while leaving out precisely the detail a question turns on. These figures describe a small trial. They give us a concrete design problem to work on: helping an agent recognize when it needs the passage.</p>
      </section>
      <section>
        <h2>Where the project is headed</h2>
        <p>The illustrated feed, publishing tools, Studio and agent interfaces are parts of the same experiment. The longer-term ambition is to let people and their AI collaborators build context over time. A reader might collect connections across years of reading. An agent could return to the relevant layers in a later conversation. What gives that collection its value is knowing who made a connection, why they made it, and where to find the evidence.</p>
      </section>
    </div>
  );
}
