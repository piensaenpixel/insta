$(document).ready(function() {
  function formatState (state) {
    if (!state.id) { return state.text; }
    var $state = $(
      '<img src="img/banderas/' + state.element.value.toLowerCase() + '.png" /><span>' + state.text + '</span>'
    );
    return $state;
  };

  $("select").select2({
    placeholder: "Select a state",
    templateResult: formatState
  });
  $(".select-country").select2({ 
    placeholder: "Select a state",
    templateResult: formatState,
    minimumResultsForSearch: Infinity,
     containerCssClass : "select-countryInput"
  });



  $('ul.apiNavigation').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('is-active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('is-active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('is-active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });

  $('.js-products').click(function(e) {
    $('.js-dropdownProducts').toggleClass('is-show');
    e.preventDefault();
  });

  $('.js-MenuMobile').click(function(e) {
    $('.NavigationMobile').toggleClass('is-open');
    $('html').toggleClass('Menu-open');
    e.preventDefault();
  });
  $('.js-hamburguer').click(function(e) {
    $('.NavigationMobile').toggleClass('is-open');
    $('html').toggleClass('Menu-open');
    e.preventDefault();
  });


  var nonLinearSlider = document.getElementById('slider-non-linear');

  noUiSlider.create(nonLinearSlider, {
    start: [ 4000 ],
    range: {
      'min': [  2000 ],
      '30%': [  4000 ],
      '70%': [  8000 ],
      'max': [ 10000 ]
    }
  });


  (function() {

  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }

  Prism.hooks.add('complete', function (env) {
    if (!env.code) {
      return;
    }

    // works only for <code> wrapped inside <pre> (not inline)
    var pre = env.element.parentNode;
    var clsReg = /\s*\bline-numbers\b\s*/;
    if (
      !pre || !/pre/i.test(pre.nodeName) ||
        // Abort only if nor the <pre> nor the <code> have the class
      (!clsReg.test(pre.className) && !clsReg.test(env.element.className))
    ) {
      return;
    }

    if (env.element.querySelector(".line-numbers-rows")) {
      // Abort if line numbers already exists
      return;
    }

    if (clsReg.test(env.element.className)) {
      // Remove the class "line-numbers" from the <code>
      env.element.className = env.element.className.replace(clsReg, '');
    }
    if (!clsReg.test(pre.className)) {
      // Add the class "line-numbers" to the <pre>
      pre.className += ' line-numbers';
    }

    var match = env.code.match(/\n(?!$)/g);
    var linesNum = match ? match.length + 1 : 1;
    var lineNumbersWrapper;

    var lines = new Array(linesNum + 1);
    lines = lines.join('<span></span>');

    lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
    }

    env.element.appendChild(lineNumbersWrapper);

  });


  }());




});

$(window).bind('scroll', function() {
  var navHeight = $( '.Navigation' ).innerHeight();
  if ($(window).scrollTop() > navHeight) {
    $('.Navigation').addClass('is-fixed');
    $('.js-dropdownProducts').removeClass('is-show');
  }
  else {
    $('.Navigation').removeClass('is-fixed');
  }
});


    


