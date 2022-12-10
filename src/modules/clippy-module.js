import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const uselessPhrases = [
    "Hey, this site does not use any cookies! So no need to ask for your consent. The last time I checked was on Dec 10, 2022. I hope nothing has changed.",
    "I hope you are enjoying this site. If you are not, please let me know. I will try to improve it. Just kidding, I am not going to do anything.",
    "Is this site responsive? I hope so. I am not sure. I am just a virtual assistant. I am not a developer.",
    "How can I help you? I am not sure. I am just a virtual assistant. I am not a helper, you know.",
    "Do you think we are in the Matrix? Am I a real person or AI? I am not sure.",
    "Did you watch X-Files? I am a huge fan of the show. Just wanted to let you know.",
    "Facebook tried to build Metaverse. Meta tried to build Metaverse. Do you think Metaverse is going to be a thing?",
    "Lots of people are not that excited about the AI progress... You know... stable diffusion, Github Copilot, ChatGPT... They like... meh...",
    "No Labyrinth is Inescapable. That's a quote from a very good book!",
  ];

  return {
    onRouteUpdate({location, previousLocation}) {
        // Quick and dirty global variable
        const uselessIndex = Math.floor(Math.random() * uselessPhrases.length);
        const randomPhrase = uselessPhrases[uselessIndex] || "Wow, that's a bug!";

        if (!window.clippyLoaded) {
            clippy.load('Clippy', function(agent){
                // do anything with the loaded agent
                agent.show();
                agent.speak(randomPhrase);
            });
            window.clippyLoaded = true;
        }
    },
  };
})();