import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({location, previousLocation}) {
        // Quick and dirty global variable
        if (!window.clippyLoaded) {
            clippy.load('Clippy', function(agent){
                // do anything with the loaded agent
                agent.show();
                agent.speak('When all else fails, bind some paper together. My name is Clippy.');
            });
            window.clippyLoaded = true;
        }
    },
  };
})();