type MarkdownString = string // Accepts Markdown
export interface Challenge {
  readonly title: string
  readonly companyEncrypted: string
  readonly company: string
  readonly videoUrl?: string
  readonly channel: string
  readonly prize?: string
  readonly description?: MarkdownString
}

export const challenges: Challenge[] = [
  {
    companyEncrypted: 'Company challenge',
    company: 'Seidor',
    title: "AI Work Assistant: Don't click, tell me what you need",
    //videoUrl: '',
    description: /* markdown */ `Join our AI Voice Assistant Challenge to simplify the daily tasks of creating shopping lists and fulfilling orders. By leveraging AI technology with conversational capabilities, we aim to address common issues like locating items and correcting quantities—all through natural language interactions. Together, let's revolutionize workflow efficiency and improve lives. Hack away at HackUPC!`,
    //prize: '',
    channel: 'seidor',
  },
  {
    companyEncrypted: 'Company challenge',
    title: 'Best use of GenAI using InterSystems IRIS Vector Search',
    company: 'InterSystems',
    //videoUrl: '',
    description: /* markdown */ `Explore the potential of GenAI integrated with InterSystems IRIS Vector Search across various fields like healthcare, finance, sustainability, or others at this hackathon. GenAI's robust capabilities can elevate your project's functionality, efficiency, and intelligence.

InterSystems IRIS Vector Search, part of the IRIS Data Platform, introduces a new vector store feature. Like we handle strings or integers, embedding vectors are just another SQL datatype for us! Develop your groundbreaking solution on InterSystems IRIS, offering tools for seamless integration of GenAI, tabular AutoML, and data interoperability via SQL or Python LangChain/Llamaindex connectors.`,
    //prize: '',
    channel: 'intersystems',
  },
  {
    companyEncrypted: 'Company challenge',
    company: 'European Space Agency',
    title: 'Galileo Mastermind',
    //videoUrl: '',
    description: /* markdown */ `Galileo is Europe's own global navigation satellite system.
Over 3.9 billion Galileo-enabled smartphones have already been sold worldwide. Your own google maps or waze app most probably use Galileo to navigate!
Imagine navigating with Galileo, and being able to evaluate in real-time the quality of the positioning solution on your smartphone.
You might want to know things like: How many Galileo satellites are used on your phone? How is Galileo contributing to your position accuracy? Are the signals being altered?
Be the mastermind of Galileo & develop an app to help us answer these questions by analysing and displaying Galileo data in real-time!`,
    //prize: '',
    channel: 'esa',
  },
  {
    companyEncrypted: 'Company challenge',
    company: 'Grafana',
    title: 'Grafana IoT Observability',
    //videoUrl: '',
    description: /* markdown */ `Unleash your inner data nerd and build a monitoring platform for your environment. Use the microcontroller and sensors we provide you to create satisfying visualizations and alerts for the rooms you are hacking on. You will take a technical and interdisciplinary journey into the world of IoT, microcontrollers, digital sensors, observability, and data visualization using open standards and state-of-the-art open source tooling.`,
    //prize: '',
    channel: 'grafana',
  },
  {
    companyEncrypted: 'Company challenge',
    company: 'InditexTech',
    title: 'Image Computing for an Ecommerce',
    //videoUrl: '',
    description: /* markdown */ `Given a dataset of garment images from various angles, the challenge is to develop an algorithm that identifies duplicated or very similar images not belonging to the same set (each set consists of three consecutive photos). This involves comparing colors, features, and bitmaps.

The task is computationally intensive, requiring over 8 billion computations due to the combinatorial complexity of image comparisons in three dimensions.

The algorithm's accuracy and speed will be key evaluation criteria. Advanced teams may use provided photos to create a website showcasing their work. Senior teams could infer garment details (year, season, indicators) from generated URLs.`,
    //prize: '',
    channel: 'inditextech',
  },
  {
    companyEncrypted: 'Company challenge',
    company: 'TravelPerk',
    title: 'Creating Meaningful Travel Encounters',
    //videoUrl: '',
    description: /* markdown */ `At our core, we value genuine human connections - striving to facilitate meaningful interactions through in-real-life (IRL) experiences for our travellers.
Your challenge: given a data-set, develop an application that defines travel plans for travellers given their departure & arrival locations, and times. Your application should identify opportunities for genuine interactions between travellers.`,
    //prize: '',
    channel: 'travelperk',
  },
  {
    companyEncrypted: 'Company challenge',
    company: 'Vueling',
    title: 'Pigall Quest',
    //videoUrl: '',
    description: /* markdown */ `Develop a solution that assists visually impaired passengers from the moment they enter the airport until they board the aeroplane. The solution should enhance independence and ease the entire boarding process.`,
    //prize: '',
    channel: 'vueling',
  },
]
