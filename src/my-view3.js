/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, css, html } from 'lit';

class MyView3 extends LitElement {
  static get properties() {
    return {
      details: { type: Array },
      Dictionary: { type: Object },
      newDict: { type: Object }
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.fetchData();
    this.dict();
  }

  constructor() {
    super();
    this.details = [];
    this.Dictionary = {
      '34': 'thirty-four', '90': 'ninety',
      '91': 'ninety-one', '21': 'twenty-one',
      '61': 'sixty-one', '9': 'nine',
      '2': 'two', '6': 'six', '3': 'three',
      '8': 'eight', '80': 'eighty', '81': 'eighty-one',
      'Ninety-Nine': '99', 'nine-hundred': '900'
    };
    this.newDict = {};
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        if (!response.ok) {
          Error('Failed');
        } else {
          response.json().then(data => {
            this.details = data;
          })
        }
      });

  }

  dict() {
    let a = Object.keys(this.Dictionary).sort();
    let b = Object.values(this.Dictionary).sort();
    let newDict = Object.assign(this.Dictionary,a,b);
    this.newDict = newDict;
  }

  static get styles() {
    return css`
      :host {
          display: block;
          padding: 10px;
       }
       #card3{
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
        font-family:'Playfair Display';
      }
      .card h2{
        font-family:'Playfair Display';
      }
      .card p{
        font-family:'Montserrat';
      }
      `;
  }

  render() {

    return html`
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

<div class="has-text-centered">
<h1 class="is-uppercase has-text-weight-semibold">To-Do List</h1>
</div>
<div class="columns">
  <div class="column is-6">
      <ul>
      ${this.details.map(det => html`
      <div class="card shadow p-3 m-3">
        <h2 class="is-capitalized has-text-weight-semibold"><span>${det.id}. </span>${det.title}</h2>
          <div class="py-2 px-2">  
          <p>Completed: <span class="is-capitalized">${det.completed}</span></p>
          </div>     
      </div>
      `)}
      </ul>
  </div>
  <div class="column is-6">
    ${Object.entries(this.newDict).map(([key, value]) => html`
    <div class="card shadow p-3 m-3">
      <p>${key} : ${value}</p>
    </div>
    `)}
  </div>
  </div>
  `;
  }

}

customElements.define('my-view3', MyView3);

