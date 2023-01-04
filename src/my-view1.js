/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import './shared-styles.js';

// class MyView1 extends PolymerElement {
//   static get template() {
//     return html`
//       <style include="shared-styles">
//         :host {
//           display: block;

//           padding: 10px;
//         }
//       </style>

//       <div class="card">
//         <div class="circle">1</div>
//         <h1>View One</h1>
//         <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
//         <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
//       </div>
//     `;
//   }
// }

// window.customElements.define('my-view1', MyView1);


import { LitElement, css, html, render } from "lit";
import "./shared-styles";

export class MyView1 extends LitElement {
  static get properties() {
    return {
      userName: { type: String },
      userEmail: { type: String },
      userTel: { type: String }
    };
  }
  constructor() {
    super();
    this.userName='';
    this.userEmail='';
    this.userTel='';

  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 10px;
        font-family:'Montserrat';
      }
      #card1{
        padding:10px;
      }
      .circle{
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }
      h1{
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
        
      }
      input{
        font-family:'Montserrat';
      }
      button{
        font-family:'Montserrat';
      }
      
    `;
  }
  render() {

    return html`
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <div id="card1" class="card">
        <div class="circle">1</div>
        <h1 class="is-size-4 is-capitalized">Input your details below</h1>
        <form id="userForm" action="">
          <div id="box" class="py-2 px-5 is-flex-direction-row">
            <div class="py-1">
              <input class="input"
                type="text"
                id="userName"
                name="userName"
                placeholder="Your Name"
              />
            </div>
            <div class="py-1">
              <input class="input"
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="Your Email" 

              />
            </div>
            <div class="py-1">
            <input class="input"
              type="tel"
              id="userTel"
              name="userTel"
              placeholder="Your Telephone Number"
            />
            </div>
            <div class="py-1 has-text-centered"> 
            <button @click="${this._display}" class="button is-primary"> 
              Submit
            </button>
            </div>
          </div>
        </form>
      </div>
    `;
  }
  _display(e) {
    e.preventDefault();
    this.userName = this.shadowRoot.querySelector('#userName').value;
    this.userEmail = this.shadowRoot.querySelector('#userEmail').value;
    this.userTel = this.shadowRoot.querySelector('#userTel').value;
    console.log(this.userName);
    console.log(this.userEmail);
    console.log(this.userTel);
    alert(this.userName + ' ' + this.userEmail + ' ' + this.userTel)

  }
}
customElements.define("my-view1", MyView1);
