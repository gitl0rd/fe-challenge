import React, {useState} from 'react';

import Section from './Section';

const serifList = [];
const sansSerifList = [];
const monospaceList = [];

const Page = (props) => {
    //PROPS: title

    const [serif, setSerif] = useState('');
    const [sans, setSans] = useState('');
    const [mono, setMono] = useState('');

    return (
        <div>
            <h1>{props.title}</h1>
            <Section>
                <p>Waggle dance is a term used in beekeeping and ethology for a particular figure-eight dance of the honey bee. By performing this dance, successful foragers can share information about the direction and distance to patches of flowers yielding nectar and pollen, to water sources, or to new nest-site locations with other members of the colony.</p>
                <p>The waggle dance and the round dance are two forms of dance behaviour that are part of a continuous transition. As the distance between the resource and the hive increases, the round dance transforms into variations of a transitional dance, which, when communicating resources at even greater distances, becomes the waggle dance. In the case of Apis mellifera ligustica, the round dance is performed until the resource is about 10 metres away from the hive, transitional dances are performed when the resource is at a distance of 20 to 30 metres away from the hive, and finally, when it is located at distances greater than 40 metres from the hive, the waggle dance is performed. However, even close to the nest, the round dance can contain elements of the waggle dance, such as a waggle portion. It has therefore been suggested that the term "waggle dance" is better for describing both the waggle dance and the round dance.</p>
                <p>Austrian ethologist and Nobel laureate Karl von Frisch was one of the first who translated the meaning of the waggle dance</p>
            </Section>
            {/* <TOC/> */}
            <Section heading={'Description'}>
                <p>A waggle dance consists of one to 100 or more circuits, each of which consists of two phases: the waggle phase and the return phase. A worker bee's waggle dance involves running through a small figure-eight pattern: a waggle run (aka waggle phase) followed by a turn to the right to circle back to the starting point (aka return phase), another waggle run, followed by a turn and circle to the left, and so on in a regular alternation between right and left turns after waggle runs. Waggle-dancing bees produce and release two alkanes, tricosane and pentacosane, and two alkenes, (Z)-9-tricosene and (Z)-9-pentacosene, onto their abdomens and into the air.</p>
                <p>The direction and duration of waggle runs are closely correlated with the direction and distance of the resource being advertised by the dancing bee. In an experiment with capture and relocation of bees exposed to a waggle dance the bees followed the path that would have taken them to an experimental feeder had they not been displaced. The resource can include the location of a food source or a potential nesting site. For cavity-nesting honey bees, like the western honey bee (Apis mellifera) or Apis nigrocincta, flowers that are located directly in line with the sun are represented by waggle runs in an upward direction on the vertical combs, and any angle to the right or left of the sun is coded by a corresponding angle to the right or left of the upward direction. The distance between hive and recruitment target is encoded in the duration of the waggle runs. The farther the target, the longer the waggle phase. The more excited the bee is about the location, the more rapidly it will waggle, so it will grab the attention of the observing bees, and try to convince them. If multiple bees are doing the waggle dance, it's a competition to convince the observing bees to follow their lead, and competing bees may even disrupt other bees' dances or fight each other off. In addition, some open-air nesting honeybees such as the black dwarf honeybee (Apis andreniformis), whose nests hang from twigs or branches, will perform a horizontal dance on a stage above their nest in order to signal to resources.</p>
                <p>Waggle dancing bees that have been in the nest for an extended time adjust the angles of their dances to accommodate the changing direction of the sun. Therefore, bees that follow the waggle run of the dance are still correctly led to the food source even though its angle relative to the sun has changed.</p>
                <p>The consumption of ethanol by foraging bees has been shown to reduce waggle dance activity and increase occurrence of the tremble dance.</p>
                <p>Kevin Abbott and Reuven Dukas of McMaster University in Hamilton, Ontario, Canada discovered that if a dead western honeybee is placed on a flower, bees performed far fewer waggle dances upon returning to the hive. The scientists explain that the bees associate the dead bee with the presence of a predator at the food source. The reduction of the dance repetition frequency, therefore, indicates that the dancing bees perform and communicate a form of risk/benefit analysis.</p>
                <p>Though first decoded by Karl von Frisch, dancing behavior in bees had been observed and described multiple times prior. Around 100 years before Frisch's discovery, Nicholas Unhoch described dancing behavior of bees as being an indulgence "in certain pleasures and jollity". He admitted ignorance as to the purpose of the dancing. 35 years prior to Unhoch's observations, Ernst Spitzner observed bees dancing and interpreted it as transmitting forage resource odors to other nestmates. Aristotle, in addition to describing flower constancy behavior, suspected that some form of communication occurred between foragers within a nest:</p>
                <p><i>"On each trip the bee does not fly from a flower of one kind to a flower of another, but flies from one violet, say, to another violet, and never meddles with another flower until it has got back to the hive; on reaching the hive they throw off their load, and each bee on her return is followed by three or four companions. What it is that they gather is hard to see, and how they do it has not been observed".</i></p>
                <p>Jürgen Tautz also writes about it in his book The Buzz about Bees (2008):</p>
                <p><i>Many elements of the communication used to recruit miniswarms to feeding sites are also observed in "true" swarming behavior. Miniswarms of foragers are not placed under the same selection pressure as are true swarms, because the fate of the entire colony is not at stake. A truly swarming colony has to be quickly led to a new home, or it will perish. The behavior used to recruit to food sources possibly developed from the "true" swarming behavior.</i></p>
            </Section>
            <Section heading={'Mechanism'}>
                <p>Honeybees accumulate an electric charge during flying and when their body parts are moved or rubbed together. Bees emit constant and modulated electric fields during the waggle dance. Both low- and high-frequency components emitted by dancing bees induce passive antennal movements in stationary bees according to Coulomb's Law. The electrically charged flagellum of mechanoreceptor cells are moved by electric fields and more strongly so if sound and electric fields interact. Recordings from axons of the Johnston's organ indicate its sensitivity to electric fields. Therefore, it has been suggested that electric fields emanating from the surface charge of bees stimulate mechanoreceptors and may play a role in social communication during the waggle dance.</p>
            </Section>
            <Section heading={'Controversy'}>
                <h4>The dance language vs. the waggle dance</h4>
                <p>As defined by von Frisch, Tanzsprache (German for "dance language") is the information about direction, distance, and quality of a resource (such as food or nesting sites) contained within the waggle dance. There is supporting evidence of the waggle dance and "Tanzsprache" in Apis dorsata. Similar to other bees, they utilize the dance language to indicate the critical information regarding food resources. The dancer's body points in the direction of the food source and the sound produced during the dance indicates the profitability of the food. Although there is some evidence for a direct connection between the Tanzsprache and the performance of the waggle dance, recent criticism holds that potential foragers need not correctly translate the dance language from the waggle dance to successfully forage. In an experiment on the honeybee Apis mellifera, most individuals who thoroughly followed a waggle dance ignored the resource direction and location information. Instead, 93% of the foragers returned to foraging areas they had previous knowledge of.</p>
                <p>Bees that follow a waggle dance can successfully forage without decoding the dance language information in several ways:</p>
                <ul>
                    <li><p>Dance follower may use olfactory information from the dancer and find either the same resource or a different one with a similar scent.</p></li>
                    <li><p>Following a dance may simply trigger foraging behavior. A forager may then search randomly for resources.</p></li>
                    <li><p>Following a dance may reactivate private knowledge of a resource. After reactivation, the forager may return to the known resource.</p></li>
                    <li><p>Using information communicated in the waggle dance is more useful to foragers when private information about resources is lacking</p></li>
                </ul>
                <h4>Dance language as a language</h4>
                <p>The use of the word "language" may lead to misrepresentations of the waggle dance. The Swiss linguist Ferdinand de Saussure proposed a system of language where a sign is made up two chief components. The signifier is the physical or phonetic representation of a sign. The signified is the conceptual component. If the dance language followed the Saussurian dyadic model of semiotics, the signifier would be the waggle dance and the signified would be the location of the foraging resource. Though the dance language may or may not follow this sort of pattern, it is not considered to be a language with syntactical grammar or a set of symbols.</p>
            </Section>
            <Section heading={'Evolution'}>
                <p>Ancestors to modern honeybees most likely performed excitatory movements to encourage other nestmates to forage. These excitatory movements include shaking, zig-zagging, buzzing and crashing into nestmates. Similar behavior is observed in other Hymenoptera including stingless bees, wasps, bumblebees and ants.</p>
                <p>The waggle dance is thought to have evolved to aid in communicating information about a new nest site, rather than spatial information about foraging sites.</p>
                <p>Observations have suggested that different species of honeybees have different "dialects" of the waggle dance, each species or subspecies dance varying by curve or duration. A study from 2008 demonstrated that a mixed colony of Asiatic honeybees (Apis cerana cerana) and European honeybees (Apis mellifera ligustica) were gradually able to understand one another's "dialects" of waggle dance.</p>
            </Section>
            <Section heading={'Applications to operations reserach'}>
                <p>In line with recent work in swarm intelligence research involving optimization algorithms inspired by the behavior of social insects (including bees, ants and termites), and vertebrates such as fish and birds, there has recently been research on using bee waggle dance behavior for efficient fault-tolerant routing. From the abstract of Wedde, Farooq, and Zhang (2004):</p>
                <p><i>In this paper we present a novel routing algorithm, BeeHive, which has been inspired by the communicative and evaluative methods and procedures of honey bees. In this algorithm, bee agents travel through network regions called foraging zones. On their way their information on the network state is delivered for updating the local routing tables. BeeHive is fault tolerant, scalable, and relies completely on local, or regional, information, respectively. We demonstrate through extensive simulations that BeeHive achieves a similar or better performance compared to state-of-the-art algorithms.</i></p>
                <p>Another bee-inspired stigmergic computational technique called bee colony optimization is employed in Internet Server Optimization.</p>
            </Section>
        </div>
    );
};

export default Page;

//https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCNxgAaVNEzCPTCWaRpx3wj72oSc65WuAs