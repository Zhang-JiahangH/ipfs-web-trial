
(function() {
  const componentSelector = 'sdf-busy-indicator';
  // Generated from 'src/themes/one/busy-indicator.css
  const componentTheme = ':host(:not([hidden])){align-items:center;display:flex;justify-content:center}.track{stroke:var(--sdf-context-busy-indicator-track-style-base-fill-color,#e3ddf4)}:host([size=sm]) svg{height:var(--sdf-context-busy-indicator-layout-sm-height,1rem);width:var(--sdf-context-busy-indicator-layout-sm-width,1rem)}:host([size=sm]) svg .track{stroke-width:var(--sdf-context-busy-indicator-track-layout-sm-width,.5rem)}:host([size=sm]) svg .path{stroke-width:var(--sdf-context-busy-indicator-glyph-layout-sm-width,.5rem)}:host([size=md]) svg{height:var(--sdf-context-busy-indicator-layout-md-height,2rem);width:var(--sdf-context-busy-indicator-layout-md-width,2rem)}:host([size=md]) svg .track{stroke-width:var(--sdf-context-busy-indicator-track-layout-md-width,.5rem)}:host([size=md]) svg .path{stroke-width:var(--sdf-context-busy-indicator-glyph-layout-md-width,.5rem)}:host([size=lg]) svg{height:var(--sdf-context-busy-indicator-layout-lg-height,3rem);width:var(--sdf-context-busy-indicator-layout-lg-width,3rem)}:host([size=lg]) svg .track{stroke-width:var(--sdf-context-busy-indicator-track-layout-lg-width,.5rem)}:host([size=lg]) svg .path{stroke-width:var(--sdf-context-busy-indicator-glyph-layout-lg-width,.5rem)}:host([size=xl]) svg{height:var(--sdf-context-busy-indicator-layout-xl-height,4rem);width:var(--sdf-context-busy-indicator-layout-xl-width,4rem)}:host([size=xl]) svg .track{stroke-width:var(--sdf-context-busy-indicator-track-layout-xl-width,.5rem)}:host([size=xl]) svg .path{stroke-width:var(--sdf-context-busy-indicator-glyph-layout-xl-width,.5rem)}:host([fullscreen]),:host([overlay]){background-color:var(--sdf-context-busy-indicator-style-base-fill-color,hsla(0,0%,100%,.5));inset:0}:host([inverse][fullscreen]),:host([inverse][overlay]){background-color:var(--sdf-context-busy-indicator-style-inverse-fill-color,rgba(38,35,33,.6))}:host([overlay]){position:absolute}:host([fullscreen]){position:fixed;z-index:50}:host .spinner{stroke:var(--sdf-context-busy-indicator-glyph-style-base-fill-color,#7967ae);animation:rotator .9875s linear infinite}:host .track{stroke:var(--sdf-context-busy-indicator-track-style-base-fill-color,#e3ddf4)}:host([inverse]) .spinner{stroke:var(--sdf-context-busy-indicator-glyph-style-inverse-fill-color,#fff)}:host([inverse]) .track{stroke:var(--sdf-context-busy-indicator-track-style-inverse-fill-color,transparent)}@keyframes rotator{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.path,.track{fill:none;stroke-linecap:round}.path{stroke-dasharray:187;stroke-dashoffset:187;animation:dash 6s cubic-bezier(.42,.01,.58,1) infinite;transform-origin:center}@keyframes dash{0%{stroke-dashoffset:187;transform:rotate(0deg)}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}to{stroke-dashoffset:187;transform:rotate(450deg)}}.wrapper{animation:dashrotator 6s ease-in-out infinite}@keyframes dashrotator{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}';
  // End ui-framework generated code
  window.SynergThemes = window.SynergThemes || {};
  window.SynergThemes['one'] = window.SynergThemes['one'] || {};

  window.SynergThemes['one'][componentSelector] = {
    raw: componentTheme
  };
  try {
      const css = new CSSStyleSheet();

      css.replaceSync(componentTheme);
      window.SynergThemes['one'][componentSelector].constructable = css;

  } catch(e) {
     // not supported yet
  }
})();
