import '@material/banner/styles';
import { MDCBanner } from '@material/banner';
const banner = new MDCBanner(document.querySelector('.mdc-banner'));



export function Banner() {
    return (
        <div class="mdc-banner" role="banner">
  <div class="mdc-banner__fixed">
    <div class="mdc-banner__content"
         role="alertdialog"
         aria-live="assertive">
      <div class="mdc-banner__graphic-text-wrapper">
        <div class="mdc-banner__text">
          There was a problem processing a transaction on your credit card.
        </div>
      </div>
      <div class="mdc-banner__actions">
        <button type="button" class="mdc-button mdc-banner__primary-action">
          <div class="mdc-button__ripple"></div>
          <div class="mdc-button__label">Fix it</div>
        </button>
      </div>
    </div>
  </div>
</div>)
}