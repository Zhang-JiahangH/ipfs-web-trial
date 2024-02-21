
(function() {
  const componentSelector = 'sdf-variables';
  // Generated from 'src/themes/one/variables.css
  const componentTheme = ':root{--sdf-color-base-black:#000;--sdf-color-base-white:#fff;--sdf-color-base-gray-50:#f7f6f4;--sdf-color-base-gray-100:#f2f0ed;--sdf-color-base-gray-200:#e3dfda;--sdf-color-base-gray-300:#cdc7c2;--sdf-color-base-gray-400:#b2aba5;--sdf-color-base-gray-500:#938c85;--sdf-color-base-gray-600:#726c66;--sdf-color-base-gray-700:#544e4a;--sdf-color-base-gray-800:#393533;--sdf-color-base-gray-900:#262321;--sdf-color-purpose-action-primary-50:#e8effa;--sdf-color-purpose-action-primary-100:#d8e5f9;--sdf-color-purpose-action-primary-200:#bad1f5;--sdf-color-purpose-action-primary-300:#9abaef;--sdf-color-purpose-action-primary-400:#7ca1e6;--sdf-color-purpose-action-primary-500:#5f86d8;--sdf-color-purpose-action-primary-600:#476bc3;--sdf-color-purpose-action-primary-700:#324fa5;--sdf-color-purpose-action-primary-800:#20337d;--sdf-color-purpose-action-primary-900:#121c4e;--sdf-color-purpose-action-default-50:#f7f6f4;--sdf-color-purpose-action-default-100:#f2f0ed;--sdf-color-purpose-action-default-200:#e3dfda;--sdf-color-purpose-action-default-300:#cdc7c2;--sdf-color-purpose-action-default-400:#b2aba5;--sdf-color-purpose-action-default-500:#938c85;--sdf-color-purpose-action-default-600:#726c66;--sdf-color-purpose-action-default-700:#544e4a;--sdf-color-purpose-action-default-800:#393533;--sdf-color-purpose-action-default-900:#262321;--sdf-color-purpose-action-confirm-50:#dbf7dc;--sdf-color-purpose-action-confirm-100:#c2f2c3;--sdf-color-purpose-action-confirm-200:#99e596;--sdf-color-purpose-action-confirm-300:#7cd273;--sdf-color-purpose-action-confirm-400:#65ba58;--sdf-color-purpose-action-confirm-500:#529c42;--sdf-color-purpose-action-confirm-600:#407b30;--sdf-color-purpose-action-confirm-700:#2f5b22;--sdf-color-purpose-action-confirm-800:#214017;--sdf-color-purpose-action-confirm-900:#162a0f;--sdf-color-purpose-action-destructive-50:#fad9d9;--sdf-color-purpose-action-destructive-100:#f9c4c3;--sdf-color-purpose-action-destructive-200:#f79a96;--sdf-color-purpose-action-destructive-300:#f3776f;--sdf-color-purpose-action-destructive-400:#ec5b4e;--sdf-color-purpose-action-destructive-500:#de4635;--sdf-color-purpose-action-destructive-600:#c53422;--sdf-color-purpose-action-destructive-700:#9c2514;--sdf-color-purpose-action-destructive-800:#71190c;--sdf-color-purpose-action-destructive-900:#4e1007;--sdf-color-purpose-action-help-50:#ece8f8;--sdf-color-purpose-action-help-100:#e3ddf4;--sdf-color-purpose-action-help-200:#cfc5ec;--sdf-color-purpose-action-help-300:#b9ace2;--sdf-color-purpose-action-help-400:#a494d6;--sdf-color-purpose-action-help-500:#8f7dc5;--sdf-color-purpose-action-help-600:#7967ae;--sdf-color-purpose-action-help-700:#5f4b92;--sdf-color-purpose-action-help-800:#413069;--sdf-color-purpose-action-help-900:#2a1d47;--sdf-color-purpose-action-disabled-50:#f7f6f4;--sdf-color-purpose-action-disabled-100:#f2f0ed;--sdf-color-purpose-action-disabled-200:#e3dfda;--sdf-color-purpose-action-disabled-300:#cdc7c2;--sdf-color-purpose-action-disabled-400:#b2aba5;--sdf-color-purpose-action-disabled-500:#938c85;--sdf-color-purpose-action-disabled-600:#726c66;--sdf-color-purpose-action-disabled-700:#544e4a;--sdf-color-purpose-action-disabled-800:#393533;--sdf-color-purpose-action-disabled-900:#262321;--sdf-color-purpose-alert-success-50:#dbf7dc;--sdf-color-purpose-alert-success-100:#c2f2c3;--sdf-color-purpose-alert-success-200:#99e596;--sdf-color-purpose-alert-success-300:#7cd273;--sdf-color-purpose-alert-success-400:#65ba58;--sdf-color-purpose-alert-success-500:#529c42;--sdf-color-purpose-alert-success-600:#407b30;--sdf-color-purpose-alert-success-700:#2f5b22;--sdf-color-purpose-alert-success-800:#214017;--sdf-color-purpose-alert-success-900:#162a0f;--sdf-color-purpose-alert-warning-50:#f8eed9;--sdf-color-purpose-alert-warning-100:#f5e3c0;--sdf-color-purpose-alert-warning-200:#efcc8d;--sdf-color-purpose-alert-warning-300:#e6b25d;--sdf-color-purpose-alert-warning-400:#db9431;--sdf-color-purpose-alert-warning-500:#cc730d;--sdf-color-purpose-alert-warning-600:#b65700;--sdf-color-purpose-alert-warning-700:#983f00;--sdf-color-purpose-alert-warning-800:#772900;--sdf-color-purpose-alert-warning-900:#601b00;--sdf-color-purpose-alert-error-50:#fad9d9;--sdf-color-purpose-alert-error-100:#f9c4c3;--sdf-color-purpose-alert-error-200:#f79a96;--sdf-color-purpose-alert-error-300:#f3776f;--sdf-color-purpose-alert-error-400:#ec5b4e;--sdf-color-purpose-alert-error-500:#de4635;--sdf-color-purpose-alert-error-600:#c53422;--sdf-color-purpose-alert-error-700:#9c2514;--sdf-color-purpose-alert-error-800:#71190c;--sdf-color-purpose-alert-error-900:#4e1007;--sdf-color-purpose-alert-info-50:#e8effa;--sdf-color-purpose-alert-info-100:#d8e5f9;--sdf-color-purpose-alert-info-200:#bad1f5;--sdf-color-purpose-alert-info-300:#9abaef;--sdf-color-purpose-alert-info-400:#7ca1e6;--sdf-color-purpose-alert-info-500:#5f86d8;--sdf-color-purpose-alert-info-600:#476bc3;--sdf-color-purpose-alert-info-700:#324fa5;--sdf-color-purpose-alert-info-800:#20337d;--sdf-color-purpose-alert-info-900:#121c4e;--sdf-color-purpose-alert-neutral-50:#f7f6f4;--sdf-color-purpose-alert-neutral-100:#f2f0ed;--sdf-color-purpose-alert-neutral-200:#e3dfda;--sdf-color-purpose-alert-neutral-300:#cdc7c2;--sdf-color-purpose-alert-neutral-400:#b2aba5;--sdf-color-purpose-alert-neutral-500:#938c85;--sdf-color-purpose-alert-neutral-600:#726c66;--sdf-color-purpose-alert-neutral-700:#544e4a;--sdf-color-purpose-alert-neutral-800:#393533;--sdf-color-purpose-alert-neutral-900:#262321;--sdf-color-purpose-neutral-50:#f7f6f4;--sdf-color-purpose-neutral-100:#f2f0ed;--sdf-color-purpose-neutral-200:#e3dfda;--sdf-color-purpose-neutral-300:#cdc7c2;--sdf-color-purpose-neutral-400:#b2aba5;--sdf-color-purpose-neutral-500:#938c85;--sdf-color-purpose-neutral-600:#726c66;--sdf-color-purpose-neutral-700:#544e4a;--sdf-color-purpose-neutral-800:#393533;--sdf-color-purpose-neutral-900:#262321;--sdf-color-purpose-positive-50:#dbf7dc;--sdf-color-purpose-positive-100:#c2f2c3;--sdf-color-purpose-positive-200:#99e596;--sdf-color-purpose-positive-300:#7cd273;--sdf-color-purpose-positive-400:#65ba58;--sdf-color-purpose-positive-500:#529c42;--sdf-color-purpose-positive-600:#407b30;--sdf-color-purpose-positive-700:#2f5b22;--sdf-color-purpose-positive-800:#214017;--sdf-color-purpose-positive-900:#162a0f;--sdf-color-purpose-caution-50:#f8eed9;--sdf-color-purpose-caution-100:#f5e3c0;--sdf-color-purpose-caution-200:#efcc8d;--sdf-color-purpose-caution-300:#e6b25d;--sdf-color-purpose-caution-400:#db9431;--sdf-color-purpose-caution-500:#cc730d;--sdf-color-purpose-caution-600:#b65700;--sdf-color-purpose-caution-700:#983f00;--sdf-color-purpose-caution-800:#772900;--sdf-color-purpose-caution-900:#601b00;--sdf-color-purpose-negative-50:#fad9d9;--sdf-color-purpose-negative-100:#f9c4c3;--sdf-color-purpose-negative-200:#f79a96;--sdf-color-purpose-negative-300:#f3776f;--sdf-color-purpose-negative-400:#ec5b4e;--sdf-color-purpose-negative-500:#de4635;--sdf-color-purpose-negative-600:#c53422;--sdf-color-purpose-negative-700:#9c2514;--sdf-color-purpose-negative-800:#71190c;--sdf-color-purpose-negative-900:#4e1007;--sdf-color-purpose-highlight-50:#ece8f8;--sdf-color-purpose-highlight-100:#e3ddf4;--sdf-color-purpose-highlight-200:#cfc5ec;--sdf-color-purpose-highlight-300:#b9ace2;--sdf-color-purpose-highlight-400:#a494d6;--sdf-color-purpose-highlight-500:#8f7dc5;--sdf-color-purpose-highlight-600:#7967ae;--sdf-color-purpose-highlight-700:#5f4b92;--sdf-color-purpose-highlight-800:#413069;--sdf-color-purpose-highlight-900:#2a1d47;--sdf-color-purpose-info-50:#e8effa;--sdf-color-purpose-info-100:#d8e5f9;--sdf-color-purpose-info-200:#bad1f5;--sdf-color-purpose-info-300:#9abaef;--sdf-color-purpose-info-400:#7ca1e6;--sdf-color-purpose-info-500:#5f86d8;--sdf-color-purpose-info-600:#476bc3;--sdf-color-purpose-info-700:#324fa5;--sdf-color-purpose-info-800:#20337d;--sdf-color-purpose-info-900:#121c4e;--sdf-color-purpose-brand-primary-50:#f8e0df;--sdf-color-purpose-brand-primary-100:#fdd6d3;--sdf-color-purpose-brand-primary-200:#ffbbb6;--sdf-color-purpose-brand-primary-300:#fe9e98;--sdf-color-purpose-brand-primary-400:#fb807a;--sdf-color-purpose-brand-primary-500:#f2635d;--sdf-color-purpose-brand-primary-600:#c94742;--sdf-color-purpose-brand-primary-700:#8f2d2a;--sdf-color-purpose-brand-primary-800:#6a1f1d;--sdf-color-purpose-brand-primary-900:#511716;--sdf-color-purpose-brand-secondary-50:#f9e8de;--sdf-color-purpose-brand-secondary-100:#fddbc8;--sdf-color-purpose-brand-secondary-200:#febf9e;--sdf-color-purpose-brand-secondary-300:#fe9f73;--sdf-color-purpose-brand-secondary-400:#fa7e48;--sdf-color-purpose-brand-secondary-500:#f15c22;--sdf-color-purpose-brand-secondary-600:#d14912;--sdf-color-purpose-brand-secondary-700:#a53709;--sdf-color-purpose-brand-secondary-800:#7e2a06;--sdf-color-purpose-brand-secondary-900:#5f2105;--sdf-color-purpose-brand-tertiary-50:#f8e8e1;--sdf-color-purpose-brand-tertiary-100:#fcddcf;--sdf-color-purpose-brand-tertiary-200:#fcc5aa;--sdf-color-purpose-brand-tertiary-300:#f9ac84;--sdf-color-purpose-brand-tertiary-400:#ea9061;--sdf-color-purpose-brand-tertiary-500:#d47543;--sdf-color-purpose-brand-tertiary-600:#b2592a;--sdf-color-purpose-brand-tertiary-700:#833d17;--sdf-color-purpose-brand-tertiary-800:#5a280d;--sdf-color-purpose-brand-tertiary-900:#3f1c08;--sdf-color-purpose-brand-quaternary-50:#f9e4de;--sdf-color-purpose-brand-quaternary-100:#f5d5cc;--sdf-color-purpose-brand-quaternary-200:#eebaaa;--sdf-color-purpose-brand-quaternary-300:#e49e89;--sdf-color-purpose-brand-quaternary-400:#d7846b;--sdf-color-purpose-brand-quaternary-500:#c36a4f;--sdf-color-purpose-brand-quaternary-600:#a64f36;--sdf-color-purpose-brand-quaternary-700:#7d3520;--sdf-color-purpose-brand-quaternary-800:#5e2514;--sdf-color-purpose-brand-quaternary-900:#4c1d0e;--sdf-color-purpose-priority-trivial-50:#f7f6f4;--sdf-color-purpose-priority-trivial-100:#f2f0ed;--sdf-color-purpose-priority-trivial-200:#e3dfda;--sdf-color-purpose-priority-trivial-300:#cdc7c2;--sdf-color-purpose-priority-trivial-400:#b2aba5;--sdf-color-purpose-priority-trivial-500:#938c85;--sdf-color-purpose-priority-trivial-600:#726c66;--sdf-color-purpose-priority-trivial-700:#544e4a;--sdf-color-purpose-priority-trivial-800:#393533;--sdf-color-purpose-priority-trivial-900:#262321;--sdf-color-purpose-priority-minor-50:#dbf7dc;--sdf-color-purpose-priority-minor-100:#c2f2c3;--sdf-color-purpose-priority-minor-200:#99e596;--sdf-color-purpose-priority-minor-300:#7cd273;--sdf-color-purpose-priority-minor-400:#65ba58;--sdf-color-purpose-priority-minor-500:#529c42;--sdf-color-purpose-priority-minor-600:#407b30;--sdf-color-purpose-priority-minor-700:#2f5b22;--sdf-color-purpose-priority-minor-800:#214017;--sdf-color-purpose-priority-minor-900:#162a0f;--sdf-color-purpose-priority-normal-50:#f8eed9;--sdf-color-purpose-priority-normal-100:#f5e3c0;--sdf-color-purpose-priority-normal-200:#efcc8d;--sdf-color-purpose-priority-normal-300:#e6b25d;--sdf-color-purpose-priority-normal-400:#db9431;--sdf-color-purpose-priority-normal-500:#cc730d;--sdf-color-purpose-priority-normal-600:#b65700;--sdf-color-purpose-priority-normal-700:#983f00;--sdf-color-purpose-priority-normal-800:#772900;--sdf-color-purpose-priority-normal-900:#601b00;--sdf-color-purpose-priority-major-50:#fad9d9;--sdf-color-purpose-priority-major-100:#f9c4c3;--sdf-color-purpose-priority-major-200:#f79a96;--sdf-color-purpose-priority-major-300:#f3776f;--sdf-color-purpose-priority-major-400:#ec5b4e;--sdf-color-purpose-priority-major-500:#de4635;--sdf-color-purpose-priority-major-600:#c53422;--sdf-color-purpose-priority-major-700:#9c2514;--sdf-color-purpose-priority-major-800:#71190c;--sdf-color-purpose-priority-major-900:#4e1007;--sdf-color-purpose-status-progress-50:#e8effa;--sdf-color-purpose-status-progress-100:#d8e5f9;--sdf-color-purpose-status-progress-200:#bad1f5;--sdf-color-purpose-status-progress-300:#9abaef;--sdf-color-purpose-status-progress-400:#7ca1e6;--sdf-color-purpose-status-progress-500:#5f86d8;--sdf-color-purpose-status-progress-600:#476bc3;--sdf-color-purpose-status-progress-700:#324fa5;--sdf-color-purpose-status-progress-800:#20337d;--sdf-color-purpose-status-progress-900:#121c4e;--sdf-color-purpose-status-default-50:#f7f6f4;--sdf-color-purpose-status-default-100:#f2f0ed;--sdf-color-purpose-status-default-200:#e3dfda;--sdf-color-purpose-status-default-300:#cdc7c2;--sdf-color-purpose-status-default-400:#b2aba5;--sdf-color-purpose-status-default-500:#938c85;--sdf-color-purpose-status-default-600:#726c66;--sdf-color-purpose-status-default-700:#544e4a;--sdf-color-purpose-status-default-800:#393533;--sdf-color-purpose-status-default-900:#262321;--sdf-color-purpose-status-complete-50:#dbf7dc;--sdf-color-purpose-status-complete-100:#c2f2c3;--sdf-color-purpose-status-complete-200:#99e596;--sdf-color-purpose-status-complete-300:#7cd273;--sdf-color-purpose-status-complete-400:#65ba58;--sdf-color-purpose-status-complete-500:#529c42;--sdf-color-purpose-status-complete-600:#407b30;--sdf-color-purpose-status-complete-700:#2f5b22;--sdf-color-purpose-status-complete-800:#214017;--sdf-color-purpose-status-complete-900:#162a0f;--sdf-color-purpose-status-changed-50:#f8eed9;--sdf-color-purpose-status-changed-100:#f5e3c0;--sdf-color-purpose-status-changed-200:#efcc8d;--sdf-color-purpose-status-changed-300:#e6b25d;--sdf-color-purpose-status-changed-400:#db9431;--sdf-color-purpose-status-changed-500:#cc730d;--sdf-color-purpose-status-changed-600:#b65700;--sdf-color-purpose-status-changed-700:#983f00;--sdf-color-purpose-status-changed-800:#772900;--sdf-color-purpose-status-changed-900:#601b00;--sdf-color-purpose-status-failed-50:#fad9d9;--sdf-color-purpose-status-failed-100:#f9c4c3;--sdf-color-purpose-status-failed-200:#f79a96;--sdf-color-purpose-status-failed-300:#f3776f;--sdf-color-purpose-status-failed-400:#ec5b4e;--sdf-color-purpose-status-failed-500:#de4635;--sdf-color-purpose-status-failed-600:#c53422;--sdf-color-purpose-status-failed-700:#9c2514;--sdf-color-purpose-status-failed-800:#71190c;--sdf-color-purpose-status-failed-900:#4e1007;--sdf-color-purpose-status-new-50:#ece8f8;--sdf-color-purpose-status-new-100:#e3ddf4;--sdf-color-purpose-status-new-200:#cfc5ec;--sdf-color-purpose-status-new-300:#b9ace2;--sdf-color-purpose-status-new-400:#a494d6;--sdf-color-purpose-status-new-500:#8f7dc5;--sdf-color-purpose-status-new-600:#7967ae;--sdf-color-purpose-status-new-700:#5f4b92;--sdf-color-purpose-status-new-800:#413069;--sdf-color-purpose-status-new-900:#2a1d47;--sdf-color-chart-purpose-base-10:#2f5b22;--sdf-color-chart-purpose-base-11:#7c08c7;--sdf-color-chart-purpose-base-12:#e646ff;--sdf-color-chart-purpose-base-01:#7967ae;--sdf-color-chart-purpose-base-02:#2ba0c9;--sdf-color-chart-purpose-base-03:#da7f00;--sdf-color-chart-purpose-base-04:#f25d71;--sdf-color-chart-purpose-base-05:#20337d;--sdf-color-chart-purpose-base-06:#529c42;--sdf-color-chart-purpose-base-07:#7e2a06;--sdf-color-chart-purpose-base-08:#c53422;--sdf-color-chart-purpose-base-09:#d1229b;--sdf-color-illustration-purpose-base-alert-success:#65ba58;--sdf-color-illustration-purpose-base-alert-warning:#db9431;--sdf-color-illustration-purpose-base-alert-error:#ec5b4e;--sdf-color-illustration-purpose-base-alert-info:#7ca1e6;--sdf-color-illustration-purpose-base-white:#fff;--sdf-color-illustration-purpose-base-neutral-light:#f7f6f4;--sdf-color-illustration-purpose-base-neutral-dark:#393533;--sdf-color-illustration-purpose-base-primary-light:#ffbbb6;--sdf-color-illustration-purpose-base-primary-dark:#f2635d;--sdf-color-illustration-purpose-base-secondary-light:#cfc5ec;--sdf-color-illustration-purpose-base-secondary-dark:#8f7dc5;--sdf-color-illustration-purpose-empty-alert-success:#cdc7c2;--sdf-color-illustration-purpose-empty-alert-warning:#cdc7c2;--sdf-color-illustration-purpose-empty-alert-error:#cdc7c2;--sdf-color-illustration-purpose-empty-alert-info:#cdc7c2;--sdf-color-illustration-purpose-empty-white:#fff;--sdf-color-illustration-purpose-empty-neutral-light:#f7f6f4;--sdf-color-illustration-purpose-empty-neutral-dark:#938c85;--sdf-color-illustration-purpose-empty-primary-light:#f2f0ed;--sdf-color-illustration-purpose-empty-primary-dark:#cdc7c2;--sdf-color-illustration-purpose-empty-secondary-light:#e3dfda;--sdf-color-illustration-purpose-empty-secondary-dark:#b2aba5;--sdf-font-family-base:Circular,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;--sdf-context-chart-style-base-fill-color:#fff;--sdf-context-chart-style-base-title-text-color:#393533;--sdf-context-chart-style-base-subtitle-text-color:#544e4a;--sdf-context-chart-grid-style-base-stroke-color:#e3dfda;--sdf-context-chart-legend-style-base-text-color:#544e4a;--sdf-context-chart-legend-style-hover-text-color:#262321;--sdf-context-chart-axis-style-base-title-text-color:#726c66;--sdf-context-chart-axis-style-base-text-color:#726c66;--sdf-context-chart-axis-style-base-stroke-color:#544e4a;--sdf-context-chart-palette-style-default-10:#2f5b22;--sdf-context-chart-palette-style-default-11:#7c08c7;--sdf-context-chart-palette-style-default-12:#e646ff;--sdf-context-chart-palette-style-default-01:#7967ae;--sdf-context-chart-palette-style-default-02:#2ba0c9;--sdf-context-chart-palette-style-default-03:#da7f00;--sdf-context-chart-palette-style-default-04:#f25d71;--sdf-context-chart-palette-style-default-05:#20337d;--sdf-context-chart-palette-style-default-06:#529c42;--sdf-context-chart-palette-style-default-07:#7e2a06;--sdf-context-chart-palette-style-default-08:#c53422;--sdf-context-chart-palette-style-default-09:#d1229b}';
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
