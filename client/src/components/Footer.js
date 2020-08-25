import React, { useState, useEffect } from 'react';
import SearchBar from './searchMercado.js';
import { connect } from 'react-redux';
import './Footer.css'

function Footer({ }) {


  return (
    
    <footer class="footer">
      <div class="container">
        <span class="text-muted">
           <ul>
             <li class="selected">
                <a href="/" rel="follow">1</a>
            </li>
            <li>
              <a href="/page=2" rel="follow">2</a>
            </li>
                <li class="next">
                  <a id="pagingNext" title="Siguiente" href="/&amp;page=2" rel="follow">
              <span class="txtPaging">Siguiente</span><span class="icon icon-arrow-right-full"></span>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};




export default connect(null, {})(Footer);




    // <div class="footerCatalog">
    //     <div class="rfloat">
    //         <p class="searchResult lfloat">
    //             {/* <span class="search-query-results-count strong">250</span> */}
    //             <span>productos</span>
    //         </p>

    //         <p class="searchResult borderLeft plm mlm borderRight lfloat">Página <span class="strong">1 </span> de <span class="strong">6</span></p>

    //         <div class="paging mls lfloat">
    //             <ul>
        
    //                 <li class="selected">
    //                     <a href="https://www.dafiti.com.ar/catalog/todos-los-productos/?q=botines&amp;page=1" rel="follow">1</a>
    //                 </li>
    //                 <li>
    //                     <a href="/page=2" rel="follow">2</a>
    //                 </li>
    //                 <li class="next">
    //                     <a id="pagingNext" title="Siguiente" href="https://www.dafiti.com.ar/catalog/todos-los-productos/?q=botines&amp;page=2" rel="follow">
    //                         <span class="txtPaging">Siguiente</span><span class="icon icon-arrow-right-full"></span>
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    //         <div class="clearfix"></div>
    // </div>