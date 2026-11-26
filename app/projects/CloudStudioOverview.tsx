import ProjectFigure from "./ProjectFigure";
import Image from "next/image";

export default function CloudStudioOverview() {
  return (
    <div className="mt-10 space-y-10 leading-relaxed text-warm-200/90 [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-warm-50 [&_p+p]:mt-3">
      <section>
        <h2>What does the character carry into the room?</h2>
        <p>Suppose a captain has just learned that a crew member is missing. On the bridge she asks, “How long until the next shift?” On the page it sounds like routine scheduling. To the officer who knows she has stayed up all night waiting for news, the same question lands differently. If you move the scene earlier in the draft, before the disappearance, the words still fit. Their meaning changes entirely.</p>
        <p>That is the kind of revision Studio helps a writer see. It keeps a record of who enters a scene, what has already happened to them and what they take away. A novelist can follow a character across chapters. A screenwriter can try several performances of the same exchange before choosing one.</p>
      </section>
      <section>
        <h2>Building a story in six clouds</h2>
        <p>An existing manuscript can be imported as editable cards tied to lines in the text. For a new story, a writer can add cards by hand, paste loose notes into Quick Capture, or talk an idea through with Chat Creator. The cards are grouped by the questions they answer.</p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-[7rem_1fr] [&_dt]:font-semibold [&_dt]:text-warm-50">
          <dt>Arc</dt><dd>What happens, and in what order? Each scene has a place in the sequence.</dd>
          <dt>Characters</dt><dd>Who is involved? A character card holds their role and traits, then tracks their state across appearances.</dd>
          <dt>Stage</dt><dd>Where does the action happen? A place can change over the course of a story.</dd>
          <dt>World</dt><dd>What rules shape the characters’ choices? These can be physical limits, laws or customs.</dd>
          <dt>Ideas</dt><dd>Which questions keep coming back? A writer can trace a theme across scenes.</dd>
          <dt>References</dt><dd>What does the work draw on? A painting, a song or a real event can sit beside the scene it informed.</dd>
        </dl>
      </section>
      <section>
        <h2>Reading the scene graph</h2>
        <p>The Visual Editor lays scenes out in order. Open a scene to see its text and each character’s part in it. Follow a character’s line out of the scene to see the state they carry into their next appearance, even if they spend a chapter offstage. A new state appears where something changes. Places and world rules sit alongside the scenes they affect.</p>
        <figure className="mt-5">
          <Image src="/projects/cloud-studio-graph.webp" width={1200} height={675} sizes="(max-width: 768px) 100vw, 720px" alt="Context Cloud Studio illustration of character states connected across scenes in the Visual Editor" className="w-full h-auto rounded-lg" />
          <figcaption className="mt-2 text-sm text-warm-200/70">The scene graph follows each character through the moments that change them.</figcaption>
        </figure>
      </section>
      <section>
        <h2>Auditioning a moment</h2>
        <p>For the captain waiting on the bridge, the writer might choose <em>(Grief − Hope) × Calm</em>. Grief is what the character feels. Hope is what the situation calls for and she can no longer summon. Calm is what the people around her see. The writer can set the intensity and inspect the direction the model receives.</p>
        <ProjectFigure image="studio-formula" alt="Studio’s formula card separates felt grief, absent hope and outward calm." caption="The formula gives the actor a private feeling and a public face. Changing either can change how the same line is delivered." />
        <p>The screenshot shows another character, Mara, in the break room. She sets down her cup and watches the line monitor. When she speaks, she wants the crew to hear the news from her. Her hand finding the edge of the counter gives the fear away. From the same panel the writer can direct a quieter performance, try another take, or pin this one to Mara’s scene.</p>
        <ProjectFigure image="mara-audition" width={799} height={557} alt="Mara’s break-room take in the Audition panel, with a direction field and controls to try another take or save the state." caption="Save state to the cloud keeps Mara’s performance with this scene. Add to My Library keeps the state available for another character." />
      </section>
      <section>
        <h2>Using a state again</h2>
        <p>Saving the formula to the state library lets the writer use it in another scene. Imagine the missing crew member’s sister calling the bridge. She and the captain may both be grieving and outwardly calm, but the sister has a different relationship to the person who disappeared. Give her the same starting state and audition her response. Her own history and the circumstances of the call still shape what she says.</p>
        <ProjectFigure image="studio-library" alt="The State Library showing character states a writer can select for an audition." caption="A saved state can be cast in a new scene. The writer can adjust its weight and mix it with other states before reading the take." />
      </section>
      <section>
        <h2>From a working draft to a reader’s edition</h2>
        <p>Writers can create cards, compose formulas and save a project by hand. For AI-assisted work such as extracting cards, building a graph or playing an audition, the author selects a provider and supplies their own API key. Developers can also use the Studio API to create projects, populate clouds and save drafts.</p>
        <p>A downloadable cloud file holds the cards, scenes, character arcs and picture links together. A co-author can open it as a new project. When the work is ready for readers, the author can publish the cloud under their name or turn the graph into a five-layer flow, editing each layer before publication. <a href="/projects/contextube" className="text-gold-400 underline">See how readers explore a published work in ConteXtube</a>.</p>
      </section>
    </div>
  );
}
