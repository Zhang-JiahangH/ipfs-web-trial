
(function() {
  const componentSelector = 'sdf-icon';
  // Generated from 'src/themes/one/icon.css
  const componentTheme = ':host(:not([hidden])){word-wrap:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga";align-items:center;display:inline-flex;justify-content:center;line-height:1;text-rendering:optimizeLegibility;text-transform:none;vertical-align:text-bottom;white-space:nowrap}:host(:not([hidden])) svg.rtlFlipped{transform:scaleX(var(--sdf-math-direction-rtl,1))}:host(:not([hidden])) span{line-height:inherit}:host(:not([hidden])[direction=ltr]) svg.rtlFlipped{transform:scaleX(1)}:host(:not([hidden])[direction=rtl]) svg.rtlFlipped{transform:scaleX(-1)}svg .direction-rtl{display:none;display:var(--sdf-display-direction-rtl,none)}svg .direction-ltr{display:unset;display:var(--sdf-display-direction-ltr,unset)}:host([direction=ltr]) svg .direction-rtl,:host([direction=rtl]) svg .direction-ltr{display:none}:host([direction=ltr]) svg .direction-ltr,:host([direction=rtl]) svg .direction-rtl{display:unset}';
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
