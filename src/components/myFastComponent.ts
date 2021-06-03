import { FASTElement, customElement, attr, html, css } from "@microsoft/fast-element";

const template = html<MyFastComponent>`
  <div>
    <h3>${wc => wc.sub + ' ' + wc.greeting} !</h3>
    <p>My name is <span class="name">${wc => wc.name}</span>.</p>
    <slot></slot>
  </div>
`;

const styles = css`
  :host {
    display: inline-block;
    contain: content;
    color: white;
    text-align: left;
  }

  :host([hidden]) {
    display: none;
  }

  span.name {
    font-style: var(--name-font-style);
  }
`;

@customElement({ name: 'my-fast-component', template: template, styles: styles })
export class MyFastComponent extends FASTElement {
  constructor(public sub = "Hello"){
    super();
  }

  @attr greeting: string = "World";
  @attr name: string | null = null;
}