var navAnimations = (function() {

  var _onHomeButton = function() {
    this.props.navigator.Pop({
      component: Main,
      name: "Main",
    });
  };

  var _onTrailsButtonPush() {
    this.props.navigator.push({
      component: TrailList,
      name: "Trails",
    });
  };

  var _onTrailsButtonPop() {
    this.props.navigator.pop({
      component: TrailList,
      name: "Trails",
    });
  };

  var _onMapsButtonPush() {
    this.props.navigator.push({
      component: Maps,
      name: "Map",
    });
  };

  var _onMapsButtonPop() {
    this.props.navigator.pop({
      component: Maps,
      name: "Map",
    });
  };

  var _onWeatherButtonPush() {
    this.props.navigator.push({
      component: Weather,
      name: "Weather",
    });
  };

  var _onWeatherButtonPop() {
    this.props.navigator.pop({
      component: Weather,
      name: "Weather",
    });
  };

  var _onLocalButton() {
    this.props.navigator.pop({
      component: Local,
      name: "Local",
    });
  };

  return {
    home: _onHomeButton,
    trailsPush: _onTrailsButtonPush,
    trailsPop: _onTrailsButtonPop,
    mapsPush: _onMapsButtonPush,
    mapsPop: _onMapsButtonPop,
    weatherPush: _onWeatherButtonPush,
    weatherPop: _onWeatherButtonPop,
    local: _onLocalButton
  }

})();
