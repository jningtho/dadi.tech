typewriter = require('typewriter');
domready = require('domready');

domready(function () {
  var wrap = document.querySelector('.w-api .explainer__wrap');
  var tw = typewriter(document.querySelector('.w-api .hljs'))
             .withAccuracy(100)
             .withMinimumSpeed(10)
             .withMaximumSpeed(17)
             .build();
  tw
    .put('<span class="txt--grey">$</span> ')
    .type('npm install @dadi/api --save')
    .wait(1000)
    .put('<br/><br/>my-project@1.0.0 /my-project<br/>└── <span class="txt--blue">@dadi/api@1.16.6</span>')
    .wait(500)
    .put('<br/><br/><span class="txt--grey">$</span> ')
    .type('npm explore @dadi/api -- npm run create-client')
    .wait(700)
    .put('<br/><br/>================================<br>DADI API Client Record Generator<br>================================')
    .wait(500)
    .put('<br/><br/>-> Client identifier (myClientId) ')
    .type('myClientId')
    .wait(700)
    .put('<br/>-> Secret access key: (myClientSecret) ', function(){
      wrap.scrollTop = wrap.scrollHeight;
    })
    .type('mySecret')
    .wait(700)
    .put('<br/>-> Access type (admin, user): (user) ', function(){
      wrap.scrollTop = wrap.scrollHeight;
    })
    .type('admin')
    .wait(700)
    .put('<br/><br/>(!) Is this ok?: (y/n) ', function(){
      wrap.scrollTop = wrap.scrollHeight;
    })
    .put('<br/><br/><span class="txt--blue">All done!</span>', function(){
      wrap.scrollTop = wrap.scrollHeight;
    });
});
