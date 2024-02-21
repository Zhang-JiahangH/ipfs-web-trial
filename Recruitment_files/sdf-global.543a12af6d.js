
(function() {
  const componentSelector = 'sdf-global';
  // Generated from 'src/themes/one/global.css
  const componentTheme = ':root{--theme-color:#2a70e8;--theme-hover-color:#b5d0ff;--theme-focus-color:#75a8ff;--sdf-window-inner-height:auto;--sdf-window-top-scroll:0;--sdf-display-direction-rtl:none;--sdf-display-direction-ltr:""}html{font-size:100%}[dir=rtl]{--sdf-math-direction-rtl:-1;--sdf-display-direction-rtl:"";--sdf-display-direction-ltr:none}[dir=ltr]{--sdf-math-direction-rtl:1;--sdf-display-direction-rtl:none;--sdf-display-direction-ltr:""}body,html{font-feature-settings:normal;-webkit-font-smoothing:antialiased;color:var(--sdf-context-ui-typography-base-css-color,#262321);font-family:var(--sdf-context-ui-typography-base-css-font-family,Circular,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif);font-variant:normal;font-weight:var(--sdf-context-ui-typography-base-css-font-weight,400);line-height:var(--sdf-context-ui-typography-base-css-line-height,1.25)}body[data-synerg-modal-count]{overflow:hidden}html.sdf-floating-pane-locked,html.sdf-floating-pane-locked body{box-sizing:border-box;height:calc(var(--sdf-window-inner-height) - 1px);overflow:hidden;position:fixed;top:var(--sdf-window-top-scroll)}input[type=text].sdf{border:2px solid #e1e1e6;border-radius:var(--sdf-size-border-radius-md,.25rem);box-sizing:border-box;color:#212125;display:inline;font-size:var(--sdf-size-font-sm,.875rem);font-weight:var(--sdf-font-weight-normal,400);line-height:var(--sdf-size-line-height-none,1);padding:6px 8px;resize:vertical;transition:border .25s,color .25s;width:var(--sdf-size-width-full,100%)}input[type=text]:hover.sdf{border-color:var(--theme-focus-color,#75a8ff);outline:0}input[type=text]:focus.sdf,input[type=text]:focus:hover.sdf{border-color:var(--theme-color,#2a70e8);outline:0}';
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
