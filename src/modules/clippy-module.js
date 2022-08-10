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
                agent.speak('Please, remind me to put some good description here! Write an awesome description for your new site here. You can edit this line in _config.yml.');
            });
            window.clippyLoaded = true;
        }
    },
  };
})();