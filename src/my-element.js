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


export class MyElement extends LitElement {

  static get properties() {
    return {

    }
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 10px;
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
      #card2{
        padding:10px;
      }
      .simple-slider .swiper-slide {
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
}

.simple-slider .swiper-button-next, .simple-slider .swiper-button-prev {
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;
}

@media (max-width:767px) {
  .simple-slider .swiper-slide {
    height: 360px;
  }
}

.caption2 {
  background-color: rgba(0,0,0,0.7);
  width: 150%;
}
.caption2 h3{
  font-family:'Montserrat';
  text-transform: uppercase;
}
.caption2 p{
  font-family:'Montserrat';
}
.headline h2{
  font-family:'Playfair Display';
  text-transform:capitalize;
}
.headline p{
  font-family:'Montserrat';
  text-transform:capitalize;
}
.media .title{
  font-family:'Playfair Display';
}
.media .subtitle{
  font-family:'Playfair Display';
}
.content p{
  font-family:'Montserrat';
}
.column .card:hover{
scale:1.1;
transition: all .3s ease-in-out;
z-index:999;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0,0,0,0.7);
}
.column .card:hover .overlay {
  opacity: 1;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-family:'Montserrat';
}
      `;

  }

  render() {
    return html`
   <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
   <!-- <link rel="stylesheet" href="node_modules/bulma-carousel/dist/css/bulma-carousel.min.css"> -->

      <div class="card" id="card2">
        <section class="photo-gallery py-4 py-xl-5">
        <div class="container" style="overflow:hidden">
    <div class="row mb-5">
        <div class="col-md-8 col-xl-6 has-text-centered mx-auto headline">
            <h2 class="font-weight-bold">Photo Gallery</h2>
            <p class="w-lg-50">take a trip down memory lane</p>
        </div>
    </div>
    <div class="columns">
        <div class="column is-one-quarter-desktop is-half-tablet">
          
          <div class="card has-background-success has-text-white" id="card-1">
              <div class="card-image">
                <figure class="image">
                    <img class="image" src="https://picsum.photos/id/237/700/400" />
                    <div class="overlay">
                    <div class="text">Image Caption</div>
                    </div>
                </figure>
              </div>
              <div class="media pt-2 px-2">
                <div class="media-content">
                    <p class="title is-4 is-uppercase">Title</p>
                    <p class="subtitle is-6">Subtitle</p>
                </div>
              </div>
              
              <div class="content px-3 pb-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

               </div>
             
            </div>
         
        
            
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet">
            <div class="card has-background-primary has-text-white" id="card-2">
              <div class="card-image">
                <figure class="image">
                    <img class="image" src="https://picsum.photos/id/238/700/400" />
                    <div class="overlay">
                    <div class="text">Image Caption</div>
                    </div>
                </figure>
              </div>
              <div class="media pt-2 px-2 is-primary">
                <div class="media-content">
                    <p class="title is-4 is-uppercase">Title</p>
                    <p class="subtitle is-6">Subtitle</p>
                </div>
              </div>
              <div class="content px-3 pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet">
          <div class="card has-background-info has-text-white" id="card-3">
              <div class="card-image">
                <figure class="image">
                  <img class="image" src="https://picsum.photos/id/239/700/400" />
                  <div class="overlay">
                    <div class="text">Image Caption</div>
                    </div>
                </figure>
              </div>
              <div class="media pt-2 px-2">
                <div class="media-content">
                    <p class="title is-4 is-uppercase">Title</p>
                    <p class="subtitle is-6">Subtitle</p>
                </div>
              </div>
              <div class="content px-3 pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
    </div>
    <div class="columns my-0">
        <div class="column is-one-quarter-desktop is-half-tablet">
            <div class="card has-background-link has-text-white">
              <div class="card-image">
                <figure class="image">
                <img class="image" src="https://picsum.photos/id/232/700/400" />
                <div class="overlay">
                    <div class="text">Image Caption</div>
                    </div>
                </figure>
              </div>
              <div class="media pt-2 px-2">
                <div class="media-content">
                    <p class="title is-4 is-uppercase">Title</p>
                    <p class="subtitle is-6">Subtitle</p>
                </div>
              </div>
              <div class="content px-3 pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet">
            <div class="card has-background-danger has-text-white">
              <div class="card-image">
                <figure class="image">
                  <img class="image" src="https://picsum.photos/id/233/700/400" />
                  <div class="overlay">
                    <div class="text">Image Caption</div>
                    </div>
                </figure>
              </div>
              <div class="media pt-2 px-2">
                <div class="media-content">
                    <p class="title is-4 is-uppercase">Title</p>
                    <p class="subtitle is-6">Subtitle</p>
                </div>
              </div>
              <div class="content px-3 pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
        </div>
        <div class="column is-one-quarter-desktop is-half-tablet">
        <div class="card has-background-warning-dark has-text-white">
              <div class="card-image">
                <figure class="image">
                <img class="image" src="https://picsum.photos/id/234/700/400" />
                <div class="overlay">
                    <div class="text">Image Caption</div>
                    </div>
                </figure>
              </div>
              <div class="media pt-2 px-2">
                <div class="media-content">
                    <p class="title is-4 is-uppercase">Title</p>
                    <p class="subtitle is-6">Subtitle</p>
                </div>
              </div>
              <div class="content px-3 pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
        </div>
    </div>
  </div>
  </section>
		<!-- End Hero Carousel -->
    <!-- <script src="node_modules/bulma-carousel/dist/js/bulma-carousel.min.js"></script>
    <script>
    bulmaCarousel.attach('#slider', {
        slidesToScroll: 1,
        slidesToShow: 1
      });
    </script> -->
    `;
  }


}

customElements.define('my-element', MyElement);

